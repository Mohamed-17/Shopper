"use client";
import { Product } from "@/sanity.types";
import useStore from "@/store";
import { ShoppingBag } from "lucide-react";
import React from "react";

function Cart() {
  const { items } = useStore();
  return (
    <div className="relative">
      <ShoppingBag
        size={20}
        className="text-lightColor hover:text-shop-light-green hoverEffect"
      />
      <span className="absolute -top-1 -right-1 bg-shop-dark-green flex justify-center items-center w-3.5 h-3.5 rounded-full text-white text-xs font-bold ">
        {items?.length ? items?.length : 0}
      </span>
    </div>
  );
}

export default Cart;
