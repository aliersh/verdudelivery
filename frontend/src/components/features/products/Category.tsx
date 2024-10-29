"use client";

import { useCategory } from "@/hooks/useCategory";
import CategoryProducts from "./CategoryProducts";

type Params = {
    params: {
        handle: string;
    };
};

const Category = ({ params: { handle } }: Params) => {
    // Assuming useCategory now returns error state as suggested in previous improvement
    const { loading, category, error } = useCategory(handle);

    if (loading) {
        //TODO: Add loading spinner
        // return <LoadingSpinner />;
    }

    if (error) {
        //TODO: Add error message
        // return <ErrorMessage message={error} />;
    }

    if (!category) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                {/* //FIXME: The message appears ehrn loading four times    */}
                <p className="text-gray-500">Product category not found</p> 
            </div>
        );
    }

    return (
        <div className="mb-8 mt-4">
            <h1 className="mb-4 text-2xl font-bold">{category.name}</h1>
            <CategoryProducts params={{ categoryId: category.id }} />
        </div>
    );
};

export default Category;
