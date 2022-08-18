import React from "react";
import { FloatingIcons } from "./FloatingIcons";

export const Header: React.FC = () => {
  return (
    <FloatingIcons>
      <div className="w-[100%] md:w-4/6 lg:w-[50%] md:mx-auto relative px-[3px]">
        <h1 className="animate-text lg:leading-tight font-semibold text-transparent text-5xl lg:text-7xl bg-clip-text bg-gradient-to-r from-indigo-500 to-orange-600 tracking-wider ">
          I enjoy building webs and apps
        </h1>
      </div>
    </FloatingIcons>
  );
};
