export type PageSecurityAnalysis = {
  httpsEnabled: boolean;

  hstsEnabled: boolean;

  cspPresent: boolean;

  xFrameOptionsPresent: boolean;

  xContentTypeOptionsPresent: boolean;

  referrerPolicyPresent: boolean;

  permissionsPolicyPresent: boolean;
};
