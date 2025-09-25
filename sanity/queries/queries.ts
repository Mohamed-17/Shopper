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
const PRODUCT_BY_SLUG = defineQuery(`
  *[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    description,
    price,
    discount,
    stock,
    status,
    variant,
    isFeatured,
    images[],
    categories[]->{
      _id,
      title,
      slug
    },
    brand->{
      _id,
      title,
      slug,
      description,
      image
    }
  }
`);
export { BRAND_QUERY, BLOG_QUERY, HOT_DEALS, PRODUCT_BY_SLUG };
