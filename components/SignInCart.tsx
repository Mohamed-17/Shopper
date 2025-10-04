import Link from "next/link";
import Logo from "./header/Logo";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

function SignInCart({ message }: { message?: string }) {
  return (
    <div className="bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 md:py-32 h-full">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Logo />

          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome Back!
          </h2>
          <p className="mt-2 text-md text-gray-600">
            {message
              ? message
              : "Log in to view your cart items and checkout. Don't miss out on your favorite products!"}
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <SignInButton mode="modal">
              <div className="w-full flex items-center justify-center cursor-pointer px-4 py-2 border border-transparent text-sm font-semibold rounded-md text-white bg-shop-dark-green/80 hover:bg-shop-dark-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amazonOrangeDark hoverEffect">
                Sign In
              </div>
            </SignInButton>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">Don’t have an account?</p>
          <SignUpButton mode="modal">
            <div className="w-full flex mt-5 cursor-pointer items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md  bg-white text-darkColor hover:text-white hover:bg-shop-dark-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amazonOrangeDark hoverEffect">
              {" "}
              Create An Account
            </div>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
}

export default SignInCart;
