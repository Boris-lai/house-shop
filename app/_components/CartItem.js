import { Image } from "@nextui-org/react";
import { FaTrash } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { deleteItem } from "../slices/cartSlice";

function CartItem({ cartItem }) {
  const { productId, name, quantity, price, images } = cartItem;

  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(productId));
  }

  return (
    <div className="mb-1 flex h-14 w-full">
      <Image
        alt="Card background"
        className="rounded-sm object-cover"
        src={images[0]}
        width={50}
        height={50}
      />
      <div className="flex w-9/12 flex-col items-start justify-center px-2 py-5">
        <span className="text-base">{name}</span>
        <span>
          {quantity} &times; ${price}
        </span>
      </div>
      <div className="flex items-center px-2">
        <button onClick={handleDeleteItem}>
          <FaTrash className="text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
