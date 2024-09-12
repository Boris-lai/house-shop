"use server";
import Order from "@/models/orderModal";
import { redirect } from "next/navigation";

async function checkout(formData) {
  const cartItems = formData.getAll("orderItems");
  const parseCartItems = JSON.parse(cartItems[0]);

  const checkoutData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    totalPrice: formData.get("price"),
    orderItems: parseCartItems,
  };

  // console.log(checkoutData);

  const newOrder = new Order(checkoutData);
  await newOrder.save();

  redirect("/thankyou");
}

export default checkout;
