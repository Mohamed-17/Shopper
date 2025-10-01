"use client";
import AddByHeart from "@/components/AddByHeart";
import AddToCart from "@/components/AddToCart";
import Container from "@/components/Container";
import CurrencyFormatter from "@/components/CurrencyFormatter";
import EmptyCard from "@/components/EmptyCard";
import SignInCart from "@/components/SignInCart";
import { Title } from "@/components/Text";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { Address, Product } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import useStore from "@/store";
import { useAuth } from "@clerk/nextjs";
import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { ShoppingBag, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function CartPage() {
  const { isSignedIn } = useAuth();
  const {
    getGroupedItems,
    getItemCount,
    getSubTotalPrice,
    deleteCartProduct,
    getTotalPrice,
    resetCart,
  } = useStore();
  const isCardProductsAvailable = getGroupedItems().length > 0;
  const handleDelteItem = (id: string) => {
    deleteCartProduct(id);
    toast.success("item deleted sucsessfuly");
  };
  const [loading, setLoading] = useState(false);
  const [addresses, setAddresses] = useState<Address[] | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  console.log(selectedAddress);

  const handleResetCart = () => {
    const approved = window.confirm(
      "Are you sure you want to delete all products in the cart"
    );
    if (approved) resetCart();
  };

  const fetchAddresses = async () => {
    setLoading(true);
    try {
      const query = `*[_type=="address"] | order(publishedAt desc)`;
      const data = await client.fetch(query);
      setAddresses(data);
      const defaultAddress = data.find((addr: Address) => addr.default);
      if (defaultAddress) {
        setSelectedAddress(defaultAddress);
      } else if (data.length > 0) {
        setSelectedAddress(data[0]); // Optional: select first address if no default
      }
    } catch (error) {
      console.log("Addresses fetching error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  if (!isSignedIn) return <SignInCart />;
  if (!isCardProductsAvailable) return <EmptyCard />;
  return (
    <div className="my-5">
      <Container>
        <Title className="flex items-center text-2xl gap-2 font-semibold text-darkColor">
          <span>
            <ShoppingBag />
          </span>{" "}
          <span className="mb-1">Shopping Cart</span>
        </Title>
        <div className="">
          <div className="grid grid-cols-3 mt-2 ">
            <div className="flex flex-1 flex-col col-span-3 lg:col-span-2 gap-8 items-center p-5">
              {getGroupedItems().map(({ product }: { product: Product }) => {
                const itemCount = getItemCount(product._id);
                return (
                  <div
                    key={product._id}
                    className="flex gap-1.5 w-full border-1 border-shop-light-text/40 hover:shadow-2xl p-3 rounded-md"
                  >
                    <Link href={`/product/${product.slug?.current}`}>
                      {!product.images?.length ? (
                        <p>Image not available</p>
                      ) : (
                        <Image
                          src={urlFor(
                            product.images[0].asset?._ref || ""
                          ).url()}
                          alt={product.name || "Product Image"}
                          width={500}
                          height={500}
                          className="object-cover w-40 h-40"
                        />
                      )}
                    </Link>
                    <div className="flex flex-col justify-between w-full">
                      <div className="w-full space-y-1">
                        <div className="flex justify-between items-center w-full">
                          <h4 className="font-semibold text-lg line-clamp-1 text-darkColor">
                            {product.name}
                          </h4>
                          <CurrencyFormatter
                            amountStyle="text-darkColor text-lg font-bold"
                            amount={(product.price as number) * itemCount}
                          />
                        </div>
                        <div className="flex items-center gap-1">
                          <p className="text-sm  tracking-wide">Variant:</p>
                          <p className="capitalize font-bold text-sm">
                            {product?.variant}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <p className="text-sm tracking-wide">Status:</p>
                          <p className="capitalize font-bold  tracking-wide  text-sm">
                            {product?.status}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between w-full">
                        <div className="flex items-center gap-2">
                          <AddByHeart
                            product={product}
                            singleProduct={true}
                            className={`p-3 cursor-pointer bg-transparent border-none  hover:bg-shop-btn-dark-green hover:text-white hoverEffect `}
                          />
                          <Trash
                            size={18}
                            className="text-shop-light-text hover:text-red-500"
                            onClick={() => handleDelteItem(product._id)}
                          />
                        </div>
                        <div className="">
                          <AddToCart product={product} hideAmount={true} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="px-5 mr-auto">
                <Button
                  variant={"destructive"}
                  className="text-start w-28 cursor-pointer"
                  onClick={handleResetCart}
                >
                  Reset Cart
                </Button>
              </div>
            </div>
            <div className="bg-shop-light-bg w-full col-span-3 lg:col-span-1 fixed bottom-0 left-0 md:relative">
              <div className="p-5 space-y-10">
                <div className="space-y-4">
                  <h4 className="font-semibold text-2xl">Order Summary</h4>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">SubTotal</span>
                    <span>
                      <CurrencyFormatter
                        amount={getSubTotalPrice()}
                        amountStyle="text-darkColor"
                      />
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Discount</span>
                    <span>
                      <CurrencyFormatter
                        amount={getSubTotalPrice() - getTotalPrice()}
                        amountStyle="text-darkColor"
                      />
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-darkColor font-bold text-xl">
                    Total
                  </span>
                  <span>
                    <CurrencyFormatter
                      amount={getTotalPrice()}
                      amountStyle="text-darkColor text-xl"
                    />
                  </span>
                </div>
                <div className="mt-5">
                  <Button className="bg-shop-btn-dark-green w-full">
                    Proceed to Checkout
                  </Button>
                </div>
                {addresses && (
                  <div className="bg-white rounded-md mt-5">
                    <Card>
                      <CardHeader>
                        <CardTitle>Delivery Address</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <RadioGroup
                          defaultValue={addresses
                            ?.find((addr) => addr.default)
                            ?._id.toString()}
                        >
                          {addresses?.map((address) => (
                            <div
                              key={address?._id}
                              onClick={() => setSelectedAddress(address)}
                              className={`flex items-center space-x-2 mb-4 cursor-pointer ${selectedAddress?._id === address?._id && "text-shop_dark_green"}`}
                            >
                              <RadioGroupItem value={address?._id.toString()} />
                              <Label
                                htmlFor={`address-${address?._id}`}
                                className="grid gap-1.5 flex-1"
                              >
                                <span className="font-semibold">
                                  {address?.name}
                                </span>
                                <span className="text-sm text-black/60">
                                  {address.address}, {address.city},{" "}
                                  {address.state} {address.zip}
                                </span>
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                        <Button variant="outline" className="w-full mt-4">
                          Add New Address
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CartPage;
