import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import NavItems from "./NavItems";
import ItemsDetailsNav from "./ItemsDetailsNav";
import MenuList from "./Menu";
import Search from "./Search";

function Header() {
  return (
    <>
      <header className="sticky top-0 bg-white/70 z-100 backdrop-blur-md">
        <Container>
          <div className="flex items-center justify-between py-5 w-full">
            {/* LOGO */}
            <div className="flex-1 flex items-center gap-4.5">
              <div className="md:hidden">
                <MenuList />
              </div>
              <Logo />
            </div>
            {/* NavItems */}
            <div className="flex-1">
              <NavItems />
            </div>
            {/* Cart & Auth Logic */}
            <div className="flex gap-5 items-center">
              <Search />

              <ItemsDetailsNav />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
