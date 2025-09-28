import { urlFor } from "@/sanity/lib/image";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import CurrencyFormatter from "../CurrencyFormatter";
import AddToCart from "../AddToCart";
import ProductTags from "./ProductTags";
import Link from "next/link";
import AddByHeart from "../AddByHeart";
import { ProductWithBrand } from "@/app/(client)/product/[slug]/page";
import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";

type Props = {
  product: ProductWithBrand;
  buttonStyle?: string;
};
function ProductItem({ product, buttonStyle }: Props) {
  if (!product.images || product.images.length === 0) {
    return (
      <div className="border-1 border-shop-light-text/20 p-4">
        <div className="text-center text-gray-500">
          There&apos;s no details for {product.name}
        </div>
      </div>
    );
  }

  const firstImage = product.images[0];
  const imageSource = firstImage.asset || firstImage.media;

  return (
    <div className="border-1 border-shop-light-text/20 rounded-md group relative w-full">
      <Link
        href={`/product/${product.slug?.current}`}
        className="bg-shop-lighter-bg group overflow-hidden relative "
      >
        {imageSource ? (
          <Image
            src={urlFor(imageSource).width(300).height(300).url()}
            alt={product.name || "product name"}
            width={700}
            height={700}
            className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop-light-bg hoverEffect
                
                ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}
                `}
            priority={true}
          />
        ) : (
          <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">
              There&apos;s no image for this product
            </span>
          </div>
        )}
      </Link>
      <ProductTags product={product} className={""} />
      <AddByHeart product={product as Product} />
      <div className="px-2 py-5 space-y-1.5">
        <div className="uppercase line-clamp-1 text-xs  text-shop-lighter-text">
          {product.categories?.join(", ")}
        </div>
        <div className="text-sm font-bold text-darkColor line-clamp-1">
          {product.name}
        </div>
        <div className=" text-xs flex items-center gap-3">
          <div className=" flex items-center gap-1.5">
            {Array.from({ length: 5 })

              .map((_, index) => (
                <Star
                  key={index}
                  className={`w-2.5 h-2.5 text-shop-light-green fill-shop-light-green ${index > 3 && "fill-shop-light-text text-shop-light-text"}`}
                />
              ))}
          </div>
          <div
            className="mb-0.5 tracking-wider line-clamp-1 text-xs  text-shop-lighter-text font-semibold
          "
          >
            (5) Reviews
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div
            className={`text-darkColor font-[500] font-base ${!product?.stock && "text-destructive"}`}
          >
            {!product?.stock ? "Out Of Stock" : "In Stock"}
          </div>
          {product.stock && (
            <div className="text-shop-dark-green/80 font-bold">
              {product.stock}
            </div>
          )}
        </div>
        <CurrencyFormatter
          amount={product.price as number}
          discount={product.discount as number}
        />
        <AddToCart
          product={product as Product}
          className={cn("w-36 mt-3", buttonStyle)}
        />
      </div>
    </div>
  );
}

export default ProductItem;
