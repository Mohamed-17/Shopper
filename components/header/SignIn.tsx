"use client";
import { SignInButton } from "@clerk/nextjs";
import React from "react";
import { ClerkLoaded, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
function SignIn() {
  return (
    <ClerkLoaded>
      <SignedIn>
        <button className="mb-0.7">
          <UserButton />
        </button>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="text-lightColor font-semibold hover:cursor-pointer text-sm hover:text-shop-light-green hoverEffect">
            Login
          </button>
        </SignInButton>
      </SignedOut>
    </ClerkLoaded>
  );
}

export default SignIn;
