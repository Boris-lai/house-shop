import connectDB from "@/config/database";
import Product from "@/models/productModal";

// GET /api/products
export const GET = async (request) => {
  try {
    await connectDB();

    const products = await Product.find({});

    return new Response(JSON.stringify(products), {
      status: 200,
    });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
