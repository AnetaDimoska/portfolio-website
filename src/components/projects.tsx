"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { ProjectCardType } from "@/types/project";
import ProjectCard from "./project-card";
import SectionHeading from "./section-heading";
import ProjectsData from "@/data/projects-data";

export default function Projects({ locale } : { locale: string}) {
  const t = useTranslations("projects");
  const { ref } = useSectionInView(t("section_name"));
  const projects = ProjectsData()

  return (
    <section
      ref={ref}
      id="projects"
      className="mt-24 md:mt-32 xxl:w-11/12 xxxl:w-[68%] mx-auto scroll-mt-32"
    >
      <SectionHeading> {t('heading')}</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 p-4 lg:p-0 gap-4 xl:gap-10 mt-6 md:mt-20">

        {projects.map((project) => (
          <Link href={`/${locale}/projects/${project.id.toString()}`} key={project.id}>
            <ProjectCard  {...project} />
          </Link>
        ))}
      </div>
    </section>
  );
}
