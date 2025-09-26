import { Brand } from "@/sanity.types";
import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

type Props = {
  brands: Brand[];
  selectedBrand: string | null;
  setSelectedBrand: React.Dispatch<React.SetStateAction<string | null>>;
};
function ShopBrand({ selectedBrand, setSelectedBrand, brands }: Props) {
  return (
    <div className="mt-5">
      <h1 className="text-md font-semibold mb-3 tracking-wide ">Brands</h1>
      <div>
        <RadioGroup className="space-y-0.5" value={selectedBrand}>
          {brands.map((brand) => (
            <div
              className="flex items-center gap-1"
              key={brand._id}
              onClick={() => setSelectedBrand(brand.slug?.current as string)}
            >
              <RadioGroupItem
                value={brand.slug?.current as string}
                id={brand._id}
              />

              <Label htmlFor={brand._id} className="font-[500] cursor-pointer">
                {brand.title}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      {selectedBrand && (
        <div
          className="underline text-dark text-sm px-5 py-4 cursor-pointer"
          onClick={() => setSelectedBrand(null)}
        >
          Reset selection
        </div>
      )}
    </div>
  );
}

export default ShopBrand;
