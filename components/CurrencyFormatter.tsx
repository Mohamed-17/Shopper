import React from "react";

function CurrencyFormatter({
  amount,
  discount,
}: {
  amount: number;
  discount: number;
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
    <div className="flex gap-3">
      <div className="text-base font-bold text-shop-dark-green">{price}</div>
      <div className="line-through text-gray-500">{priceAfterDiscount}</div>
    </div>
  );
}

export default CurrencyFormatter;
