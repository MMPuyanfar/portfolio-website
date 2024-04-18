"use client";
import {
  CodeBracketIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function ProjectsSection() {
  const projectsData = [
    {
      id: 1,
      title: "Weather App",
      description: "5 days Weather Forecast for any place",
      image: "/images/weather-app.png",
      gitURL:
        "https://github.com/MMPuyanfar/weather-app-nextjs",
      previewURL:
        "https://weather-app-nextjs-mmpuyanfars-projects.vercel.app/",
    },
    {
      id: 2,
      title: "Pomodoro Clock",
      description:
        "Time management tool (Not Developed Yet)",
      image: "/images/pomodoro-app.png",
      gitURL: "https://pomofocus.io/",
      previewURL: "https://pomofocus.io/",
    },
    {
      id: 3,
      title: "Tic Tac Toe",
      description:
        "A simple but interesting game (Not Developed Yet)",
      image: "/images/ttt-game.png",
      gitURL: "https://playtictactoe.org/",
      previewURL: "https://playtictactoe.org/",
    },
  ];
  return (
    <section className="px-4 xl:px-40" id="projects">
      <h2 className="text-white text-center font-bold m-5 text-4xl">
        My Projects
      </h2>
      <Slide>
        {projectsData.map((project) => (
          <div className="each-slide-effect" key={project.id}>
            <div
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "contain",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              className="flex items-center justify-center h-[70vw] max-h-[500px] rounded-3xl group relative mb-5"
            >
              <div className="absolute top-0 left-0 right-0 bottom-0 justify-center items-center w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-1000">
                <Link
                  href={project.gitURL}
                  className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                >
                  <CodeBracketIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-[#ADB7BE] group-hover/link:text-white" />
                </Link>
                <Link
                  href={project.previewURL}
                  className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                >
                  <EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-[#ADB7BE] group-hover/link:text-white" />
                </Link>
              </div>
              <span className="p-5 text-sm sm:text-xl bg-gray-500 text-center self-end rounded-3xl text-black mb-5">
                {project.description}
              </span>
            </div>
          </div>
        ))}
      </Slide>
    </section>
  );
}
