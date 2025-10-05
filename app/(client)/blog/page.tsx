import Container from "@/components/Container";
import LatestBlogs from "@/components/home/LatestBlogs";
import { Title } from "@/components/Text";
import React from "react";

function page() {
  return (
    <div>
      <Container>
        <LatestBlogs context={"Our Blogs"} />
      </Container>
    </div>
  );
}

export default page;
