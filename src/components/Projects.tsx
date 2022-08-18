import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import React from "react";

export const Projects: React.FC = () => {
  const [width, setWidth] = React.useState<number>(0);
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
  const carouselRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      setWidth(carousel.scrollWidth - carousel.offsetWidth);
    }
  }, []);
  return (
    <motion.div
      ref={carouselRef}
      className="overflow-hidden w-full cursor-grab"
    >
      <motion.div
        drag={"x"}
        dragConstraints={{
          right: 0,
          left: -width,
        }}
        className="flex"
      >
        {projects.map((project, i) => (
          <motion.div className="" key={i}>
            <ProjectCard key={i} project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

/*   <div className="w-full flex flex-row"> */

/*     */
