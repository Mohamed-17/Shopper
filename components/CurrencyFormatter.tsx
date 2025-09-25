import { cn } from "@/lib/utils";
import React from "react";

function CurrencyFormatter({
  amount,
  discount,
  amountStyle,
  discountStyle,
  className,
}: {
  amount: number;
  discount: number;
  discountStyle?: string;
  amountStyle?: string;
  className?: string;
}) {
  function toUSCurrency(price: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  }

  const price = toUSCurrency(amount);
  const priceAfterDiscount = toUSCurrency(amount + (amount * discount) / 100);
  return (
    <div className={cn("flex gap-3", className)}>
      <div
        className={cn("font-bold text-shop-dark-green text-sm md:text-base")}
      >
        <p className={cn("", amountStyle)}> {price}</p>
      </div>
      <div className={cn("line-through text-gray-500 text-sm md:text-base")}>
        <p className={cn("", discountStyle)}>{priceAfterDiscount}</p>
      </div>
    </div>
  );
}

export default CurrencyFormatter;
