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
        <Suspense fallback={<Loader />}>
          <HomePage />
          <ProductsPage />
          <CategriesPage />
          <BrandsPage />
          <Exchange />
          <LatestBlogs context="Latest Blogs" />
        </Suspense>
      </Container>
    </div>
  );
}

export default page;
