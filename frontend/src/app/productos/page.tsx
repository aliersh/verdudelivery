import { Suspense } from "react";
import fetchCategoryProducts from "@/hooks/useCategoryProducts";
import CategoryProductsList from "@/components/products/CategoryProductsList";
import ProductosLoading from "./loading";

type ProductosProps = {
    categories?: string[];
};

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
