import Container from "@/components/Container";
import HomePage from "@/components/home/HomePage";
import Products from "@/components/home/Products";
import React from "react";

function page() {
  return (
    <div>
      <Container className="py-16 md:py-5">
        <HomePage />
        <Products />
      </Container>
    </div>
  );
}

export default page;
