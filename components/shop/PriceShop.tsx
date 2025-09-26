import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

type Props = {
  selectedPrice: string | null;
  setSelectedPrice: React.Dispatch<React.SetStateAction<string | null>>;
};
const priceData: {
  title: string;
  value: string;
}[] = [
  { title: "under 100$", value: "0-100" },
  { title: "100$ - 200$", value: "100-200" },
  { title: "200$ - 300$", value: "200-300" },
  { title: "300$ - 500$", value: "300-500" },
  { title: "over $500", value: "500-10000" },
];
function PriceShop({ selectedPrice, setSelectedPrice }: Props) {
  return (
    <div className="mt-5">
      <h1 className="text-md font-semibold  tracking-wide ">Price</h1>
      <div className="mt-1">
        <RadioGroup value={selectedPrice}>
          {priceData.map((price) => (
            <div
              key={price.title}
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setSelectedPrice(price.value)}
            >
              <RadioGroupItem value={price.value} id={price.value} />
              <Label htmlFor={price.value} className="cursor-pointer">
                {price.title}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {selectedPrice && (
          <div
            className="underline text-dark text-sm px-5 mb-2 cursor-pointer"
            onClick={() => setSelectedPrice("")}
          >
            Reset selection
          </div>
        )}
      </div>
    </div>
  );
}

export default PriceShop;
