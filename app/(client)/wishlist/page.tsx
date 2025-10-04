"use client";
import Container from "@/components/Container";
import SignInCart from "@/components/SignInCart";
import useStore from "@/store";
import { useAuth } from "@clerk/nextjs";
import React, { useState } from "react";
import WishListTable from "@/components/WishListTable";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import EmptyFav from "@/components/EmptyFav";

function WishListPage() {
  const { isSignedIn } = useAuth();
  const { favoriteProduct, resetFavorite } = useStore();
  const handleReset = () => {
    const message = window.confirm(
      "Are you sure you want to remove every favorite products ?"
    );
    if (message) {
      toast.success("All Favorite Products Removed");
      resetFavorite();
    }
  };
  if (!favoriteProduct.length) return <EmptyFav />;
  return (
    <>
      <Container>
        {isSignedIn ? (
          <div className="py-8 px-2">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-120 text-left">Image</th>
                  <th className="w-50 text-left hidden md:table-cell">
                    Category
                  </th>
                  <th className="hidden md:table-cell  text-left">Type</th>
                  <th className="hidden md:table-cell text-left ">Status</th>
                  <th className=" text-left">Price</th>
                  <th className="text-left ">Action</th>
                </tr>
              </thead>
              <tbody>
                {favoriteProduct.map((product, index) => {
                  return product._id ? (
                    <WishListTable
                      key={`${product._id || index}`}
                      product={product}
                    />
                  ) : null;
                })}
              </tbody>
            </table>
            <Button
              onClick={() => handleReset()}
              className="bg-white text-darkColor border-1 border-shop-light-green md:py-6 md:px-5 text-lg hover:text-shop-dark-green hoverEffect hover:bg-white hover:border-shop-btn-dark-green cursor-pointer"
            >
              Reset Favorites
            </Button>
          </div>
        ) : (
          <SignInCart message="Log in to view your wishlist items. Don’t miss out on your cart products to make the payment!" />
        )}
      </Container>
    </>
  );
}

export default WishListPage;
