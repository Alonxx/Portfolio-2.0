import React from "react";
import { Avatar } from "./Avatar";

export const NavBar: React.FC = () => {
  /*   const [navBarVisibility, setNavBarVisibility] =
    React.useState<boolean>(false); */

  const menuOptions = [
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  /*   const handleNavBarVisibility = () => {
    if (window.scrollY > 40) {
      setNavBarVisibility(true);
    } else {
      setNavBarVisibility(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleNavBarVisibility);
  }, []); */

  return (
    <div className="min-w-full mb-20">
      <div className=" h-16  top-0 w-full flex items-center justify-center gap-7 fixed z-30 backdrop-blur-3xl bg-[#131631]/10">
        {menuOptions.map((option, i) => (
          <a href={option.link} key={i} className="cursor-pointer">
            <span className="text-white font-medium text-lg lg:text-xl ">
              {option.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

/* backdrop-blur-sm bg-[#131631]/10 */
