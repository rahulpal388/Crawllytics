export type DomainInformationType = {
  registrar: string | null;
  RegistryDomainID: string | null;
  domainStatus: string | null;
  registerOn: Date | null;
  expiresOn: Date | null;
  nameServers: string[];
};
