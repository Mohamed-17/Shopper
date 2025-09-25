import { sanityFetch } from "../lib/live";
import { BLOG_QUERY, BRAND_QUERY, HOT_DEALS, PRODUCT_BY_SLUG } from "./queries";
import type { Blog, Blogcategory } from "@/sanity.types";

const getCategories = async (quantity?: number) => {
  try {
    const query = quantity
      ? `*[_type == 'category'] | order(name asc) [0...$quantity] {
            ...,
            "productCount": count(*[_type == "product" && references(^._id)])
          }`
      : `*[_type == 'category'] | order(name asc) {
            ...,
            "productCount": count(*[_type == "product" && references(^._id)])
          }`;
    const { data } = await sanityFetch({
      query,
      params: quantity ? { quantity } : {},
    });
    return data;
  } catch (error) {
    console.log("Error fetching categories", error);
    return [];
  }
};

const getAllBrands = async () => {
  const { data } = await sanityFetch({
    query: BRAND_QUERY,
  });
  return data ?? [];
};

export type BlogWithCategories = Omit<Blog, "blogcategories"> & {
  blogcategories?: Blogcategory[];
};

const getLatstBlogs = async (
  quantity?: number
): Promise<BlogWithCategories[]> => {
  const { data } = await sanityFetch({
    query: BLOG_QUERY,
    params: quantity ? { quantity } : {},
  });

  return (data as BlogWithCategories[]) ?? [];
};

const getHotDeals = async () => {
  const { data } = await sanityFetch({
    query: HOT_DEALS,
  });
  return data ?? [];
};
const getProductBySlug = async (slug: string) => {
  const { data } = await sanityFetch({
    query: PRODUCT_BY_SLUG,
    params: slug ? { slug } : {},
  });
  return data ?? null;
};
export {
  getCategories,
  getAllBrands,
  getLatstBlogs,
  getHotDeals,
  getProductBySlug,
};
