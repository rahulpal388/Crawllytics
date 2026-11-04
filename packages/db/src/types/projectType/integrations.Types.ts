import mongoose from "mongoose";

export enum IntegrationProvider {
  GOOGLE_SEARCH_CONSOLE = "google_search_console",
  GOOGLE_ANALYTICS = "google_analytics",
}

export enum IntegrationStatus {
  CONNECTED = "connected",
  DISCONNECTED = "disconnected",
  ERROR = "error",
}


export type IntegrationProviderType = typeof IntegrationProvider[keyof typeof IntegrationProvider];

export type IntegrationStatusType = typeof IntegrationStatus[keyof typeof IntegrationStatus];

export type IntegrationCredentialsSchemaType = {
  accessToken: string;
  refreshToken: string;
  expiresAt: Date;
};

export type IntegrationSchemaType = {
  projectId: mongoose.Types.ObjectId;
  provider: IntegrationProviderType;
  status: IntegrationStatusType;
  credentials: IntegrationCredentialsSchemaType;
  createdAt: Date;
  updatedAt: Date;
};
