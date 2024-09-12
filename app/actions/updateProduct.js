"use server";

import connectDB from "@/config/database";
import User from "@/models/userModal";
import Product from "@/models/productModal";

import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function updateProduct(productId, formdata) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser) {
    throw new Error("Not authorized!");
  }

  const user = await User.findOne({ email: sessionUser.email });

  const existingProduct = await Product.findById(productId);

  //   console.log(existingProduct.user.toString());
  //   console.log(user._id.toString());

  // Verify Ownership
  if (existingProduct.user.toString() !== user._id.toString()) {
    throw new Error("Current user does not own this product");
  }

  const productData = {
    user: user._id.toString(),
    category: formdata.get("type"),
    name: formdata.get("name"),
    description: formdata.get("description"),
    price: formdata.get("price"),
  };

  await Product.findByIdAndUpdate(productId, productData);

  revalidatePath("/profile");
  redirect("/products");
}

export default updateProduct;
