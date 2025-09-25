import Container from "@/components/Container";
import ProductItem from "@/components/home/ProductItem";
import NoProductsAvailable from "@/components/NoProductsAvailable";
import { Title } from "@/components/Text";
import { getHotDeals } from "@/sanity/queries";
import React from "react";
import { ProductWithBrand } from "../product/[slug]/page";

async function page() {
  const deals: ProductWithBrand[] = await getHotDeals();

  if (!deals) <NoProductsAvailable selectedTab="HOT-DEALS" />;

  return (
    <main>
      <Container>
        <div className="my-10">
          <Title
            className="text-darkColor underline uppercase font-semibold text-lg underline-offset-4
"
          >
            Hot Deals of the Week
          </Title>
        </div>
        <div className="my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {deals.map((deal) => (
            <div key={deal._id} className="relative">
              <ProductItem product={deal} key={deal._id} />
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}

export default page;
