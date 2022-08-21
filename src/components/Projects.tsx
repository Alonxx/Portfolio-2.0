import { ProjectCard } from "./ProjectCard";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useGetWindowDimensions } from "../hooks";

export const Projects: React.FC = () => {
  const { width } = useGetWindowDimensions();

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 2 },
  };

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
    <div className="lg:cursor-grab">
      <AliceCarousel
        mouseTracking
        disableButtonsControls
        disableDotsControls
        paddingLeft={width < 768 ? 20 : 0}
        paddingRight={
          width < 370
            ? 30
            : width < 520
            ? 50
            : width < 768
            ? 200
            : width < 800
            ? 400
            : width < 900
            ? 500
            : width < 1024
            ? 600
            : 200
        }
        responsive={responsive}
        items={projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      />
    </div>
  );
};
