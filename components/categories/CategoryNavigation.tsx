"use client";
import { productType } from "@/constants/data";
import { Category, Product } from "@/sanity.types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { client } from "@/sanity/lib/client";
import { Loader2 } from "lucide-react";
import NoProductsAvailable from "../NoProductsAvailable";
import { AnimatePresence, motion } from "motion/react";
import ProductItem from "../home/ProductItem";

function CategoryNavigation({
  categories,
  slug,
}: {
  categories: Category[];
  slug: string;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [currentSlug, setCurrentSlug] = useState<string>(slug);
  const router = useRouter();
  function handleClick(slug: string | undefined) {
    if (slug === currentSlug) {
      return;
    }
    setCurrentSlug(slug ? slug : "");
    router.push(slug ? slug : "", { scroll: false });
  }
  useEffect(() => {
    const fetchData = async (currentSlug: string) => {
      setIsLoading(true);
      try {
        const query = `
        *[_type == 'product' && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc){
        ...,"categories": categories[]->title}
      `;
        const response = await client.fetch(query, {
          categorySlug: currentSlug,
        });
        setProducts(response);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData(currentSlug);
  }, [router]);
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="flex flex-col ">
        {categories.map((category) => (
          <Button
            key={category._id}
            onClick={() => handleClick(category?.slug?.current)}
            className={` w-40  cursor-pointer hoverEffect text-md   whitespace-nowrap  transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring   hoverEffect h-9 bg-transparent border-0 p-0 rounded-none text-darkColor shadow-none hover:bg-red-500 hover:text-white font-semibold hoverEffect border-b last:border-b-0 capitalize ${slug === category.slug?.current && "bg-red-500 text-white"}`}
          >
            <p className="text-left w-full px-2"> {category.title}</p>
          </Button>
        ))}
      </div>
      <div className="flex-1">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <div className="text-blue flex gap-1 justify-center items-center w-full h-80">
              <Loader2 className="animate-spin text-blue-600" />
              <span className="text-blue-600">Products is loading</span>
            </div>
          </div>
        ) : products.length !== 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5">
            {products.map((product) => (
              <AnimatePresence key={product._id}>
                <div>
                  <ProductItem product={product} />
                </div>
              </AnimatePresence>
            ))}
          </div>
        ) : (
          <NoProductsAvailable selectedTab={currentSlug} />
        )}
      </div>
    </div>
  );
}

export default CategoryNavigation;
