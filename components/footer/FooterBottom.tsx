import React from "react";
import Logo from "../header/Logo";

function FooterBottom() {
  return (
    <div className="mt-20 border-t-1 text-base text-lightColor border-t-lightColor/20 gap-0.5">
      <div className="flex items-center justify-center gap-2 mt-5">
        <span className="flex items-center gap-0.5">
          {" "}
          <span>@</span>
          {new Date().getFullYear()}{" "}
        </span>
        {"   "}
        <span className="mt-0.5">
          <Logo className="text-sm text-darkColor hover:text-shop-light-green" />
        </span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
}

export default FooterBottom;
