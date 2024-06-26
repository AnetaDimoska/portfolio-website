
import Image from "next/image";

import { BiSolidUser } from "react-icons/bi";
import { IoBriefcase } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  image: string;
  category: string;
  description: string;
  title: string;
  timeSpan: string;
  technologies: {
    title: string,
    bgColor: string,
}[]
}

export default function ProjectCard({
  image,
  category,
  description,
  title,
  timeSpan,
  technologies,
}: ProjectCardProps) {
  const t = useTranslations("general");
  return (
    <article className="relative parent cursor-pointer rounded-xl ">
      <div className="perspective-1000 card-container w-full h-[560px] relative">
        <div className="card  gradient-border-hover dark:dark transform-style-preserve bg-white dark:bg-gray-700 p-6 rounded-xl ">
          <div className="card-content">
            <Image
              src={image}
              alt="Project Cover"
              width={400}
              height={100}
              className="block w-[100%] rounded-xl"
            />

            <div className="mt-4">
              <div className="md:flex justify-between items-center">
                <p className="flex items-center ">
                  {category === "work" ? (
                    <>
                      <IoBriefcase />{" "}
                      <span className="ml-1"> {t('professional')}</span>
                    </>
                  ) : (
                    <>
                      <BiSolidUser /> <span className="ml-2"> {t('personal')}</span>
                    </>
                  )}
                </p>
                <div className="flex items-center gap-2">
                  <BsCalendar3 /> <span>{timeSpan}</span>
                </div>
              </div>
              <p className="mt-7 text-lg">{description}</p>
              <div className="mt-6 flex gap-2 flex-wrap">
                {technologies?.map((tech) => (
                  <span key={tech.title} className="rounded-3xl px-[0.8rem] py-[0.5rem] text-white opacity-75" style={{ backgroundColor: tech.bgColor }}>
                    {tech.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pin-point absolute top-0 left-1/2 -translate-x-1/2 flex justify-center  z-[-1]">
        <div className="flex items-center flex-col">
          <p className="rounded-3xl bg-darkBlue label p-3 text-white ">
            {title}
          </p>
          <div className="w-[1px] h-[130px] bg-gradient-to-b from-transparent to-cyan-500 z-1"></div>
        </div>
      </div>
    </article>
  );
}
