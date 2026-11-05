import "server-only";
import axios from "axios";
import { API_BASE_URL } from "../apiClient";
import getSessionCookies from "../../lib/getSessionCookies";

export const serverApiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  timeout: 30000,
});

serverApiClient.interceptors.request.use((config) => {
  void getSessionCookies("sessionId").then((cookie) => {
    if (cookie) {
      config.headers?.set("Cookie", `sessionId=${cookie}`);
    }
  });
  return config;
});
