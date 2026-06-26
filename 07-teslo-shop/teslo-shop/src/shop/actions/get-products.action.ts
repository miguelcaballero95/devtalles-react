import {tesloApi} from "@/api/teslo.api.ts";

export const getProductsAction = async () => {
  const {data} = await tesloApi.get('/products');
  return data;
}