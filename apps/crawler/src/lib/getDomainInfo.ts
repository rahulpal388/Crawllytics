import axios from "axios";
import { parse } from "tldts";
import { DomainInformationType } from "@repo/contracts/types/crawl/domain-leve-information/domainInformation.Types";

type RDAPBootstrap = {
  services: [string[], string[]][];
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

export async function getDomainInfo(domain: string): Promise<DomainInformationType> {
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
        const rdapUrl = `${server.replace(/\/$/, "")}/domain/${domain}`;

        const response = await axios.get(rdapUrl, {
          headers: {
            Accept: "application/rdap+json",
          },
          timeout: 10_000,
        });

        // ----------------------------------------
        // Parse response
        // ----------------------------------------

        return parseRDAPResponse(response.data);
      } catch (error: any) {
        console.warn(`RDAP server failed: ${server}`);

        console.warn(error.response?.data ?? error.message);
      }
    }

    return defaultDomainInfo;
  } catch (error: any) {
    console.error(`Failed to get domain information for ${domain}`);

    console.error(error.response?.data ?? error.message);

    return defaultDomainInfo;
  }
}

// ====================================================
// RDAP Parser
// ====================================================

function parseRDAPResponse(data: any): DomainInformationType {
  return {
    registrar: extractRegistrar(data),

    RegistryDomainID: data.handle ?? null,

    domainStatus: Array.isArray(data.status) ? data.status.join(", ") : "",

    registerOn: extractEventDate(data, "registration"),

    expiresOn: extractEventDate(data, "expiration"),

    nameServers: Array.isArray(data.nameservers)
      ? data.nameservers.map((ns: any) => ns.ldhName).filter(Boolean)
      : [],
  };
}

// ====================================================
// Extract Registrar
// ====================================================

function extractRegistrar(data: any): string | null {
  const registrar = data.entities?.find(
    (entity: any) => Array.isArray(entity.roles) && entity.roles.includes("registrar"),
  );

  if (!registrar) {
    return null;
  }

  const vcard = registrar.vcardArray?.[1];

  if (!Array.isArray(vcard)) {
    return null;
  }

  const fn = vcard.find((item: any[]) => item[0] === "fn");

  return fn?.[3] ?? null;
}

// ====================================================
// Extract Event Date
// ====================================================

function extractEventDate(data: any, eventAction: string): Date | null {
  const event = data.events?.find((event: any) => event.eventAction === eventAction);

  if (!event?.eventDate) {
    return null;
  }

  const date = new Date(event.eventDate);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date;
}
