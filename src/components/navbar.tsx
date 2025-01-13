"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import NavbarLinks from "@/data/navbar-link";
import { useTranslations } from "next-intl";


export default function Navbar() {

  const { activeSection, setActiveSection } = useActiveSectionContext()
  const t = useTranslations("navbar");
  const links = NavbarLinks()


  return (
    <header className="z-[9999] relative w-full flex xs:justify-center px-4">
      <nav className="flex fixed bg-white bg-opacity-80 rounded-full sm:w-auto hidden-before-animation shadow-lg animate-slideNavFromTop top-[1rem]  h-12 px-2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 dark:bg-opacity-40">
        <ul className="flex w-full flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500  sm:w-[initial] sm:flex-nowrap sm:gap-3">
          {links && links?.map((link) => (
            <li
              key={link.hash}
              className={`h-3/4 flex items-center justify-center `}
            >
              <a
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                }}
                className={`flex items-center justify-center w-full rounded-2xl h-[90%] px-2 md:px-3 md:py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-500 ${
                  activeSection  === link.name 
                    ? "text-gray-950 bg-red-100 dark:text-gray-700" 
                    : "text-gray-500"
                }`}
              >
                <span className="mr-[2px] text-[18px] py-[2px]">{link.icon}</span>
                <span className="hidden lg:block">{link.name}</span>
                
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
