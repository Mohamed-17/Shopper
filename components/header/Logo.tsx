import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

function Logo({ className }: { className?: string }) {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-2xl hoverEffect tracking-wider font-black uppercase text-shop-dark-green group hover:text-shop-light-green",
          className
        )}
      >
        Shoppe
        <span className="text-shop-light-green hoverEffect group-hover:text-shop-dark-green">
          r
        </span>
      </h2>
    </Link>
  );
}

export default Logo;
