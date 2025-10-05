"use client";
import { Title } from "@/components/Text";
import { Button } from "@/components/ui/button";
import useStore from "@/store";
import { CircleCheck, Home, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

function SuccessPage() {
  const { resetCart } = useStore();
  const order_number = useSearchParams().get("orderNumber");
  console.log(order_number);

  useEffect(() => {
    resetCart();
  }, []);
  return (
    <div className="w-full flex justify-center items-center  md:h-[60vh] ">
      <div className="bg-shop-light-bg gap-3 shadow-lg hover:shadow-2xl w-200 md:p-10 md:m-5 h-150 flex flex-col  items-center">
        <CircleCheck fill="#3b9c3c" className="text-white" size={100} />
        <Title className="text-black tracking-wide">Order Confirmed!</Title>
        <p className="text-md text-shop-light-text md:line-clamp-3 md:w-120 px-2 font-semibold">
          Thank you for your purchase. We&apos;re processing your order and will
          ship it soon. A confirmation email with your order details will be
          sent to your inbox shortly.
        </p>
        <div className="flex items-center gap-1 px-2">
          <span className="text-md text-shop-light-text font-semibold">
            Order Number:
          </span>
          <span className="md:text-lg font-semibold">{order_number}</span>
        </div>

        <div className="text-center mt-3 flex flex-col gap-2">
          <div className="font-semibold text-lg">What&apos;s Next?</div>
          <div className="text-md   line-clamp-3 w-90">
            Check your email for order confirmation We&apos;ll notify you when
            your order ships Track your order status anytime
          </div>
        </div>
        <div className="mt-5 text-center">
          <div className="font-semibold text-lg">Recent Orders</div>
          <div className="flex items-center gap-5 mt-5">
            <Link href={"/"}>
              <Button className="px-10 py-5 cursor-pointer">
                <span>
                  <Home />
                </span>
                <span>Home</span>
              </Button>
            </Link>
            <Link href={"/shop"}>
              <Button className="px-10 py-5 cursor-pointer">
                <span>
                  <ShoppingBag />
                </span>
                <span>Shop</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
