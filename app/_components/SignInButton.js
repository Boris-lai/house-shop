"use client";
import { signIn } from "next-auth/react";

function SignInButton() {
  return (
    <button
      className="flex items-center gap-6 border border-primary-300 px-10 py-4 text-lg font-medium"
      onClick={() =>
        signIn("google", { callbackUrl: "http://localhost:3000/" })
      }
    >
      <img
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google logo"
        height="24"
        width="24"
      />
      <span>Continue with Google</span>
    </button>
  );
}

export default SignInButton;
