"use client";
import { TextAlignStart } from "lucide-react";
import React, { useState } from "react";
import MenuList from "./MenuList";

function Menu() {
  const [open, isOpen] = useState(false);
  return (
    <div>
      <TextAlignStart
        className="text-lightColor"
        onClick={() => isOpen(() => !open)}
      />
      {open && <MenuList open={open} onClose={() => isOpen(false)} />}
    </div>
  );
}

export default Menu;
