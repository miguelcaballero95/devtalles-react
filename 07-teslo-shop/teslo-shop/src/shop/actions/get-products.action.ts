import {tesloApi} from "@/api/teslo.api.ts";
import type {ProductsResponse} from "@/interfaces/products.response.ts";

export const getProductsAction = async () => {
  const {data} = await tesloApi.get<ProductsResponse>('/products');
  return data;
}