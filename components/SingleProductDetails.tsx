import React from "react";
import { Text, Title } from "./Text";
import { ChevronDown, CornerDownLeft, Star, Truck } from "lucide-react";
import CurrencyFormatter from "./CurrencyFormatter";
import AddToCart from "./AddToCart";
import AddByHeart from "./AddByHeart";
import { FiShare2 } from "react-icons/fi";
import { RxBorderSplit } from "react-icons/rx";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegQuestionCircle } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ProductWithBrand } from "@/app/(client)/product/[slug]/page";

function SingleProductDetails({ product }: { product: ProductWithBrand }) {
  return (
    <div className="p-8 space-y-10">
      <div className="space-y-1.5">
        <Title className="text-darkColor text-2xl">{product?.name}</Title>
        <Text className="text-shop-light-text font-[400px]">
          {product?.description}
        </Text>
        <div>
          <div className="flex gap-1 items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                fill="#3b9c3c"
                className="text-shop-light-green"
                size={12}
              />
            ))}
            <span className="text-sm text-darkColor font-bold">(120)</span>
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <CurrencyFormatter
          amount={product.price as number}
          discount={product.discount as number}
          amountStyle="text-xl"
          discountStyle="text-xl font-semibold"
        />
        <div
          className={`w-fit rounded-sm px-2 font-semibold text-sm  ${product.stock !== 0 ? "text-shop-light-green bg-shop-lighter-green/40 " : " text-destructive bg-shop-light-text"}`}
        >
          {product.stock !== 0 ? "In Stock" : "Out Of Stock"}
        </div>
      </div>
      <div className="flex gap-5">
        <AddToCart
          product={product}
          className="rounded-sm font-bold text-md w-[70%]"
        />
        <AddByHeart product={product} singleProduct={true} />
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <div className="flex justify-between">
            <AccordionTrigger className="font-semibold  cursor-pointer">
              {product?.name}: Characteristics
            </AccordionTrigger>
            <AccordionTrigger className="font-semibold  cursor-pointer">
              <ChevronDown size={14} />
            </AccordionTrigger>
          </div>
          <AccordionContent className="mt-5">
            <p className="flex items-center justify-between">
              Brand:{" "}
              {product.brand && (
                <span className="font-semibold tracking-wide">
                  {product.brand?.title}
                </span>
              )}
            </p>
            <p className="flex items-center justify-between">
              Collection:{" "}
              <span className="font-semibold tracking-wide">2025</span>
            </p>
            <p className="flex items-center justify-between">
              Type:{" "}
              <span className="font-semibold tracking-wide">
                {product?.variant}
              </span>
            </p>
            <p className="flex items-center justify-between">
              Stock:{" "}
              <span className="font-semibold tracking-wide">
                {product?.stock ? "Available" : "Out of Stock"}
              </span>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-b-gray-200 py-5 -mt-2">
          <div className="flex cursor-pointer items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
            <RxBorderSplit className="text-lg" />
            <p>Compare color</p>
          </div>
          <div className="flex items-center cursor-pointer gap-2 text-sm text-black hover:text-red-600 hoverEffect">
            <FaRegQuestionCircle className="text-lg" />
            <p>Ask a question</p>
          </div>
          <div className="flex items-center gap-2 text-sm cursor-pointer text-black hover:text-red-600 hoverEffect">
            <TbTruckDelivery className="text-lg" />
            <p>Delivery & Return</p>
          </div>
          <div className="flex items-center gap-2 text-sm cursor-pointer text-black hover:text-red-600 hoverEffect">
            <FiShare2 className="text-lg" />
            <p>Share</p>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <div className="border border-lightColor/25 border-b-0 p-3 flex items-center gap-2.5">
            <Truck size={30} className="text-shop_orange" />
            <div>
              <p className="text-base font-semibold text-black">
                Free Delivery
              </p>
              <p className="text-sm text-gray-500 underline underline-offset-2">
                Enter your Postal code for Delivey Availability.
              </p>
            </div>
          </div>
          <div className="border border-lightColor/25 p-3 flex items-center gap-2.5">
            <CornerDownLeft size={30} className="text-shop_orange" />
            <div>
              <p className="text-base font-semibold text-black">
                Return Delivery
              </p>
              <p className="text-sm text-gray-500 ">
                Free 30days Delivery Returns.{" "}
                <span className="underline underline-offset-2">Details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductDetails;
