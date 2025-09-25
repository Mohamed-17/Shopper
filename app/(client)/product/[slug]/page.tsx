import Container from "@/components/Container";
import ImageView from "@/components/ImageView";
import SignleProductNavigator from "@/components/SignleProductNavigator";
import SingleProductDetails from "@/components/SingleProductDetails";
import { Brand, Product } from "@/sanity.types";
import { getProductBySlug } from "@/sanity/queries";
import React from "react";
export type ProductWithBrand = Omit<Product, "brand"> & {
  brand?: Brand;
};

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data: ProductWithBrand = await getProductBySlug(slug);
  return (
    <Container>
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="flex-1">
          <ImageView images={data.images} product={data} />
        </div>
        <div className="flex-1">
          <SingleProductDetails product={data} />
        </div>
      </div>
      <div>
        <SignleProductNavigator />
      </div>
    </Container>
  );
}

export default page;
