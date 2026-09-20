export type OIDCStateType = {
  provider: "google";
  state: string;
  nonce: string;
  codeChallenge: string;
  codeVerifier: string;
  redirectTo: string;
};
