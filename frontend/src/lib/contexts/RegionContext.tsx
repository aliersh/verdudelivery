"use client";

import { createContext, useContext, useEffect, useState } from 'react';

import regionApi from '@/lib/api/regions';
import { RegionContextType, RegionProviderProps } from '@/lib/types/region';
import { HttpTypes } from '@medusajs/types';

const RegionContext = createContext<RegionContextType | null>(null);

export const RegionProvider = ({ children }: RegionProviderProps) => {
    const [region, setRegion] = useState<HttpTypes.StoreRegion>();

    useEffect(() => {
        if (region) {
            localStorage.setItem("region_id", region.id);
            return;
        }

        const regionId = localStorage.getItem("region_id");
        if (!regionId) {
            regionApi.list().then(({ regions }) => {
                setRegion(regions[0]);
            });
        } else {
            regionApi.getById(regionId).then(({ region: dataRegion }) => {
                setRegion(dataRegion);
            });
        }
    }, [region]);

    return (
        <RegionContext.Provider
            value={{
                region,
                setRegion,
            }}
        >
            {children}
        </RegionContext.Provider>
    );
};

export const useRegion = () => {
    const context = useContext(RegionContext);

    if (!context) {
        throw new Error("useRegion must be used within a RegionProvider");
    }

    return context;
};
