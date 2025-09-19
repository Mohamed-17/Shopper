import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import NavItems from "./NavItems";
import ItemsDetailsNav from "./ItemsDetailsNav";
import MenuList from "./Menu";

function Header() {
  return (
    <div>
      <Container>
        <header className="flex items-center justify-between py-5 w-full">
          {/* LOGO */}
          <div className="flex-1 flex items-center gap-4.5">
            <div className="md:hidden">
              <MenuList />
            </div>
            <Logo />
          </div>
          {/* NavItems */}
          <NavItems />
          {/* Cart & Auth Logic */}
          <ItemsDetailsNav />
        </header>
      </Container>
    </div>
  );
}

export default Header;
