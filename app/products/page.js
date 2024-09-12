import Carousel from "../_components/Carousel";

import { getProducts } from "../_lib/data-service";
import ProductCard from "../_components/ProductCard";
import { revalidatePath } from "next/cache";
import SearchProductInput from "../_components/SearchProductInput";

async function page() {
  const products = await getProducts();

  revalidatePath("/products");

  return (
    <>
      <Carousel />
      <p className="text-center text-2xl">All Products</p>
      <SearchProductInput />
      <div className="mx-auto grid gap-4 px-12 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default page;
