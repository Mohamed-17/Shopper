import { ArrowUpDown, Headset, ShieldCheck, Truck } from "lucide-react";
import React from "react";
import { Text, Title } from "./Text";

const exchangeType: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Free Delivery",
    desc: "Free shipping over $100",
    icon: <Truck size={45} />,
  },
  {
    title: "Free Return",
    desc: "Free shipping over $100",
    icon: <ArrowUpDown size={45} />,
  },
  {
    title: "Customer Support",
    desc: "Friendly 27/7 customer support",
    icon: <Headset size={45} />,
  },
  {
    title: "Money Back guarantee",
    desc: "Quality checked by our team",
    icon: <ShieldCheck size={45} />,
  },
];
function Exchange() {
  return (
    <div className="mt-20 mb-20 grid grid-cols-2  lg:grid-cols-4 gap-5 lg:gap-0">
      {exchangeType?.map((item) => (
        <div key={item.title} className="flex group items-center gap-2.5">
          <div className="text-gray-700 hoverEffect scale-100 group-hover:text-shop-light-green group-hover:scale-90">
            {item.icon}
          </div>
          <div className="flex flex-col">
            <Title className="text-md text-darkColor font-semibold">
              {item.title}
            </Title>
            <Text className="text-[10px] text-shop-light-text font-semibold">
              {item.desc}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Exchange;
