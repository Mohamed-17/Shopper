"use client";
import { Brand, Category, Product } from "@/sanity.types";
import React, { useEffect, useState } from "react";
import ShopCategories from "./ShopCategories";
import { useSearchParams } from "next/navigation";
import ShopBrand from "./ShopBrand";
import PriceShop from "./PriceShop";
import { client } from "@/sanity/lib/client";
import NoProductsAvailable from "../NoProductsAvailable";
import Loader from "../Loader";
import { AnimatePresence, motion } from "motion/react";
import ProductItem from "../home/ProductItem";
import { ProductWithBrand } from "@/app/(client)/product/[slug]/page";

function Shop({
  categories,
  brands,
}: {
  categories: Category[];
  brands: Brand[];
}) {
  const searchPath = useSearchParams();
  const brandPath = searchPath.get("brand");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductWithBrand[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState(brandPath || null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>("");
  
  const fetchData = async function () {
    setIsLoading(true);

    const query = `
      *[_type == 'product' 
        && (!defined($selectedCategory) || references(*[_type == "category" && slug.current == $selectedCategory]._id))
        && (!defined($selectedBrand) || references(*[_type == "brand" && slug.current == $selectedBrand]._id))
        && price >= $minPrice && price <= $maxPrice
      ] 
      | order(name asc) {
        ...,"categories": categories[]->title
      }
    `;
    try {
      let minPrice = 0;
      let maxPrice = 10000;
      if (selectedPrice) {
        const [min, max] = selectedPrice?.split("-").map(Number) ?? [0, 10000];
        minPrice = min;
        maxPrice = max;
      }
      const data = await client.fetch(query, {
        selectedBrand,
        selectedCategory,

        minPrice,
        maxPrice,
      });
      setProducts(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [selectedBrand, selectedPrice, selectedCategory]);
  return (
    <div className="mt-5 border-t-1 border-t-shop-dark-green/50 flex flex-col md:flex-row">
      <div className=" p-5 border-r-1 text-left border-r-shop-dark-green/50 md:h-[calc(100vh-180px)] md:w-60 w-full  md:overflow-y-auto scrollBar md:sticky top-0">
        {/* Categories */}
        <ShopCategories
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {/* Brands */}
        <ShopBrand
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          brands={brands}
        />
        {/* Price */}
        <PriceShop
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
        />
      </div>
      <div className="flex-1">
        {!products.length ? (
          <NoProductsAvailable
            selectedTab={
              (selectedCategory as string) ?? (selectedBrand as string)
            }
          />
        ) : isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-1.5 md:gap-3.5 p-4">
            {products.map((product) => (
              <AnimatePresence key={product._id}>
                <motion.div
                  layout
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProductItem product={product} buttonStyle="w-full" />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
