import { productType } from "@/constants/data";
import Link from "next/link";
import React from "react";

type Props = {
  selectedTab: string;
  onSelectedTab: (tab: string) => void;
};
function ProductsTabs({ selectedTab, onSelectedTab }: Props) {
  return (
    <div className="w-full flex flex-wrap justify-between items-center gap-5">
      <div className="flex items-center gap-5 flex-wrap">
        {productType.map((tab) => (
          <button
            key={tab.title}
            onClick={() => onSelectedTab(tab.title)}
            className={`cursor-pointer px-5 py-2 border-1 border-shop-light-green/40 hover:bg-shop-light-green rounded-3xl hoverEffect hover:text-white font-bold bg-gray-100 ${tab.title === selectedTab && "bg-shop-light-green text-white"}`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>
        <Link
          href={"/shop"}
          className="cursor-pointer px-5 py-1.5 border-1 border-darkColor hover:bg-shop-light-green hover:border-shop-light-green rounded-3xl hoverEffect hover:text-white"
        >
          See All
        </Link>
      </div>
    </div>
  );
}

export default ProductsTabs;
