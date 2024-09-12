"use server";
import connectDB from "@/config/database";
import User from "@/models/userModal";
import Product from "@/models/productModal";

import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import cloudinary from "@/config/cloudinary";

async function addProduct(formdata) {
  await connectDB();

  const sessionUser = await getSessionUser();

  const user = await User.findOne({ email: sessionUser.email });

  // if (!user) {
  //   console.log("使用者不存在");
  // } else {
  //   console.log("使用者的ID: ", user._id);
  // }

  const images = formdata.getAll("images").filter((image) => image.name !== "");

  const productData = {
    user: user._id.toString(),
    category: formdata.get("type"),
    name: formdata.get("name"),
    description: formdata.get("description"),
    price: formdata.get("price"),
  };

  // Upload image to cloudinary
  const imageUrls = [];

  for (const imageFile of images) {
    const imageBuffer = await imageFile.arrayBuffer();
    const imageArray = Array.from(new Uint8Array(imageBuffer));
    const imageData = Buffer.from(imageArray);

    // Convert to base64
    const imageBase64 = imageData.toString("base64");

    // Make request to cloudinary
    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      {
        folder: "house-shop",
      },
    );

    imageUrls.push(result.secure_url);
  }

  productData.images = imageUrls;

  const newProduct = new Product(productData);
  await newProduct.save();

  revalidatePath("/products");

  redirect("/products");
}

export default addProduct;
