import { productApi } from "@/lib/api/api-server";

const fetchCategoryProducts = async (categories: string[]) => {
    const promises = categories.map((handle) =>
        productApi.getCategoryProducts(handle)
    );
    return Promise.all(promises);
};

export default fetchCategoryProducts;
