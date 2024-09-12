import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getTotalCartPrice } from "../slices/cartSlice";
import Link from "next/link";

function CartDropdown() {
  const { cartItems } = useSelector((state) => state.cart);
  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <div className="absolute right-10 top-10 z-10 flex h-80 w-72 flex-col rounded bg-[white] p-4 shadow-lg shadow-slate-600">
      <div className="flex h-64 flex-col">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <div className="mx-[auto] my-[80px] text-lg">Your cart is empty!</div>
        )}
      </div>
      <div className="flex items-center justify-around">
        <div className="flex items-center text-lg">
          Total : ${totalCartPrice}
        </div>
        <Link
          className="rounded-md bg-slate-800 px-4 py-2 text-white"
          href="/profile/checkout"
        >
          Check out
        </Link>
      </div>
    </div>
  );
}

export default CartDropdown;
