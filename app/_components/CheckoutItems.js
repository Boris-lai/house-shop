"use client";

import CartItemsCheckout from "./CartItemsCheckout";

import { useSelector } from "react-redux";
import { getTotalCartPrice } from "../slices/cartSlice";

function CheckoutItems() {
  const { cartItems } = useSelector((state) => state.cart);

  const totalCartPrice = useSelector(getTotalCartPrice);
  const shippingPrice = totalCartPrice * 0.05;
  const allPrice = Math.round(totalCartPrice + shippingPrice);

  const orderItems = cartItems.map((item) => {
    return {
      name: item.name,
      quantity: item.quantity,
    };
  });

  console.log(orderItems);

  return (
    <div className="h-full items-center">
      <div className="grid grid-cols-5 justify-between border-b border-b-[1px_solid_darkgrey] py-6">
        <div></div>
        <div>Product</div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Remove</div>
      </div>
      <CartItemsCheckout cartItems={cartItems} />
      <div className="grid grid-cols-2 justify-between border-t border-t-[1px_solid_darkgrey] py-6">
        <div></div>
        <div className="text-left">
          Total Price : <span className="text-red-500">${totalCartPrice}</span>{" "}
          +{" "}
          <span className="text-purple-800">
            ${Math.round(shippingPrice)}(運費)
          </span>
          = <span className="text-green-700">$ {Math.round(allPrice)} 元</span>
        </div>
      </div>
      <input type="hidden" name="price" value={allPrice} />
      <input
        type="hidden"
        name="orderItems"
        value={JSON.stringify(orderItems)}
      />
    </div>
  );
}

export default CheckoutItems;
