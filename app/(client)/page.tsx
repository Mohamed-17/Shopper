import Container from "@/components/Container";
import Exchange from "@/components/Exchange";
import HomePage from "@/components/home/HomePage";
import LatestBlogs from "@/components/home/LatestBlogs";
import Loader from "@/components/Loader";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const ProductsPage = dynamic(() => import("@/components/home/Products"), {
  loading: () => <Loader />,
});
const CategriesPage = dynamic(
  () => import("@/components/categories/Categries"),
  {
    loading: () => <Loader />,
  }
);
const BrandsPage = dynamic(() => import("@/components/home/Brands"), {
  loading: () => <Loader />,
});


async function page() {
  return (
    <div>
      <Container className="py-16 md:py-5">
        <HomePage />
        <Suspense fallback={<Loader />}>
          <ProductsPage />
          <CategriesPage />
          <BrandsPage />
        </Suspense>
        <Exchange />
        <LatestBlogs context="Latest Blogs" />
      </Container>
    </div>
  );
}

export default page;
