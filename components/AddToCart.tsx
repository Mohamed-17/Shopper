"use client";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import useStore from "@/store";
import { Product } from "@/sanity.types";
import toast from "react-hot-toast";
import CurrencyFormatter from "./CurrencyFormatter";

function AddToCart({
  product,
  className,
}: {
  product: Product;
  className: string;
}) {
  const { addItem, getItemCount, removeItem } = useStore();
  const isOutOfStock = product?.stock === 0;
  const itemLength = getItemCount(product._id) as number;
  const handleAddItem = () => {
    if ((product?.stock as number) > itemLength) {
      addItem(product);
      toast.success(`${product.name} Added To Cart`);
    } else {
      toast.error("Item Out Of Stock ");
    }
  };
  const handleRemoveItem = () => {
    removeItem(product._id);
    if (itemLength > 0) {
      toast.success(`${product.name?.substring(0, 12)} Deleted`);
    } else {
      toast.error(`${product.name?.substring(0, 12)} is out of stock`);
    }
  };
  return (
    <>
      {itemLength ? (
        <div>
          <div className="flex w-full justify-between items-center">
            <span className="text-shop-light-text">Quantity</span>
            <div className="flex items-center gap-1">
              <Button
                variant={"outline"}
                className="cursor-pointer"
                onClick={handleRemoveItem}
              >
                <Minus size={12} />
              </Button>

              <span className="font-bold">{itemLength}</span>
              <Button
                variant={"outline"}
                className="cursor-pointer"
                onClick={handleAddItem}
              >
                <Plus size={12} />
              </Button>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-darkColor font-semibold ">
              Subtotal
            </span>
            <CurrencyFormatter
              amount={((product?.price as number) * itemLength) as number}
              amountStyle="text-darkColor"
            />
          </div>
        </div>
      ) : (
        <Button
          disabled={isOutOfStock}
          onClick={handleAddItem}
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
      )}
    </>
  );
}

export default AddToCart;
