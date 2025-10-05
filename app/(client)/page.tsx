import Categries from "@/components/categories/Categries";
import Container from "@/components/Container";
import Exchange from "@/components/Exchange";
import Brands from "@/components/home/Brands";
import HomePage from "@/components/home/HomePage";
import LatestBlogs from "@/components/home/LatestBlogs";
import Products from "@/components/home/Products";
import { getAllBrands, getCategories } from "@/sanity/queries";
import React from "react";

async function page() {
  const categories = await getCategories(6);
  const brands = await getAllBrands();

  return (
    <div>
      <Container className="py-16 md:py-5">
        <HomePage />
        <Products />
        <Categries categories={categories} />
        <Brands brands={brands} />
        <Exchange />
        <LatestBlogs context="Latest Blogs" />
      </Container>
    </div>
  );
}

export default page;
