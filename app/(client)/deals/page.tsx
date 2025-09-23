import Container from "@/components/Container";
import ProductItem from "@/components/home/ProductItem";
import NoProductsAvailable from "@/components/NoProductsAvailable";
import { Title } from "@/components/Text";
import { Product } from "@/sanity.types";
import { getHotDeals } from "@/sanity/queries";
import React from "react";

async function page() {
  const deals: Product[] = await getHotDeals();

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
            <ProductItem product={deal} key={deal._id} />
          ))}
        </div>
      </Container>
    </main>
  );
}

export default page;
