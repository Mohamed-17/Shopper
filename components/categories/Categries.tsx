import { Category } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Title } from "../Text";

function Categries({ categories }: { categories: Category[] }) {
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
      {categories.map((cat: Category) => (
        <div key={cat._id} className="flex items-center gap-3 group">
          <div className="w-20 h-20 border-1 border-shop-orange/40 p-1 group-hover:border-shop-orange/70 hoverEffect">
            {!cat.slug?.current ? (
              <div>No image for this category</div>
            ) : (
              <Link href={`/category/${cat.slug.current}`}>
                {cat.image?.asset?._ref && (
                  <Image
                    src={`${urlFor(cat.image.asset._ref)}`}
                    alt="image"
                    width={300}
                    height={300}
                    loading="lazy"
                    className="w-full h-full object-contain  group-hover:scale-112 hoverEffect"
                  />
                )}
              </Link>
            )}
          </div>
          <div>
            <Title className="text-lg font-semibold text-darkColor">
              {cat.title}
            </Title>
            <div className="flex gap-2.5">
              <div className="text-shop-dark-green font-semibold">
                {!cat.availableItem ? `(0)` : `(${cat.availableItem})`}
              </div>
              <div className="text-base">items Available</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categries;
