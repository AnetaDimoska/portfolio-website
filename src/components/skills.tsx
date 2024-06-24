'use client'

import { skillsData } from "@/lib/data";
import SkillLabel from "./skillLabel";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Skills() {
  const {ref} = useSectionInView("Skills")
  return (
    <section ref={ref} id="skills" className=" mt-24 md:mt-32  scroll-mt-32">
     <SectionHeading>Skills</SectionHeading>
      <div className="flex justify-center items-center flex-wrap md:w-11/12 lg:w-10/12 xxl:w-3/4 xxxl:w-2/5 mx-auto gap-4">
        {skillsData.map((skill) => (
          <SkillLabel key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
}
