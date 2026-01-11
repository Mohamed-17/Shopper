"use client";
import { useEffect, useState, useCallback } from "react";
import { SearchIcon } from "lucide-react";
import React from "react";
import { client } from "@/sanity/lib/client";
import { Category, Product } from "@/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  console.log(productName);
  const fetchData = async function () {
    setIsLoading(true);
    const query = `
  *[_type == "product" && name match $productName] 
  | order(name asc) {
    ...,
    "products": products[]->title
  }
`;

    try {
      const data = await client.fetch(query, { productName });
      setProducts(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [productName]);
  function handleModalClose(e: React.MouseEvent) {
    setIsOpen(false);
    setProductName("");
  }
  return (
    <>
      {isOpen && (
        <div
          className="bg-black/50 z-1000 fixed inset-0 h-screen w-full"
          onClick={handleModalClose}
        >
          <div
            className="bg-white w-[800px] h-[600px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded z-10000"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-4 gap-2 p-3">
              <div className="col-span-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={(e) => setProductName(e.target.value)}
                  value={productName}
                />
              </div>
              <div className="col-span-1"></div>
            </div>
            {/* results */}

            <div className="p-5">
              <h1>Results:</h1>
              <div className="flex flex-col gap-2 mt-10">
                {products.length > 0 ? (
                  products.map((product: Product) => (
                    <Link
                      href={`/product/${product.slug?.current}`}
                      key={product._id}
                      className="flex items-center gap-5"
                      onClick={handleModalClose}
                    >
                      <div className="border border-gray-300 p-2 rounded">
                        <Image
                          src={
                            product.images?.[0]
                              ? urlFor(product.images[0]).url()
                              : ""
                          }
                          alt={product.name || "product"}
                          width={100}
                          height={100}
                          className="rounded"
                        />
                      </div>
                      <div>{product.name}</div>
                    </Link>
                  ))
                ) : (
                  <p className="flex justify-center text-destructive">
                    No results
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <SearchIcon
          size={20}
          className="text-gray-500"
          onClick={() => setIsOpen(true)}
        />
      </div>
    </>
  );
}

export default Search;
