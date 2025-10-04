import React from "react";
import Container from "./Container";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Title } from "./Text";
import { Heart } from "lucide-react";

function EmptyFav() {
  return (
    <Container>
      <div className="w-full h-[70vh] justify-center items-center">
        <div className="text-center flex flex-col justify-center items-center h-full">
          <div className="mb-5">
            <Heart size={35} className="w-20 h-20 text-lightColor" />
          </div>
          <div className="text-center w-100 space-y-5">
            <Title className="text-darkColor">Your wishlist is empty</Title>
            <p className="line-clamp-3 text-center text-gray-700">
              Items added to your wishlist will appear here
            </p>
            <Button
              asChild
              className="w-full bg-white border-1 border-shop-lighter-text/80 rounded-2xl p-5 text-darkColor hover:text-white hover:bg-darkColor hoverEffect"
            >
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default EmptyFav;
