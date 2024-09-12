"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { openCartDropdown } from "@/app/slices/cartSlice";
import CartDropdown from "./CartDropdown";

import { useSession } from "next-auth/react";
import SignOutButton from "./SignOutButton";
// import SearchProductInput from "./SearchProductInput";

function Navgation() {
  const session = useSession();

  const { cartItems, isCartOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleOpenCartDropdown() {
    dispatch(openCartDropdown(!isCartOpen));
  }

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between border-b px-8 py-5">
      <nav className="z-10 flex gap-3 text-xl">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            height="50"
            width="50"
            quality={100}
            alt="The luxury CosyNest"
          />
          <span className="mr-4 text-xl font-semibold text-primary-100">
            The Luxury CosyNest
          </span>
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <Link
              href="/products"
              className="transition-colors hover:text-accent-400"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="transition-colors hover:text-accent-400"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="relative z-20 flex items-center gap-3">
        {session?.data?.user?.name ? (
          <Link href="/profile">
            <img
              className="h-8 w-8 rounded-full"
              src={session.data.user.image}
              alt={session.data.user.name}
              referrerPolicy="no-referrer"
            />
          </Link>
        ) : (
          ""
        )}
        {session?.data?.user ? (
          " "
        ) : (
          <Link href="/account">
            <div className="flex items-center rounded bg-yellow-200 p-1">
              <FaUser
                className="text-yellow-800 hover:text-accent-400"
                size={24}
              />
              <p className="ml-1 mt-1 text-lg text-stone-500">Login</p>
            </div>
          </Link>
        )}
        <button onClick={handleOpenCartDropdown}>
          <FaShoppingCart
            className="text-yellow-800 hover:text-accent-400"
            size={24}
          />
        </button>
        <span className="text-xl text-red-700">
          {cartItems.reduce((acc, cur) => acc + cur.quantity, 0)}
        </span>
        {/* <GoogleAccount /> */}
        {isCartOpen ? <CartDropdown /> : ""}
        {session?.data?.user ? <SignOutButton /> : ""}
      </nav>
    </div>
  );
}

export default Navgation;
