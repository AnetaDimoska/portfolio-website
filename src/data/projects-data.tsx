import { useTranslations } from "next-intl";
import { projects }  from "@/lib/data"

export default function ProjectsData() {
  const t = useTranslations("projects_data");
  const keys = ['brainster_learn', 'brainster_library', 'generation_next', 'rjk_korchagin', 'portfolio'] as const;

  return keys.map(key => (
    {id: projects[key].id, 
      title: projects[key].title, 
      description: t(`${key}.description`), 
      image: projects[key].image, 
      timeSpan: projects[key].timeSpan, 
      category: projects[key].category,
      technologies: projects[key].technologies

    }))
}
