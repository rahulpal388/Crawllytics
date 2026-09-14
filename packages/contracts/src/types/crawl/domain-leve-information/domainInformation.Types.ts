

export type DomainInformationType = {
    registrar: string | null;
    RegistryDomainID: string | null;
    domainStatus: string;
    registerOn: Date | null;
    expiresOn: Date | null;
    nameServers: string[];
};
