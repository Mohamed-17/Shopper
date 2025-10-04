"use client";
import { Product } from "@/sanity.types";
import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import useStore from "@/store";
import { urlFor } from "@/sanity/lib/image";
import AddToCart from "./AddToCart";
import CurrencyFormatter from "./CurrencyFormatter";

function WishListTable({
  product,
  favoriteLength,
  setFavoriteLength,
}: {
  product: Product;
  favoriteLength: number;
  setFavoriteLength: (value: number) => void;
}) {
  const { favoriteProduct, removeFromFavorite } = useStore();

  return (
    <tr className="w-full h-30 border-2">
      <td className="w-120">
        <div className="flex items-center gap-4 line-clamp-1">
          <X size={18} onClick={() => removeFromFavorite(product._id)} />
          <Image
            src={
              product?.images?.[0]?.asset?._ref
                ? urlFor(product.images[0].asset._ref).url()
                : "/products/product_1.png"
            }
            alt={product.name || "Product"}
            width={80}
            height={80}
            className="object-cover rounded hidden md:block"
          />
          <span className="line-clamp-1">{product.name}</span>
        </div>
      </td>
      <td className="w-50 hidden md:table-cell uppercase text-xs line-clamp-1 tracking-wider">
        {product.categories?.join(", ")}
      </td>
      <td className="hidden md:table-cell w-30 capitalize">
        {product.variant}
      </td>
      <td className="hidden md:table-cell w-30">
        <div
          className={`w-fit rounded-sm px-2 font-semibold text-sm  ${product.stock !== 0 ? "text-shop-light-green bg-shop-lighter-green/40 " : " text-destructive bg-shop-light-text"}`}
        >
          {product.stock !== 0 ? "In Stock" : "Out Of Stock"}
        </div>
      </td>
      <td className="w-30">
        <CurrencyFormatter amount={product.price as number} />
      </td>
      <td className="w-30">
        <AddToCart
          product={product}
          className="bg-shop-btn-dark-green/80 rounded-md"
        />
      </td>
    </tr>
  );
}

export default WishListTable;
