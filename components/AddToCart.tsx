import { Product } from "@/sanity.types";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";

type Props = {
  product: Product;
  className?: string;
};
function AddToCart({ product, className }: Props) {
  const isOutOfStock = product?.stock === 0;
  return (
    <Button
      disabled={isOutOfStock}
      className={cn(
        "w-full rounded-2xl cursor-pointer border-1 border-darkColor/50 bg-green-800 hover:bg-shop-btn-dark-green hoverEffect",
        className
      )}
    >
      <ShoppingBag />{" "}
      <span className="font-bold text-md">
        {product?.stock === 0 ? "Out Of Stock" : "Add To Cart"}
      </span>
    </Button>
  );
}

export default AddToCart;
