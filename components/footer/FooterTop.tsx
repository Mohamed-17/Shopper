import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
type location = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};
const locations: location[] = [
  { title: "Visit Us", desc: "New Orlean, USA", icon: <MapPin /> },
  { title: "Call Us", desc: "+12 958 648 597", icon: <Phone /> },
  {
    title: "Working Hours",
    desc: "Mon - Sat: 10:00 AM - 7:00 PM",
    icon: <Clock />,
  },
  { title: "Email Us", desc: "mohamedsneaky1@gmail.cpm", icon: <Mail /> },
];
function FooterTop() {
  return (
    <div className="flex justify-between items-center gap-4 lg:gap-0  flex-wrap p-4">
      {locations.map((location, index) => (
        <div
          key={index}
          className="w-[100%] md:w-[33%] lg:w-[22%] my-4 flex items-center gap-3 group"
        >
          <div className="text-lightColor group-hover:text-black/80">
            {location.icon}
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-black/90 font-semibold font-poppins">
              {location.title}
            </h3>
            <p className="text-lightColor text-sm font-semibold group-hover:text-black/80">
              {location.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FooterTop;
