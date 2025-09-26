import Container from "@/components/Container";
import Shop from "@/components/shop/Shop";
import { Title } from "@/components/Text";
import { getAllBrands, getCategories } from "@/sanity/queries";
import React from "react";

async function page() {
  const categories = await getCategories();
  const brands = await getAllBrands();
  return (
    <div className=" mt-5">
      <Container>
        <Title className="text-xl uppercase text-black tracking-wide font-semibold">
          Get the products as your needs
        </Title>
        <Shop categories={categories} brands={brands} />
      </Container>
    </div>
  );
}

export default page;
