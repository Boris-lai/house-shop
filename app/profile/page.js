import { getSessionUser } from "@/utils/getSessionUser";

import connectDB from "@/config/database";
import Image from "next/image";

import User from "@/models/userModal";
import Product from "@/models/productModal";
import ProfileProducts from "../_components/ProfileProducts";

import { convertToSerializableObject } from "@/utils/convertToObject";
import { Button, Link } from "@nextui-org/react";

async function page() {
  await connectDB();
  const sessionUser = await getSessionUser();

  const user = await User.findOne({ email: sessionUser.email });

  const userId = user._id.toString();

  const productsDocs = await Product.find({ user: userId }).lean();
  const products = productsDocs.map(convertToSerializableObject);

  return (
    <section>
      <div className="grid max-w-full grid-cols-[30fr_70fr] gap-4 p-4">
        <div className="h-screen border-r-[2px]">
          <div className="text-3xl">Profile</div>
          <Image
            className="mt-3 rounded-full"
            width={100}
            height={100}
            src={sessionUser.image}
          />
          <div className="mt-12 text-2xl">{sessionUser.name}</div>
          <div className="mt-6 text-xl">{sessionUser.email}</div>
        </div>

        <div className="h-screen w-full">
          <div className="grid grid-cols-2 justify-around">
            <div className="text-3xl">Product List</div>
            <Button
              href="/products/add"
              as={Link}
              className="w-[30%] justify-self-end text-white"
              color="success"
            >
              新增商品
            </Button>
          </div>
          <div className="mt-4 grid grid-cols-6 items-center gap-y-3 border-[1px] border-[#e5e7eb] border-[solid] text-2xl">
            <div></div>
            <div>Product</div>
            <div>Category</div>
            <div>Price</div>
            <div>Description</div>
            <div></div>
            <ProfileProducts products={products} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
