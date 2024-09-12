import connectDB from "@/config/database";
import Product from "@/models/productModal";
import { convertToSerializableObject } from "@/utils/convertToObject";

import ProductCard from "@/app/_components/ProductCard";
import SearchProductInput from "@/app/_components/SearchProductInput";

import { FaArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";

async function page({ searchParams: { searchProduct, categoryProduct } }) {
  await connectDB();

  const productPattern = new RegExp(searchProduct, "i");

  let query = {
    $or: [{ name: productPattern }, { description: productPattern }],
  };

  if (categoryProduct && categoryProduct !== "All") {
    const categoryPattern = new RegExp(categoryProduct, "i");
    query.type = categoryPattern;
  }

  const productsQueryResults = await Product.find(query).lean();
  const products = convertToSerializableObject(productsQueryResults);
  console.log(products);

  return (
    <>
      <section className="flex justify-center bg-amber-50 py-4">
        <Link
          href="/products"
          className="ml-12 flex items-center text-stone-700 hover:underline"
        >
          <FaArrowAltCircleLeft className="mb-1 mr-2" /> 回到所有商品
        </Link>
        <div className="mx-auto flex max-w-7xl flex-col items-start px-4 sm:px-6 lg:px-8">
          <SearchProductInput />
        </div>
      </section>

      {/* <section className="px-4 py-6">
        <div className="container-xl m-auto px-4 py-6 lg:container">
          
        </div>
      </section> */}

      <div className="mx-auto mt-4 px-12 text-2xl">Research results</div>
      {products.length === 0 ? (
        <p className="mx-auto px-12 py-8">No search results</p>
      ) : (
        <div className="mx-auto grid gap-x-4 px-12 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default page;
