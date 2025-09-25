"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { singleProductNavigation } from "@/constants/data";
import { Star } from "lucide-react";

function SignleProductNavigator() {
  const [activeNav, setActiveNav] = useState("description");
  return (
    <div>
      <div className="flex gap-5 items-center mt-7 flex-wrap">
        {singleProductNavigation.map((item) => (
          <Button
            key={item.value}
            onClick={() => setActiveNav(item?.value)}
            className={`cursor-pointer md:px-17 md:py-5 text-md text-shop-btn-dark-green border-2 hover:bg-transparent  bg-transparent ${item.value === activeNav && "border-shop-dark-green"}`}
          >
            {item.title}
          </Button>
        ))}
      </div>

      <div className="md:px-10">
        {activeNav === "description" && (
          <div className="mt-5 w-[80%] space-y-4">
            <p className="text-shop-light-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              soluta labore fuga sed porro, eligendi laboriosam voluptatum
              architecto consequatur animi natus numquam quas provident
              exercitationem officia asperiores veniam laudantium quisquam?
            </p>
            <p className="text-shop-light-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              soluta labore fuga sed porro, eligendi laboriosam voluptatum
              architecto consequatur animi natus numquam quas provident
              exercitationem officia asperiores veniam laudantium quisquam?
            </p>
            <p className="text-shop-light-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              soluta labore fuga sed porro, eligendi laboriosam voluptatum
              architecto consequatur animi natus numquam quas provident
              exercitationem officia asperiores veniam laudantium quisquam?
            </p>
          </div>
        )}
        {activeNav === "additional-information" && (
          <div className="space-y-5 mt-10 w-full md:w-[50%] px-10">
            <div className="flex justify-between">
              <p>Weight</p>
              <p className="text-shop-light-text">190kg</p>
            </div>
            <div className="flex justify-between">
              <p>Dimensions</p>
              <p className="text-shop-light-text">3 × 72 × 109 cm</p>
            </div>
          </div>
        )}
        {activeNav === "reviews" && (
          <>
            <div className="mt-4  w-[80%]">
              <div className="flex gap-2 items-center">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill="#3b9c3c"
                      className="text-shop-light-green"
                    />
                  ))}
                </div>
                <p className="font-semibold">Duc Pham</p>
                <p className="text-shop-light-text/90">- september 26, 2025</p>
              </div>
              <div>
                <p className="text-shop-light-text">
                  I am 6 feet tall and 220 lbs. This shirt fit me perfectly in
                  the chest and shoulders. My only complaint is that it is so
                  long! I like to wear polo shirts untucked. This shirt goes
                  completely past my rear end. If I wore it with ordinary
                  shorts, you probably wouldnt be able to see the shorts at all
                  – completely hidden by the shirt. It needs to be 4 to 5 inches
                  shorter in terms of length to suit me. I have many RL polo
                  shirts, and this one is by far the longest. I dont understand
                  why.
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-2 w-[80%]">
              <div className="flex gap-2 items-center">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill="#3b9c3c"
                      className="text-shop-light-green"
                    />
                  ))}
                </div>
                <p className="font-semibold">Kenneth R. Myers </p>
                <p className="text-shop-light-text/90">- september 26, 2025</p>
              </div>
              <div>
                <p className="text-shop-light-text">
                  I am 6 feet tall and 220 lbs. This shirt fit me perfectly in
                  the chest and shoulders. My only complaint is that it is so
                  long! I like to wear polo shirts untucked. This shirt goes
                  completely past my rear end. If I wore it with ordinary
                  shorts, you probably wouldnt be able to see the shorts at all
                  – completely hidden by the shirt. It needs to be 4 to 5 inches
                  shorter in terms of length to suit me. I have many RL polo
                  shirts, and this one is by far the longest. I dont understand
                  why.
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-2 w-[80%]">
              <div className="flex gap-2 items-center">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill="#3b9c3c"
                      className="text-shop-light-green"
                    />
                  ))}
                </div>
                <p className="font-semibold">Mike Addington </p>
                <p className="text-shop-light-text/90">- september 26, 2025</p>
              </div>
              <div>
                <p className="text-shop-light-text">
                  I am 6 feet tall and 220 lbs. This shirt fit me perfectly in
                  the chest and shoulders. My only complaint is that it is so
                  long! I like to wear polo shirts untucked. This shirt goes
                  completely past my rear end. If I wore it with ordinary
                  shorts, you probably wouldnt be able to see the shorts at all
                  – completely hidden by the shirt. It needs to be 4 to 5 inches
                  shorter in terms of length to suit me. I have many RL polo
                  shirts, and this one is by far the longest. I dont understand
                  why.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SignleProductNavigator;
