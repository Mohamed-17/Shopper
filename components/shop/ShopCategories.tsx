import { Category } from "@/sanity.types";
import React, { Dispatch } from "react";
import { RadioGroupItem, RadioGroup } from "../ui/radio-group";
import { Label } from "../ui/label";

function ShopCategories({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: Category[];
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <div>
      <h1 className="text-md font-semibold mb-3 tracking-wide ">
        Product Categories
      </h1>
      <div>
        <RadioGroup className="space-y-0.5" value={selectedCategory}>
          {categories.map((category) => (
            <div
              className="flex items-center gap-1"
              key={category._id}
              onClick={() =>
                setSelectedCategory(category.slug?.current as string)
              }
            >
              <RadioGroupItem
                value={category.slug?.current as string}
                id={category._id}
              />

              <Label
                htmlFor={category._id}
                className="font-[500] cursor-pointer"
              >
                {category.title}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      {selectedCategory && (
        <div
          className="underline text-dark text-sm px-5 py-4 cursor-pointer"
          onClick={() => setSelectedCategory(null)}
        >
          Reset selection
        </div>
      )}
    </div>
  );
}

export default ShopCategories;
