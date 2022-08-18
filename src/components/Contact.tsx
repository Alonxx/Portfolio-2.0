import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export const Contact = () => {
  const contactTypes: {
    title: string;
    icon: React.ReactElement;
    url: string;
  }[] = [
    {
      title: "Email",
      icon: <FiMail className="text-white text-2xl md:text-4xl" />,
      url: "mailto:alonsodiazlip@gmail.com",
    },
    {
      icon: <BsLinkedin className="text-white  text-2xl md:text-4xl" />,
      title: "Linkedin",
      url: "https://www.linkedin.com/in/alonsojesusdiaz/",
    },
    {
      icon: <BsGithub className="text-white text-2xl md:text-4xl" />,
      title: "Github",
      url: "https://github.com/Alonxx",
    },
  ];

  return (
    <div className="flex flex-row justify-center items-center w-full h-full gap-20">
      {contactTypes.map((contactType, i) => (
        <a
          href={contactType.url}
          target="_blank"
          rel="noreferrer"
          key={i}
          className={"items-center flex flex-col gap-2 cursor-pointer"}
        >
          {contactType.icon}
          <span className="text-white text-center text-sm tracking-widest">
            {contactType.title}
          </span>
        </a>
      ))}
    </div>
  );
};
