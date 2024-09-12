"use client";
// import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { MdLogout } from "react-icons/md";
import { signOut } from "next-auth/react";

function SignOutButton() {
  return (
    <button
      className="flex w-[50%] items-center gap-4 px-3 py-2 font-semibold text-primary-500 transition-colors hover:bg-primary-900 hover:text-primary-100"
      onClick={() => signOut()}
    >
      <MdLogout className="h-6 w-6 text-primary-600" />
      <span>Logout</span>
    </button>
  );
}

export default SignOutButton;
