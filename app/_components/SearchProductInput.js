"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchProductInput() {
  const [searchProduct, setSearchProduct] = useState("");
  const [categoryProduct, setCategoryProduct] = useState("All");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchProduct === "" && categoryProduct === "All") {
      // router.push("/products");
      return;
    } else {
      const query = `?searchProduct=${searchProduct}&categoryProduct=${categoryProduct}`;
      router.push(`/products/search-results${query}`);
    }
  };

  return (
    // <form
    //   onSubmit={handleSubmit}
    //   className="mt-4 flex w-full items-center justify-center gap-x-1"
    // >
    //   {/* <SearchIcon /> */}
    //   <Input
    //     //   key={color}
    //     type="email"
    //     color="warning"
    //     placeholder="搜尋商品..."
    //     defaultValue=""
    //     className="max-w-[220px]"
    //     value={searchProduct}
    //     onChange={(e) => setSearchProduct(e.target.value)}
    //     // startContent={
    //     //   <SearchIcon className="dark:text-white/200 pointer-events-none mb-0.5 flex-shrink-0 text-black/50 text-slate-400" />
    //     // }
    //   />
    //   <Select
    //     label="商品分類"
    //     size="30"
    //     className="max-w-sm"
    //     value={categoryProduct}
    //     onChange={(e) => setCategoryProduct(e.target.value)}
    //   >
    //     {categoryItems.map((categoryItem) => (
    //       <SelectItem key={categoryItem.key}>{categoryItem.label}</SelectItem>
    //     ))}
    //   </Select>
    //   <Button isIconOnly color="warning" variant="faded">
    //     <SearchIcon className="dark:text-white/200 pointer-events-none mb-0.5 flex-shrink-0 text-black/50 text-blue-800" />
    //   </Button>
    // </form>
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-3 flex w-full max-w-2xl flex-col items-center px-12 py-4 md:flex-row"
    >
      <div className="mb-4 w-full md:mb-0 md:w-3/5 md:pr-2">
        <label htmlFor="location" className="sr-only">
          Product
        </label>
        <input
          type="text"
          id="location"
          placeholder="搜尋商品..."
          className="w-full rounded-lg bg-slate-50 px-4 py-3 text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
        />
      </div>
      <div className="w-full md:w-2/5 md:pl-2">
        <label htmlFor="property-type" className="sr-only">
          Product Category
        </label>
        <select
          id="property-type"
          className="w-full rounded-lg bg-slate-50 px-4 py-3 text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
          value={categoryProduct}
          onChange={(e) => setCategoryProduct(e.target.value)}
        >
          <option value="All">全部商品</option>
          <option value="Living room">客廳傢俱</option>
          <option value="Bedroom items">臥室物品</option>
          <option value="House gadgets">家居小物</option>
          <option value="Outdoor">戶外部品</option>
          <option value="Sofa chair">沙發、椅子</option>
          <option value="Storage">儲物傢俱</option>
        </select>
      </div>
      <button
        type="submit"
        className="mt-4 w-full rounded-lg bg-blue-500 px-6 py-3 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 md:ml-4 md:mt-0 md:w-auto"
      >
        Search
      </button>
    </form>
  );
}

export default SearchProductInput;
