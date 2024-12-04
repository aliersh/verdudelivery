import { createApiInstance } from '../config/api-config';
import { CustomerResponse, RegisterData, RegisterResponse, LoginData } from '../types/auth';
import { tokenStorage } from '../utils/token-storage';

const apiInstance = createApiInstance();

const authApi = {
    login: async (data: LoginData) => {
        // Get JWT token
        const { token } = await apiInstance.post<never, { token: string }>(
            "/auth/customer/emailpass",
            data
        );

        // Store token
        tokenStorage.setToken(token);

        // Get customer data using the token
        const customerResponse = await apiInstance.get<never, CustomerResponse>(
            "/store/customers/me"
        );

        return {
            token,
            customer: customerResponse.customer,
        };
    },

    register: async (data: RegisterData) => {
        const { token } = await apiInstance.post<never, RegisterResponse>(
            "/auth/customer/emailpass/register",
            data
        );

        // Create customer with the received token
        const customerResponse = await apiInstance.post<
            never,
            CustomerResponse
        >(
            "/store/customers",
            { email: data.email },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return {
            token,
            customer: customerResponse.customer,
        };
    },

    getCustomer: async () => {
        try {
            const token = tokenStorage.getToken();
            if (!token) return undefined;

            const response = await apiInstance.get<never, CustomerResponse>(
                '/store/customers/me'
            );
            return response.customer;
        } catch {
            return undefined;
        }
    },
};

export default authApi;
