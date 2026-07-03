import {CustomJumbotron} from "@/shop/components/CustomJumbotron.tsx";
import {ProductsGrid} from "@/shop/components/ProductsGrid.tsx";
import {CustomPagination} from "@/components/custom/CustomPagination.tsx";
import {useParams} from "react-router";
import {useProducts} from "@/shop/hooks/useProducts.tsx";

export const GenderPage = () => {

  const {data} = useProducts();
  const {gender} = useParams();
  const genderLabel = gender === 'men' ? 'Men' : gender === 'women' ? 'Women' : 'Kid';

  if (!data) return null;

  return (
    <>
      <CustomJumbotron title={`${genderLabel} products`}/>
      <ProductsGrid products={data.products || []}/>
      <CustomPagination totalPages={7}/>
    </>
  )
}