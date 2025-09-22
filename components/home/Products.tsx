"use client";
import { productType } from "@/constants/data";
import React, { useEffect, useState } from "react";
import ProductsTabs from "./ProductsTabs";
import { Product } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import ProductItem from "./ProductItem";
import { Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import NoProductsAvailable from "../NoProductsAvailable";
function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0].title);
  const query = `*[_type == "product" && variant== $variant] | order(name desc) {
    ...,
    "categories": categories[]->title
  }`;
  const params = { variant: selectedTab.toLowerCase() };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
      try {
        const response = await client.fetch(query, params);
        setProducts(response);
        console.log(response);
      } catch (err) {
        console.log("fetching error :", err);
      } finally {
        setIsLoading(true);
      }
    };
    fetchData();
  }, [selectedTab]);
  return (
    <div className="">
      <ProductsTabs selectedTab={selectedTab} onSelectedTab={setSelectedTab} />
      <div className="mt-10">
        {!isLoading ? (
          <div className="flex w-full h-80 justify-center items-center gap-5 text-dark_blue font-semibold">
            <Loader2 className="w-5 h-6 animate-spin" />
            <p>Products are loading..</p>
          </div>
        ) : !products?.length ? (
          <NoProductsAvailable selectedTab={selectedTab} />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5">
            {products.map((product) => (
              <AnimatePresence key={product._id}>
                <motion.div
                  layout
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProductItem product={product} />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
