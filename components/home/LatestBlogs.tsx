import { getLatstBlogs, BlogWithCategories } from "@/sanity/queries";
import React from "react";
import { Title } from "../Text";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import moment from "moment";
import { Calendar } from "lucide-react";
async function LatestBlogs() {
  const latestBlogs: BlogWithCategories[] = await getLatstBlogs(4);

  return (
    <div className="mt-20 mb-5 md:mb-20">
      <Title className="text-darkColor font-semibold">Latest Blog</Title>
      <div className="pt-10">
        {latestBlogs ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-4">
            {latestBlogs.map((blog) => (
              <Link
                href={`/blog/${blog?.slug?.current}`}
                key={blog._id}
                className="text-shop-lighter-bg w-full overflow-hidden border-1 rounded-md hover:border-darkColor hoverEffect"
              >
                <div>
                  {blog?.mainImage && (
                    <Image
                      src={urlFor(blog.mainImage).url()}
                      alt={blog.title ?? "blog-image"}
                      width={300}
                      height={300}
                      loading="lazy"
                      className="w-full"
                    />
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    {blog.blogcategories && blog.blogcategories.length > 0 && (
                      <div className="text-shop-dark-green font-semibold text-sm relative w-fit py-1.5 group ">
                        {blog.blogcategories[0]?.title}

                        <span className="h-[2px] w-full bg-shop-light-text/50 absolute bottom-0 left-0 hoverEffect group-hover:bg-shop-dark-green hoverEffect"></span>
                      </div>
                    )}
                    <div className="text-shop-light-text font-semibold text-xs relative w-fit py-1.5 group hoverEffect hover:text-shop-light-green ">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {moment(blog._createdAt).format("LL")}
                      </div>

                      <span className="h-[2px] w-full bg-shop-light-text/50 absolute bottom-0 left-0 hoverEffect group-hover:bg-shop-dark-green hoverEffect"></span>
                    </div>
                  </div>
                  <Title className="line-clamp-2 text-md text-darkColor mt-4 overflow-hidden">
                    {blog.title}
                  </Title>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="pt-10 text-shop-light-text">
            There is no latest blogs right now!
          </p>
        )}
      </div>
    </div>
  );
}

export default LatestBlogs;
