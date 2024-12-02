import { createApiInstance } from '../config/api';
import { CustomerResponse, RegisterData, RegisterResponse } from '../types/auth';

const apiInstance = createApiInstance();

const authApi = {
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
};

export default authApi;
