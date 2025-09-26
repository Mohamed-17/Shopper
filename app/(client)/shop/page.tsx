import Container from "@/components/Container";
import Loader from "@/components/Loader";
import Shop from "@/components/shop/Shop";
import { Title } from "@/components/Text";
import { getAllBrands, getCategories } from "@/sanity/queries";
import React, { Suspense } from "react";

async function page() {
  const categories = await getCategories();
  const brands = await getAllBrands();
  return (
    <div className=" mt-5">
      <Container>
        <Title className="text-xl uppercase text-black tracking-wide font-semibold">
          Get the products as your needs
        </Title>
        <Suspense fallback={<Loader />}>
          <Shop categories={categories} brands={brands} />
        </Suspense>
      </Container>
    </div>
  );
}

export default page;
