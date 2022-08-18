import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import React from "react";
import { Slider } from "./Slider";

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Expiro",
      image: "/images/expiro.png",
      description: "Products expiration control.",
      tags: ["React Native", "Expo", "TypeScript", "AsyncStorage"],
      github: "",
      website: "",
    },
    {
      title: "Sea Animals",
      image: "/images/seaanimals.png",
      description: "Learn, play and interact with sea animals.",
      tags: ["React Native", "Expo", "TypeScript", "Lotties"],
      github: "",
      website: "",
    },
    {
      title: "Pokemon Companion",
      image: "/images/pokemonapp.png",
      description: "Search and obtain information about pokemons",
      tags: ["React", "JavaScript", "NodeJS", "PostgreSQL"],
      github: "",
      website: "",
    },
    {
      title: "The Quizz App",
      image: "/images/quizzapp.png",
      description: "Answer trivia and earn points",
      tags: ["React", "JavaScript"],
      github: "",
      website: "",
    },
  ];

  return (
    <Slider>
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </Slider>
  );
};

/*   <div className="w-full flex flex-row"> */

/*     */
