import { ProjectCard } from "./ProjectCard";
import React from "react";
import { Slider } from "./Slider";

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Expiro",
      image: "/images/expiro.png",
      description: "Products expiration control.",
      tags: ["React Native", "Expo", "TypeScript", "AsyncStorage"],
      github: "https://github.com/Alonxx/expiro",
      website:
        "https://play.google.com/store/apps/details?id=com.alonxx.expiro",
    },
    {
      title: "Sea Animals",
      image: "/images/seaanimals.png",
      description: "Learn, play and interact with sea animals.",
      tags: ["React Native", "Expo", "TypeScript", "Lotties"],
      github: "https://github.com/Alonxx/Sea-Animals",
      website:
        "https://play.google.com/store/apps/details?id=com.alonxx.seaanimals",
    },
    {
      title: "Pokemon Companion",
      image: "/images/pokemonapp.png",
      description: "Search and obtain information about pokemons",
      tags: ["React", "JavaScript", "NodeJS", "PostgreSQL"],
      github: "https://github.com/Alonxx/Pokemon-Companion-App",
      website: "https://pokemon-companionapp.herokuapp.com/",
    },
    {
      title: "The Quizz App",
      image: "/images/quizzapp.png",
      description: "Answer trivia and earn points",
      tags: ["React", "JavaScript"],
      github: "https://github.com/Alonxx/quizzapp",
      website: "https://alonxx.github.io/quizzapp/",
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
