"use client";

import React, { useEffect, useRef, useState } from "react";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "./section-heading";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const refDiv = useRef<HTMLDivElement | null>(null);
  const [isSectionVisible, setIsSectionVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsSectionVisible(entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      id="experience"
      className="mt-24 md:mt-32  scroll-mt-32 relative "
    >
      <SectionHeading>My Experience</SectionHeading>
      <div className="bg-[#e5e2f8] blur-[14rem] absolute top-0 left-0 -z-10 w-full h-full dark:bg-[#38345f]"></div>
      <div
        ref={refDiv}
        className={`timeline ${
          isSectionVisible && "after:animate-moveLine"
        } relative max-w-[1200px] mt-6 md:mt-20 mx-auto`}
      >

        {experiencesData?.map((item, index) => (
          <div
            className={`group container opacity-0 ${
              isSectionVisible && "animate-movedown"
            } w-full relative left-0 lg:odd:left-0 lg:even:left-1/2 lg:w-1/2 py-3 pl-20 pr-6 lg:pl-12 lg:pr-12 `}
            style={{ animationDelay: `${index * 0.5}s` }}
            key={index}
          >
            <div className="p-4 rounded-full text-[1.5rem] bg-white absolute odd-container lg:group-even:left-[-28px] z-10 dark:bg-gray-300 dark:text-gray-900">
              {item.icon}
            </div>

            <div className="text-box py-5 px-8 relative rounded-md text-sm bg-white/50  dark:bg-white/20 dark:text-white/75">
              <h3 className="font-semibold">{item.title}</h3>
              <p>{item.location}</p>
              <p className="italic opacity-65 text-sm">{item.date}</p>
              <p className="mt-3">{item.description} {item.link && <a href={item.link} target="_blank" className="text-blue-600 hover:text-blue-800">LinkedIn profile</a>}</p>
              <span className="arrow h-0 w-0 absolute top-5 z-10 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent group-odd:border-r-[8px] group-odd:border-r-red-400 dark:group-odd:border-r-red-400/80 group-odd:left-[-8px] lg:group-odd:border-l-[8px] lg:group-odd:border-r-0 lg:group-odd:border-l-red-400 dark:group-odd:border-l-red-400/80 group-even:border-r-red-400 dark:group-even:border-r-red-400/80 lg:group-odd:left-full group-even:border-r-[8px] lg:group-odd:right-[-8px] group-even:left-[-8px]"></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
