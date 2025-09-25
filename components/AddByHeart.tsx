import { Heart } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Product } from "@/sanity.types";

function AddByHeart({ product }: { product: Product }) {
  return (
    <Button className="bg-transparent rounded-full absolute text-darkColor top-2 right-2 p-3 cursor-pointer hover:bg-shop-btn-dark-green hover:text-white hoverEffect">
      <Heart size={15} className="" />
    </Button>
  );
}

export default AddByHeart;
