import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Omni Connect",
    description:
      "In house product for Engineers.Provide connection in way to access site's tags or information and make them available on cloud for calculation and dashboard design.",
    image: "/OmniConnect.png",
    github: "https://github.com/asadadi786",
    link: "private",
  },
  {
    name: "Truck Loading Automation System",
    description:
      "Truck Loading Automation System (TLAS) is proposed for OGDCL KPD site for custody transfer and operation management. The objective of this project is to deliver a solution based on instrumentation, hardware and software which will enable an accurate custody transfer from plant to loading tanks, managing the transactions, keeping a historical record of the transaction and report generation.",
    image: "/TMS.jpg",
    github: "https://github.com/asadadi786",
    link: "private",
  },
  {
    name: "Dewan Distillery Reporting System",
    description:
      "DDRS software developed by AVANCEON. The software has been designed and developed to optimize Dewan Distillery Reporting System.",
    image: "/DRS.jpg",
    github: "https://github.com/asadadi786",
    link: "private",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
