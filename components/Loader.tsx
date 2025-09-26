import { Loader2 } from "lucide-react";
import React from "react";

function Loader() {
  return (
    <div className="flex w-full h-80 justify-center items-center gap-5 text-dark_blue font-semibold">
      <Loader2 className="w-5 h-6 animate-spin" />
      <p>Products are loading..</p>
    </div>
  );
}

export default Loader;
