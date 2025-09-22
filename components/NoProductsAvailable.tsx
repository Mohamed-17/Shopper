import React from "react";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
function NoProductsAvailable({
  selectedTab,
  className,
}: {
  selectedTab: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-10 min-h-80 space-y-4 w-full text-center rounded-lg mt-10",
        className
      )}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <h2 className="font-bold text-2xl text-gray-800">
          No Product Available
        </h2>
      </motion.div>
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.5,
        }}
        className="text-gray-600  text-[18px]"
      >
        We&apos;re sorry, but there are no products matching on{" "}
        <span className="text-base font-semibold text-darkColor">
          {selectedTab}
        </span>{" "}
        criteria at the moment.
      </motion.p>
      <motion.div
        className="flex items-center space-x-2 text-shop-dark-green "
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Loader2 className="w-5 h-5 animate-spin" />
        <p>We&apos;re restocking shortly</p>
      </motion.div>
      <motion.p
        className="text-sm text-gray-500"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Please check back later or explore our other product categories.
      </motion.p>
    </div>
  );
}

export default NoProductsAvailable;
