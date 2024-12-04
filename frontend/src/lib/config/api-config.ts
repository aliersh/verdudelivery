import axios, { AxiosError, AxiosInstance } from 'axios';
import { tokenStorage } from '../utils/token-storage';

// Base API configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_MEDUSA_API_URL || "http://localhost:9000";
export const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY as string;

// Create base axios instance
export const createApiInstance = (): AxiosInstance => {
    const instance = axios.create({
        baseURL: API_BASE_URL,
        headers: {
            "Content-Type": "application/json",
            "x-publishable-api-key": PUBLISHABLE_KEY,
        },
        withCredentials: true,
    });

    // Add request interceptor to include token
    instance.interceptors.request.use((config) => {
        const token = tokenStorage.getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    // Add response interceptor for error handling
    instance.interceptors.response.use(
        (response) => response.data,
        (error: AxiosError) => {
            if (error.response) {
                throw new Error(`API Error: ${error.response.statusText}`);
            }
            throw error;
        }
    );

    return instance;
}; 