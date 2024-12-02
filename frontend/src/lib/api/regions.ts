import { HttpTypes } from '@medusajs/types';

import { createApiInstance } from '../config/api-config';

const apiInstance = createApiInstance();

const regionApi = {
    list: async () =>
        apiInstance.get<never, { regions: HttpTypes.StoreRegion[] }>(
            "/store/regions"
        ),

    getById: async (regionId: string) =>
        apiInstance.get<never, { region: HttpTypes.StoreRegion }>(
            `/store/regions/${regionId}`
        ),
};

export default regionApi;
