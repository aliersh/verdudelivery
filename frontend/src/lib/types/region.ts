import { HttpTypes } from "@medusajs/types";

export type RegionContextType = {
    region?: HttpTypes.StoreRegion;
    setRegion: React.Dispatch<
        React.SetStateAction<HttpTypes.StoreRegion | undefined>
    >;
};

export type RegionProviderProps = {
    children: React.ReactNode;
};