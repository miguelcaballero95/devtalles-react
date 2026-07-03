import {useQuery} from "@tanstack/react-query";
import {getProductsAction} from "@/shop/actions/get-products.action.ts";
import {useParams, useSearchParams} from "react-router";

export const useProducts = () => {

  const {gender} = useParams();
  const [searchParams] = useSearchParams();

  const limit = searchParams.get('limit') || '9';
  const page = searchParams.get('page') || '1';
  const offset = (Number(page) - 1) * Number(limit);
  const sizes = searchParams.get('sizes') || '';

  return useQuery({
    queryKey: ['products', {offset, limit, gender, sizes}],
    queryFn: () => getProductsAction({
      limit: isNaN(Number(limit)) ? 9 : limit,
      offset: isNaN(offset) ? 0 : offset,
      gender,
      sizes
    }),
    staleTime: 1000 * 60 * 5,
  });
};