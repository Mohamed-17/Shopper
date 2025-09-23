import { defineQuery } from "next-sanity";

const BRAND_QUERY = defineQuery(`*[_type == "brand"]`);

const BLOG_QUERY = defineQuery(
  `*[_type == "blog"] | order(coalesce(publishedAt, _createdAt) desc){
  ...,
  blogcategories[]->{
    _id,
    title,
    slug
  },
  }`
);
const HOT_DEALS = defineQuery(`*[_type == "product" && status=="hot"]{
  ...,
}`);
export { BRAND_QUERY, BLOG_QUERY, HOT_DEALS };
