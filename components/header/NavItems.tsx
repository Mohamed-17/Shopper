"use client";
import { navItemData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavItems() {
  const pathName = usePathname();

  return (
    <div className="hidden text-sm capitalize flex-1 md:inline-flex items-center justify-center gap-7 text-lightColor font-semibold ">
      {navItemData?.map((item) => (
        <Link
          href={item.href}
          key={item.title}
          className={`group font-poppins font-[640]  relative hover:text-shop-light-green ${
            item.href === pathName && "text-shop-light-green"
          }`}
        >
          {item.title}
          <span
            className={`w-0 bg-shop-light-green h-0.5 absolute -bottom-0.5 right-0 hoverEffect  group-hover:right-1/2 group-hover:w-1/2 ${
              item.href === pathName && " w-1/2"
            }`}
          ></span>
          <span
            className={`w-0 bg-shop-light-green h-0.5 absolute -bottom-0.5 left-0 hoverEffect group-hover:left-1/2 group-hover:w-1/2 ${
              item.href === pathName && " w-1/2"
            }`}
          ></span>
        </Link>
      ))}
    </div>
  );
}

export default NavItems;
