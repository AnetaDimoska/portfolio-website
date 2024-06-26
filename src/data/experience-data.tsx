import { experience } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function ExperienceData() {
    const t = useTranslations("experience_data");
    const keys = ['full_time', 'intern', 'academy', 'overall_experience'] as const;

    return keys.map(key => (
      {
        title: experience[key].title, 
        description: t(`${key}.description`), 
        location: experience[key].location, 
        link: experience[key].link, 
        icon: experience[key].icon,
        date: experience[key].date
  
      }))
}