export const Skills: React.FC = () => {
  const tools: { name: string; image: string }[] = [
    {
      name: "React",
      image: "/images/react.svg",
    },
    {
      name: "JavaScript",
      image: "/images/JS.svg",
    },
    {
      name: "TypeScript",
      image: "/images/typescript.svg",
    },

    {
      name: "CSS",
      image: "/images/css3.svg",
    },

    {
      name: "HTML",
      image: "/images/html.svg",
    },
    {
      name: "TailwindCSS",
      image: "/images/tailwind.svg",
    },
    {
      name: "NodeJs",
      image: "/images/node.svg",
    },
    { name: "Git", image: "/images/git.svg" },
  ];

  return (
    <div className="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-4">
      {tools.map((tool, i) => (
        <div
          key={i}
          className="mr-3 md:mr-10 mb-8 flex flex-col justify-center items-center gap-1 md:gap-2"
        >
          <div className="w-8 md:w-14">
            <img src={tool.image} alt={tool.name} />
          </div>
          <span className="text-gray-400 text-xs md:text-sm text-center font-medium">
            {tool.name}
          </span>
        </div>
      ))}
    </div>
  );
};
