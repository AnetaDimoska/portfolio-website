import { useTranslations } from "next-intl";
import { links } from "@/lib/data";

export default function NavbarLinks() {
  const t = useTranslations("navbar");
  const keys = [
    "home",
    "projects",
    "experience",
    "skills",
    "about",
    "contact",
  ] as const;

  return keys.map((key) => ({
    name: t(`${key}.name`),
    hash: links[key].hash,
    icon: links[key].icon
  }));
}
