import { Suspense } from "react";
import fetchCategoryProducts from "@/lib/hooks/useCategoryProducts";
import CategoryProductsList from "@/components/feature/products/CategoryProductsList";
import ProductosLoading from "./loading";
import { ProductosProps } from "@/lib/types/product";

const DEFAULT_CATEGORIES = ["verduras", "frutas", "legumbres", "otros"];

const Productos = async ({ categories = DEFAULT_CATEGORIES }: ProductosProps) => {
    const categoryData = await fetchCategoryProducts(categories);

    return (
        <div className="max-w-4xl px-4 mx-auto">
            <Suspense fallback={<ProductosLoading />}>
                {categories.map((handle, index) => (
                    <CategoryProductsList
                        key={handle}
                        handle={handle}
                        initialData={categoryData[index]}
                    />
                ))}
            </Suspense>
        </div>
    );
};

export default Productos;
