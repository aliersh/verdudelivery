import { Suspense } from "react";

import CategoryNav from "@/components/feature/products/CategoryNav";
import CategoryProductsList from "@/components/feature/products/CategoryProductsList";
import fetchCategoryProducts from "@/lib/hooks/useCategoryProducts";
import { ProductosProps } from "@/lib/types/product";

import ProductosLoading from "./loading";

const DEFAULT_CATEGORIES = ["verduras", "frutas", "legumbres", "otros"];

const Productos = async ({
    categories = DEFAULT_CATEGORIES,
}: ProductosProps) => {
    const categoryData = await fetchCategoryProducts(categories);

    return (
        <div className="container px-4 mx-auto">
            <div className="flex gap-8 py-6">
                <CategoryNav categories={categories} />
                <div className="flex-1 min-w-0">
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
            </div>
        </div>
    );
};

export default Productos;
