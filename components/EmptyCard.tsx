import { emptyCart } from "@/public";
import Image from "next/image";
import React from "react";
import { Title } from "./Text";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "motion/react";
function EmptyCard() {
  return (
    <div className="w-full h-[70vh] justify-center items-center">
      <div className="text-center flex flex-col justify-center items-center h-full">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={emptyCart}
            alt="empty cart"
            width={500}
            height={500}
            className="object-contain w-50 h-60"
          />
        </motion.div>
        <div className="text-center w-100 space-y-5">
          <Title className="text-darkColor">Your cart is feeling lonely</Title>
          <p className="line-clamp-3 text-center text-gray-700">
            It looks like you haven&apos;t added anything to your cart yet.
            Let&apos;s change that and find some amazing products for you!
          </p>
          <Button
            asChild
            className="w-full bg-white border-1 border-shop-lighter-text/80 rounded-2xl p-5 text-darkColor hover:text-white hover:bg-darkColor hoverEffect"
          >
            <Link href="/shop">Discover Products</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EmptyCard;
