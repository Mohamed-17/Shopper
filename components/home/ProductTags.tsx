import { ProductWithBrand } from "@/app/(client)/product/[slug]/page";

import { Flame } from "lucide-react";
import React from "react";

function ProductTags({
  product,
  className,
}: {
  product: ProductWithBrand;
  className?: string;
}) {
  if (product?.status === "hot")
    return (
      <div className="absolute z-10 top-2 p-1 left-2 bg-white border-1 border-shop-orange/60 group-hover:border-shop-orange hoverEffect  rounded-full">
        <Flame size={20} className="text-shop-orange fill-shop-orange" />
      </div>
    );
  if (product?.status === "sale")
    return (
      <div className="absolute top-2 capitalize left-2 border-1 border-shop-light-text group-hover:border-shop-light-green hoverEffect rounded-3xl text-sm px-2.5">
        sale!
      </div>
    );
}

export default ProductTags;
