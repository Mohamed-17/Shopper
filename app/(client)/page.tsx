import Categries from "@/components/categories/Categries";
import Container from "@/components/Container";
import HomePage from "@/components/home/HomePage";
import Products from "@/components/home/Products";
import { getCategories } from "@/sanity/queries";
import React from "react";

async function page() {
  const categories = await getCategories(6);

  return (
    <div>
      <Container className="py-16 md:py-5">
        <HomePage />
        <Products />
        <Categries categories={categories} />
      </Container>
    </div>
  );
}

export default page;
