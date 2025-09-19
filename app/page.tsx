import Container from "@/components/Container";
import HomePage from "@/components/home/HomePage";
import React from "react";

function page() {
  return (
    <div>
      <Container className="py-16 md:py-5">
        <HomePage />
      </Container>
    </div>
  );
}

export default page;
