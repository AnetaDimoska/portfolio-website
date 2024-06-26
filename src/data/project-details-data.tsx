import { useTranslations, useFormatter } from "next-intl";
import { projectsDetails } from "@/lib/data";

export default function ProjectsDetailsData(id: number) {

  const t = useTranslations("project_details_page");
  const keys = ["brainster_learn", "brainster_library", "generation_next" , "rjk_korchagin", "portfolio"] as const;

  const features = keys.map((key) => {
    return projectsDetails[key].features.map((feature, index) => ({
      ...feature,
      title: t(`${key}.features.${index}.title`),
    }));
  });

  const filteredFeatures = features.flat().filter(item => item.project_id === id)

  return keys.map((key) => ({
    id: projectsDetails[key].id,
    title: projectsDetails[key].title,
    description: t(`${key}.description`),
    link: projectsDetails[key].link,
    media: projectsDetails[key].media,
    technologies: projectsDetails[key].technologies,
    features: filteredFeatures,
    role: t(`${key}.role`),
    info: t(`${key}.info`),
    development_process: t(`${key}.development_process`),
  }));
}
