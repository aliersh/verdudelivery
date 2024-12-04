"use client";

import { createContext, useContext, useEffect, useState } from 'react';

import { HttpTypes } from '@medusajs/types';

import authApi from '../api/auth';
import { CustomerContextType, CustomerProviderProps } from '../types/auth';

const CustomerContext = createContext<CustomerContextType | null>(null);

export const CustomerProvider = ({ children }: CustomerProviderProps) => {
    const [customer, setCustomer] = useState<HttpTypes.StoreCustomer>();

    useEffect(() => {
        if (customer) {
            return;
        }

        const fetchCustomer = async () => {
            const customerData = await authApi.getCustomer();
            setCustomer(customerData);
        };

        fetchCustomer();
    }, [customer]);

    return (
        <CustomerContext.Provider
            value={{
                customer,
                setCustomer,
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
