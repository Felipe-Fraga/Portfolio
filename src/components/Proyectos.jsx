import todo from "../Images/todo.png";
import earth from "../Images/earth.png";
import moru from "../Images/moru.png";
import RyM from "../Images/RyM.png";
import { CardProject } from "./CardProject";
import { FaSpaceAwesome } from "react-icons/fa6";
import { FullStack } from "./Stack";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const Proyectos = () => {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    ScrollReveal().reveal(".inicio-cambios-animate", {
      distance: "30px", // Distancia de animación
      origin: "right", // Dirección de origen (ajústala según tus necesidades)
      duration: 900, // Duración de la animación en milisegundos
      delay: 300, // Retraso antes de que comience la animación
      easing: "cubic-bezier(0.5, 0, 0, 1)", // Curva de aceleración
    });
  }, []);

  const projects = [
    {
      img: moru,
      title: "Moru APP",
      text: t("moru-text"),
      deploy: "https://moru-app-front.vercel.app/",
      bg: "#280a50",
      stack: [
        "FaJs",
        "FaReact",
        "SiVite",
        "FaNodeJs",
        "SiTailwindcss",
        "SiAuth0",
        "SiSequelize",
        "SiExpress",
        "BiLogoPostgresql",
        "TbBrandRedux",
      ],
    },
    {
      img: todo,
      title: t("todo-title"),
      text: t("todo-text"),
      deploy: "https://to-do-list-nu-lake.vercel.app/",
      github: "https://github.com/Felipe-Fraga/toDo-vite",
      bg: "#312E81",
      stack: ["FaJs", "FaReact", "SiTailwindcss", "SiVite"],
    },
    {
      img: earth,
      title: t("earth-title"),
      text: t("earth-text"),
      deploy: "https://earth-echoes.vercel.app/",
      github: "https://github.com/Felipe-Fraga/EarthEchoes",
      bg: "#001C30",
      stack: ["FaJs", "FaReact", "SiTailwindcss", "SiVite"],
    },
    {
      img: RyM,
      title: "Rick and Morty",
      text: t("RyM-text"),
      deploy: "https://rick-and-morty-five-delta.vercel.app/",
      github: "https://github.com/Felipe-Fraga/RickAndMorty",
      bg: "#2C272E",
      stack: ["FaJs", "FaReact", "SiTailwindcss", "TbBrandRedux", "SiVite"],
    },
  ];

  return (
    <div className="min-h-screen py-10 w-[80%] mx-auto inicio-cambios-animate">
      <FullStack />

      <div className="flex justify-between mt-10">
        <h1 className="text-5xl text-detLight dark:text-white font-rosarivo">
          <span className="text-details">Pro</span>
          {t("jects")}
        </h1>
  
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {projects.map((project, index) => (
          <CardProject key={index} {...project} />
        ))}
      </div>
    </div>
  );
};
