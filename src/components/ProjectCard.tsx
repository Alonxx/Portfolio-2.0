import { BsGithub, BsGlobe } from "react-icons/bs";

interface Props {
  project: {
    title: string;
    image: string;
    description: string;
    tags: string[];
    github: string;
    website: string;
  };
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="max-w-[18rem] min-h-[26rem] lg:min-h-0 lg:max-w-[22rem]  mb-10 shadow-sm shadow-black/50  bg-[#1c1f39] q  rounded-2xl px-4 pt-2 pb-3">
      <div>
        <div className=" text-start ml-2 mb-4">
          <h1 className=" mt-2 text-xs lg:text-md text-white font-medium">
            {project.description}
          </h1>
          <div className="flex flex-row item-center ">
            <h1 className="text-white font-semibold text-xl mt-2">
              {project.title}
            </h1>
          </div>
        </div>
      </div>
      <div className=" w-64 h-36 lg:w-80 lg:h-48  ">
        <img
          className="shadow-md shadow-black/50 rounded-2xl object-cover w-64 h-36 lg:w-80 lg:h-48 pointer-events-none"
          src={project.image}
          alt="project"
        />
      </div>
      <div className="flex flex-row gap-4 mt-7 lg:mt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex cursor-pointer"
        >
          <BsGithub className="text-white text-xl" />
          <span className="ml-2 m-1 text-white text-sm">Github</span>
        </a>
        <a
          href={project.website}
          target="_blank"
          rel="noreferrer"
          className="flex"
        >
          <BsGlobe className="text-white text-xl cursor-pointer" />
          <span className="ml-2 m-1 text-white text-sm">Web</span>
        </a>
      </div>

      <div className="flex flex-row flex-wrap w-full rounded-t-xl  mb-2  mt-3 ">
        {project.tags.map((tag: string, i: number) => (
          <div
            key={i}
            className="text-center shadow-lg shadow-black/50 mt-2 mr-2 rounded-lg bg-white w-fit px-[4px] py-[1px]  lg:mb-2"
          >
            <span key={i} className="text-xs text-black font-normal">
              {tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
