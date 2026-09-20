import axios from "axios";
import { parse } from "tldts";

import { DomainInformationType } from "@repo/contracts/types/crawl/domain-leve-information/domainInformation.Types";

type RDAPBootstrap = {
  services: [string[], string[]][];
};

type RDAPNameServer = {
  ldhName?: string;
};

type RDAPEvent = {
  eventAction?: string;
  eventDate?: string;
};

type RDAPVCardItem = [
  string,
  string,
  string,
  string | null | undefined,
  ...unknown[],
];

type RDAPEntity = {
  roles?: string[];
  vcardArray?: [string, RDAPVCardItem[]];
};

type RDAPResponse = {
  handle?: string;
  status?: string[];
  nameservers?: RDAPNameServer[];
  entities?: RDAPEntity[];
  events?: RDAPEvent[];
};

type AxiosErrorResponse = {
  response?: {
    data?: unknown;
  };
  message: string;
};

/**
 * Some TLDs have an RDAP service but are not currently
 * available through the IANA RDAP bootstrap registry.
 *
 * Add those TLDs here as needed.
 */
const RDAP_FALLBACK_SERVERS: Record<string, string> = {
  io: "https://rdap.identitydigital.services/rdap/",
};

const defaultDomainInfo: DomainInformationType = {
  registrar: null,
  RegistryDomainID: null,
  domainStatus: null,
  registerOn: null,
  expiresOn: null,
  nameServers: [],
};

function getRegistrableDomain(hostname: string): string | null {
  const result = parse(hostname);

  return result.domain ?? null;
}

function isAxiosError(error: unknown): error is AxiosErrorResponse {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof error.message === "string"
  );
}

export async function getDomainInfo(
  domain: string,
): Promise<DomainInformationType> {
  try {
    // ----------------------------------------
    // Normalize domain
    // ----------------------------------------

    domain = getRegistrableDomain(domain) ?? "";

    if (!domain && domain.trim() === "") {
      return defaultDomainInfo;
    }

    domain = domain.toLowerCase();

    const tld = domain.split(".").pop();

    if (!tld) {
      return defaultDomainInfo;
    }

    // ----------------------------------------
    // Get IANA RDAP bootstrap
    // ----------------------------------------

    const bootstrapResponse = await axios.get<RDAPBootstrap>(
      "https://data.iana.org/rdap/dns.json",
      {
        timeout: 10_000,
      },
    );

    // ----------------------------------------
    // Find RDAP server for TLD
    // ----------------------------------------

    const service = bootstrapResponse.data.services.find(([tlds]) =>
      tlds.some((item) => item.toLowerCase() === tld),
    );

    let rdapServers: string[];

    if (service) {
      // TLD found in IANA bootstrap
      rdapServers = service[1];
    } else {
      // ----------------------------------------
      // Fallback RDAP server
      // ----------------------------------------

      const fallbackServer = RDAP_FALLBACK_SERVERS[tld];

      if (!fallbackServer) {
        return defaultDomainInfo;
      }

      rdapServers = [fallbackServer];
    }

    // ----------------------------------------
    // Try RDAP servers
    // ----------------------------------------

    for (const server of rdapServers) {
      try {
        const rdapUrl = `${server.replace(/\/$/, "")} /domain/${domain} `;

        const response = await axios.get<RDAPResponse>(rdapUrl, {
          headers: {
            Accept: "application/rdap+json",
          },
          timeout: 10_000,
        });

        // ----------------------------------------
        // Parse response
        // ----------------------------------------

        return parseRDAPResponse(response.data);
      } catch (error: unknown) {
        console.warn(`RDAP server failed: ${server} `);

        if (isAxiosError(error)) {
          console.warn(error.response?.data ?? error.message);
        } else {
          console.warn(error);
        }
      }
    }

    return defaultDomainInfo;
  } catch (error: unknown) {
    console.error(`Failed to get domain information for ${domain}`);

    if (isAxiosError(error)) {
      console.error(error.response?.data ?? error.message);
    } else {
      console.error(error);
    }

    return defaultDomainInfo;
  }
}

// ====================================================
// RDAP Parser
// ====================================================

function parseRDAPResponse(data: RDAPResponse): DomainInformationType {
  return {
    registrar: extractRegistrar(data),
    RegistryDomainID: data.handle ?? null,
    domainStatus: Array.isArray(data.status) ? data.status.join(", ") : "",
    registerOn: extractEventDate(data, "registration"),
    expiresOn: extractEventDate(data, "expiration"),
    nameServers: Array.isArray(data.nameservers)
      ? data.nameservers
        .map((ns) => ns.ldhName)
        .filter((name): name is string => Boolean(name))
      : [],
  };
}

// ====================================================
// Extract Registrar
// ====================================================

function extractRegistrar(data: RDAPResponse): string | null {
  const registrar = data.entities?.find(
    (entity) =>
      Array.isArray(entity.roles) && entity.roles.includes("registrar"),
  );

  if (!registrar) {
    return null;
  }

  const vcard = registrar.vcardArray?.[1];

  if (!Array.isArray(vcard)) {
    return null;
  }

  const fn = vcard.find((item) => item[0] === "fn");

  return typeof fn?.[3] === "string" ? fn[3] : null;
}

// ====================================================
// Extract Event Date
// ====================================================

function extractEventDate(
  data: RDAPResponse,
  eventAction: string,
): Date | null {
  const event = data.events?.find(
    (event) => event.eventAction === eventAction,
  );

  if (!event?.eventDate) {
    return null;
  }

  const date = new Date(event.eventDate);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date;
}