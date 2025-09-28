"use client";
import { Heart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import useStore from "@/store";
import { Product } from "@/sanity.types";
import toast from "react-hot-toast";

function AddByHeart({
  product,
  singleProduct,
}: {
  product: Product | null | undefined;
  singleProduct?: boolean;
}) {
  const { addToFavorite, favoriteProduct } = useStore();
  const [existingProduct, setExistingProduct] = useState<Product | null>(null);
  useEffect(() => {
    const availableProduct = favoriteProduct.find(
      (item) => item?._id === product?._id
    );
    setExistingProduct(availableProduct || null);
  }, [product, favoriteProduct]);
  const handleToggleFavoriteItem = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    if (product?._id) {
      addToFavorite(product).then(() => {
        toast.success(
          existingProduct
            ? `Product Removed Sucsessfully`
            : "Product Added sucsessfully"
        );
      });
    }
  };
  return (
    <div>
      {!singleProduct ? (
        <Button
          onClick={(e) => handleToggleFavoriteItem(e)}
          className={`  z-10 rounded-full absolute  top-2 right-2 p-3 cursor-pointer hover:bg-shop-btn-dark-green hover:text-white hoverEffect ${existingProduct ? "bg-shop-btn-dark-green text-white" : "text-darkColor bg-transparent"}`}
        >
          <Heart size={15} className="" />
        </Button>
      ) : (
        <Button
          onClick={(e) => handleToggleFavoriteItem(e)}
          className={`bg-transparent group border-1 border-shop-light-green/70 hoverEffect cursor-pointer hover:border-shop-light-green hover:bg-transparent ${existingProduct && "border-shop-light-green"}`}
        >
          <Heart
            size={15}
            fill={existingProduct ? "#3b9c3c " : "#fff"}
            className="text-shop-light-green/70 group-hover:text-shop-light-green"
          />
        </Button>
      )}
    </div>
  );
}

export default AddByHeart;
