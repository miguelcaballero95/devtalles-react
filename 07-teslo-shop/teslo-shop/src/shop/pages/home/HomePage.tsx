import {CustomPagination} from "@/components/custom/CustomPagination"
import {CustomJumbotron} from "@/shop/components/CustomJumbotron"
import {ProductsGrid} from "@/shop/components/ProductsGrid"
import {useProducts} from "@/shop/hooks/useProducts.tsx";

export const HomePage = () => {

  const {data} = useProducts();

  if (!data) return null;

  return (
    <>
      <CustomJumbotron title="All products"/>
      <ProductsGrid products={data.products || []}/>
      <CustomPagination totalPages={7}/>
    </>
  )
}