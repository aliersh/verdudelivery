import { HttpTypes } from "@medusajs/types";

export interface ProductItemProps {
    product: HttpTypes.StoreProduct & {
        subtitle?: string | null;
    };
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
    formatPrice: (price: number) => string;
}

export interface ProductImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export interface ProductPriceProps {
    unitPrice: number;
    quantity: number;
    unit: string;
    formatPrice: (price: number) => string;
}

export interface ProductTitleProps {
    title: string;
    subtitle?: string;
}

export interface QuantityControlProps {
    quantity: number;
    unit: string;
    productTitle: string;
    onIncrement: () => void;
    onDecrement: () => void;
}

export type ProductosProps = {
    categories?: string[];
};
