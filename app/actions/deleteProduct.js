"use server";

import User from "@/models/userModal";
import Product from "@/models/productModal";

import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

import cloudinary from "@/config/cloudinary";

async function deleteProduct(productId) {
  const sessionUser = await getSessionUser();

  if (!sessionUser) throw new Error("Session User is required");

  const user = await User.findOne({ email: sessionUser.email });
  const userId = user._id.toString();

  const product = await Product.findById(productId);

  if (!product) throw new Error("Product not found!");

  // Verify ownership
  if (product.user.toString() !== userId) {
    throw new Error("Unauthorized");
  }

  // Extract public ID from image URLs
  const publicIds = product.images.map((imageUrl) => {
    const parts = imageUrl.split("/");
    return parts.at(-1).split(".").at(0);
  });

  // Delete images from Cloudinary
  if (publicIds.length > 0) {
    for (let publicId of publicIds) {
      await cloudinary.uploader.destroy("house-shop/" + publicId);
    }
  }

  await product.deleteOne();

  revalidatePath("/products");
}

export default deleteProduct;
