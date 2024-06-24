"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import Link from "next/link";
import { projects } from "@/lib/data";
import { ProjectCardType } from "@/types/project";
import ProjectCard from "./project-card";
import SectionHeading from "./section-heading";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  return (
    <section
      ref={ref}
      id="projects"
      className="mt-24 md:mt-32 xxl:w-11/12 xxxl:w-[68%] mx-auto scroll-mt-32"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 p-4 lg:p-0 gap-4 xl:gap-10 mt-6 md:mt-20">
        {projects.map((project: ProjectCardType) => (
          <Link href={`/projects/${project.id.toString()}`} key={project.id}>
            <ProjectCard  {...project} />
          </Link>
        ))}
      </div>
    </section>
  );
}
