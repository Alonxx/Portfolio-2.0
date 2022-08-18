import { Avatar } from "./Avatar";

export const NavBar: React.FC = () => {
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

  return (
    <div className="min-w-full h-12 top-0 z-10 ">
      <div className="w-full flex justify-center gap-7 mt-4">
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

/* backdrop-blur-sm bg-white/10 */
