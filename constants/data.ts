type Data = {
  title: string;
  href: string;
};

export const navItemData: Data[] = [
  { title: "Home", href: "/" },
  { title: "Shop", href: "/shop" },
  { title: "Blog", href: "/blog" },
  { title: "Hot Deal", href: "/deals" },
];

export const quickLinks: Data[] = [
  { title: "About us", href: "/about" },
  { title: "Contact us", href: "/contact" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "FAQs", href: "/faqs" },
  { title: "Help", href: "/help" },
];
export const categoryLinks: Data[] = [
  { title: "Mobiles", href: "/category/mobiles" },
  { title: "Appliances", href: "/category/appliances" },
  { title: "Smartphones", href: "/category/smartphones" },
  { title: "Air Conditioners", href: "/category/air-conditioners" },
  { title: "Washing Machine", href: "/category/kitchen-appliances" },
  { title: "Kitchen Appliances", href: "/category/kitchen-appliances" },
  { title: "gadget accessories", href: "/category/gadget-accessories" },
];

export const productType: {
  title: string;
  value: string;
}[] = [
  { title: "Gadget", value: "gadget" },
  { title: "Appliances", value: "appliances" },
  { title: "Refrigerators", value: "refrigerators" },
  { title: "Others", value: "others" },
];
