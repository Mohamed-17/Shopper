import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Youtube, Github, Linkedin, Facebook } from "lucide-react";

import Link from "next/link";
import { cn } from "@/lib/utils";
type Link = {
  name: string;
  url: string;
  icon: React.JSX.Element;
};
const links: Link[] = [
  {
    name: "youtube",
    url: "https://www.youtube.com/@Kira-top11",
    icon: <Youtube />,
  },
  { name: "github", url: "https://github.com/Mohamed-17", icon: <Github /> },
  {
    name: "linkedIn",
    url: "https://www.linkedin.com/in/mohamed-ashraf-68b36828a/",
    icon: <Linkedin />,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/mohamedahmed.mohamed.16144606/",
    icon: <Facebook />,
  },
];
function SocialLinks({
  iconSyle,
  contentStyle,
}: {
  iconSyle?: string;
  contentStyle?: string;
}) {
  return (
    <div className="flex items-center justify-between text-white mt-5">
      {links?.map((link) => (
        <div key={link.name}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center justify-center border border-lightColor rounded-full w-10 h-10 p-2 hover:bg-white/10 transition-colors hover:border-shop-light-green",
                  iconSyle
                )}
              >
                {link.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className={cn("bg-white text-black", contentStyle)}>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      ))}
    </div>
  );
}

export default SocialLinks;

{
  /* <Tooltip>
  <TooltipTrigger>Hover</TooltipTrigger>
  <TooltipContent>
    <p>Add to library</p>
  </TooltipContent>
</Tooltip> */
}
