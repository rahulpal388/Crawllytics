import axios from "axios";


const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

const API_VERSION = "/api/v1";

const API_BASE_URL = `${API_URL}${API_VERSION}`;


export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    timeout: 30000,
})