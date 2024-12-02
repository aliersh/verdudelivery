import productApi from '@/lib/api/products';
import { FetchResult } from '@/lib/types/api';

const fetchCategoryProducts = async (
    categories: string[]
): Promise<FetchResult[]> => {
    const promises = categories.map((handle) =>
        productApi.getCategoryProducts(handle)
    );
    return Promise.all(promises);
};

export default fetchCategoryProducts;
