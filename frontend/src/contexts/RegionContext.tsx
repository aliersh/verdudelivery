"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { HttpTypes } from "@medusajs/types";
import { RegionContextType, RegionProviderProps } from "@/types/region";

const RegionContext = createContext<RegionContextType | null>(null);

export const RegionProvider = ({ children }: RegionProviderProps) => {
    const [region, setRegion] = useState<HttpTypes.StoreRegion>();

    useEffect(() => {
        if (region) {
            // set its ID in the local storage in
            // case it changed
            localStorage.setItem("region_id", region.id);
            return;
        }

        const regionId = localStorage.getItem("region_id");
        if (!regionId) {
            // retrieve regions and select the first one
            fetch(`http://localhost:9000/store/regions`, {
                credentials: "include",
                headers: {
                    "x-publishable-api-key":
                        process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY as string,
                },
            })
                .then((res) => res.json())
                .then(({ regions }) => {
                    console.log(regions);
                    setRegion(regions[0]);
                });
        } else {
            // retrieve selected region
            fetch(`http://localhost:9000/store/regions/${regionId}`, {
                credentials: "include",
                headers: {
                    "x-publishable-api-key":
                        process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY as string,
                },
            })
                .then((res) => res.json())
                .then(({ region: dataRegion }) => {
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
