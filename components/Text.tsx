import { cn } from "@/lib/utils";
import React from "react";

const Text = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-lightColor/80 text-sm md:text-base", className)}>
      {children}
    </p>
  );
};

function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-3xl text-shop-dark-green font-bold capitalize",
        className
      )}
    >
      {children}
    </h2>
  );
}
export { Text, Title };
