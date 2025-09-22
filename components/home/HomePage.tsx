import React from "react";
import { Title } from "../Text";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { banner_1 } from "@/public";

function HomePage() {
  return (
    <div className="flex justify-between items-center px-4 py-10 md:px-10">
      <div className="flex-1  space-y-4">
        <Title>
          Grab Upto 50% Off on <br /> Selected headphone
        </Title>
        <Button
          asChild
          className="bg-shop-dark-green/90 hover:bg-shop-dark-green hoverEffect w-25 font-bold"
        >
          <Link href={"/shop"}>Buy Now</Link>
        </Button>
      </div>
      <div className="flex-1 hidden md:inline-flex">
        <Image
          src={banner_1}
          alt="banner-1"
          className="h-[250px] object-contain"
        />
      </div>
    </div>
  );
}

export default HomePage;
