import React from "react";
import { Title } from "../Text";
import { Brand } from "@/sanity.types";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

async function Brands({ brands }: { brands: Brand[] }) {
  return (
    <div className="mt-10 mb-20">
      <Title className="text-darkColor font-semibold">Shop By Brands</Title>
      <div className="  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5 mt-10 ">
        {brands &&
          brands?.map((brand) => (
            <Link
              href={`shop?=${brand?.slug?.current}`}
              key={brand._id}
              className="bg-white hoverEffecr hover:shadow-sm hover:shadow-darkColor/40 flex justify-center items-center"
            >
              {brand?.image?.asset?._ref && (
                <Image
                  src={`${urlFor(brand.image.asset._ref)}`}
                  alt={brand.title || "brand image"}
                  width={300}
                  height={300}
                  className="object-contain h-28 w-28"
                  loading="lazy"
                />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Brands;
