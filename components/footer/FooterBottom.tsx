import React from "react";
import Logo from "../header/Logo";

function FooterBottom() {
  return (
    <div className="mt-20 border-t-1 text-base text-lightColor border-t-lightColor/20 gap-0.5 items-center justify-center flex">
      <span>© {new Date().getFullYear()} </span>
      {"   "}
      <span>
        <Logo className="text-sm text-darkColor hover:text-shop-light-green" />
      </span>
      All rights reserved.
    </div>
  );
}

export default FooterBottom;
