"use client";
import Image from "next/image";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  decrementItemFromCart,
  deleteItem,
} from "../slices/cartSlice";

function CartItemsCheckout({ cartItems }) {
  const dispatch = useDispatch();

  return cartItems.map((cartItem) => (
    <>
      <div className="mt-1 grid grid-cols-5 items-center justify-around">
        <div>
          <Image src={cartItem.images[0]} width={100} height={100} />
        </div>
        <div className="text-blue-900">{cartItem.name}</div>
        <div className="flex items-center gap-x-1">
          <button
            className="rounded p-1 text-2xl"
            onClick={() => dispatch(decrementItemFromCart(cartItem))}
            disabled={cartItem.quantity === 1}
          >
            <CiCircleMinus />
          </button>
          <div className="text-red-500">{cartItem.quantity}</div>
          <button
            className="rounded p-1 text-2xl"
            onClick={() => dispatch(addItemToCart(cartItem))}
          >
            <CiCirclePlus />
          </button>
        </div>
        <div className="text-green-700">
          ${cartItem.price * cartItem.quantity}
        </div>
        <button
          className="text-left text-2xl"
          onClick={() => dispatch(deleteItem(cartItem.productId))}
        >
          &times;
        </button>
      </div>
    </>
  ));
}

export default CartItemsCheckout;
