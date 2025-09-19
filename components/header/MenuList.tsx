import React, { useEffect, useRef } from "react";
import Logo from "./Logo";
import { navItemData } from "@/constants/data";
import Link from "next/link";
import { X } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import { useHandleRef } from "@/hooks/useHandleRef";
type props = {
  open: boolean;
  onClose: () => void;
};
function MenuList({ open, onClose }: props) {
  const ref = useHandleRef(onClose);
  return (
    <div
      className={`fixed inset-y-0  bg-darkColor/70 left-0 w-full h-screen z-20 hoverEffect ${
        open ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <div
        ref={ref}
        className={` bg-darkColor w-[70%]  h-screen z-50 p-10 flex flex-col gap-7  `}
      >
        <div className="flex justify-between items-center">
          <Logo className="text-white" />
          <div className="text-white cursor-pointer" onClick={onClose}>
            <X />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {navItemData?.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="text-white/70 hover:text-shop-light-green font-semibold text-md"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <SocialLinks />
      </div>
    </div>
  );
}

export default MenuList;
