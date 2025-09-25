"use client";
import { ProductWithBrand } from "@/app/(client)/product/[slug]/page";
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";

import Image from "next/image";
import React, { useState } from "react";

type Props = {
  images?:
    | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
        _key: string;
      }[]
    | undefined;
  product: ProductWithBrand;
};
function ImageView({ images, product }: Props) {
  const [activeImage, setActiveImage] = useState(images && images[0]);
  console.log(activeImage);

  return (
    <div className="flex flex-col">
      <div className="group">
        {activeImage?.asset && (
          <Image
            src={urlFor(activeImage.asset._ref).url()}
            alt={`${product?.name ? product.name : "product-image"}`}
            width={700}
            height={700}
            quality={100}
            className={`w-full h-100 object-contain overflow-hidden transition-transform bg-shop-light-bg hoverEffect cursor-pointer
                
                ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}
                `}
            priority={true}
          />
        )}
      </div>
      <div className="flex mt-10 gap-1.5 items-center">
        {images &&
          images.map((image) => (
            <div
              key={image._key}
              onClick={() => setActiveImage(image)}
              className={`border-1 cursor-pointer rounded-md p-2.5   hoverEffect  ${image._key === activeImage?._key ? "border-darkColor" : "border-shop-light-text/30"}`}
            >
              {image.asset && (
                <Image
                  src={urlFor(image.asset._ref).url()}
                  alt={`${product?.name ? product.name : "product-image"}`}
                  width={200}
                  height={200}
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default ImageView;
