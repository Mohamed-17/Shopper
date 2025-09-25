import CategoryNavigation from "@/components/categories/CategoryNavigation";
import Container from "@/components/Container";
import { Title } from "@/components/Text";
import { Category } from "@/sanity.types";
import { getCategories } from "@/sanity/queries";
import React from "react";

async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const categories: Category[] = await getCategories();
  const { slug } = await params;
  return (
    <main className="mt-10">
      <Container>
        <Title className="text-darkColor text-2xl font-semibold ">
          Products by category:{" "}
          <span className="text-shop-light-green">{slug}</span>
        </Title>
        <div className="mt-5">
          <CategoryNavigation categories={categories} slug={slug} />
        </div>
      </Container>
    </main>
  );
}

export default CategoryPage;
