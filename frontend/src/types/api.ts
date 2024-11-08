import { HttpTypes } from '@medusajs/types';

// export interface ApiResponse<T> {
//   data: T;
//   count?: number;
//   offset?: number;
//   limit?: number;
// }

// export interface ErrorResponse {
//   code: string;
//   message: string;
//   type: string;
//   errors?: Record<string, string[]>;
// }

export interface FetchResult {
  products: HttpTypes.StoreProduct[];
  categoryName: string;
} 