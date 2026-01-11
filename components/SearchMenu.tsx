import React from "react";
import { Search as SearchIcon } from "lucide-react";
import { getLatstBlogs } from "@/sanity/queries";

function SearchMenu({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white w-[500px] h-[500px] rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      {children}
    </div>
  );
}

export default SearchMenu;
