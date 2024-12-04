"use client";

import { createContext, useContext, useEffect, useState } from 'react';

import { HttpTypes } from '@medusajs/types';

import authApi from '../api/auth';
import { CustomerContextType, CustomerProviderProps } from '../types/auth';
import { tokenStorage } from '../utils/token-storage';

const CustomerContext = createContext<CustomerContextType | null>(null);

export const CustomerProvider = ({ children }: CustomerProviderProps) => {
    const [customer, setCustomer] = useState<HttpTypes.StoreCustomer>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const initializeCustomer = async () => {
            const token = tokenStorage.getToken();
            
            if (!token) {
                setIsLoading(false);
                return;
            }

            try {
                const customerData = await authApi.getCustomer();
                setCustomer(customerData);
            } catch {
                tokenStorage.removeToken();
            } finally {
                setIsLoading(false);
            }
        };

        initializeCustomer();
    }, []);

    return (
        <CustomerContext.Provider
            value={{
                customer,
                setCustomer,
                isLoading,
            }}
        >
            {children}
        </CustomerContext.Provider>
    );
};

export const useCustomer = () => {
    const context = useContext(CustomerContext);

    if (!context) {
        throw new Error("useCustomer must be used within a CustomerProvider");
    }

    return context;
};
