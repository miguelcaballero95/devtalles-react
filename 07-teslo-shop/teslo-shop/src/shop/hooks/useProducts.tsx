import {useQuery} from "@tanstack/react-query";
import {getProductsAction} from "@/shop/actions/get-products.action.ts";

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProductsAction,
  });
};