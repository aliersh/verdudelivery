// frontend/src/app/productos/hooks/useCategoryProducts.ts
import { getCategoryProducts } from '@/lib/medusa-fetch';

const fetchCategoryProducts = async (categories: string[]) => {
    const promises = categories.map(handle => getCategoryProducts(handle));
    return Promise.all(promises);
};

export default fetchCategoryProducts;