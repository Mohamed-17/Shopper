import { Heart } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { ProductWithBrand } from "@/app/(client)/product/[slug]/page";

function AddByHeart({
  product,
  singleProduct,
}: {
  product: ProductWithBrand;
  singleProduct?: boolean;
}) {
  return (
    <div>
      {!singleProduct ? (
        <Button className="bg-transparent  z-10 rounded-full absolute text-darkColor top-2 right-2 p-3 cursor-pointer hover:bg-shop-btn-dark-green hover:text-white hoverEffect">
          <Heart size={15} className="" />
        </Button>
      ) : (
        <Button className="bg-transparent group border-1 border-shop-light-green/70 hoverEffect cursor-pointer hover:border-shop-light-green hover:bg-transparent">
          <Heart
            size={15}
            className="text-shop-light-green/70 group-hover:text-shop-light-green"
          />
        </Button>
      )}
    </div>
  );
}

export default AddByHeart;
