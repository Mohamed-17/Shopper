import React from "react";
import Search from "./Search";
import Cart from "./Cart";
import LikedItems from "./LikedItems";
import SignIn from "./SignIn";

function ItemsDetailsNav() {
  return (
    <div className="flex-1 flex justify-end gap-5 items-center">
      <Search />
      <Cart />
      <LikedItems />
      <SignIn />
    </div>
  );
}

export default ItemsDetailsNav;
