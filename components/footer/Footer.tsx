import React from "react";
import Container from "../Container";
import FooterTop from "./FooterTop";
import Logo from "../header/Logo";
import { Text } from "../Text";
import SocialLinks from "../SocialLinks";
import { categoryLinks, quickLinks } from "@/constants/data";
import Link from "next/link";
import { Button } from "../ui/button";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <div className="py-6">
      <Container className="px-5 mt-4">
        <FooterTop />
        <div className="mt-5 flex gap-15 justify-between flex-wrap">
          <div className="flex flex-col gap-3">
            <Logo />
            <Text>
              Discover curated furniture collections at <br /> Shopcart,
              blending style and comfort to <br /> elevate your living spaces.
            </Text>
            <SocialLinks
              iconSyle="text-black"
              contentStyle="bg-black text-white"
            />
          </div>
          <div className="flex flex-col gap-7">
            <h2 className="font-bold text-[18px] font-poppins text-darkColor">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-5">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:text-shop-light-green hoverEffect"
                >
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-7">
            <ul className="flex flex-col gap-5">
              <h2 className="font-bold text-[18px] font-poppins text-darkColor">
                Categories
              </h2>
              {categoryLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:text-shop-light-green hoverEffect"
                >
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5 justify-center md:justify-normal">
            <h2 className="font-bold text-[18px] font-poppins text-darkColor">
              Newsletter
            </h2>
            <Text>
              Subscribe to our newsletter to receive <br /> updates and
              exclusive offers.
            </Text>
            <form action="" className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Enter your email"
                className="h-10"
              />
              <Button className="h-10 hover:cursor-pointer">Subscribe</Button>
            </form>
          </div>
        </div>
        <FooterBottom />
      </Container>
    </div>
  );
}

export default Footer;
