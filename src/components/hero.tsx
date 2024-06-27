"use client";
import IntroIllustration from "./intro-illustration";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useSectionInView } from "@/hooks/useSectionInView";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import FlowerIllustration from "./flower-illustration";

export default function Hero() {
  const t = useTranslations("hero");
  const { ref } = useSectionInView(t("section_name"));
  const { setActiveSection } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="w-full relative sm:static overflow-x-hidden md:overflow-hidden scroll-mt-[120rem]"
    >
      <div className="block mt-14 md:mt-28 xxxl:mt-40  xxl:w-11/12 xxl:ml-auto xxxl:w-10/12">
        <div className="relative sm:block w-full xxl:flex xxl:justify-between">
          <div className="relative sm:static w-full  md:h-[65vh] xxl:h-auto">
            <div className="text-[20px]">
              <FlowerIllustration />
            </div>

            <h1 className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] md:text-4xl hidden-before-animation animate-slideDeskFromTop">
              {t.rich("greeting", {
                p: (chunks) => <p>{chunks}</p>,
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </h1>
            <p className=" w-full lg:w-4/5 xxxl:w-2/3 mb-10 mt-2  px-4 text-xl font-medium !leading-[1.5] md:text-2xl hidden-before-animation animate-slideFromBottom">
              {t.rich("headline", {
                p: (chunks) => <p>{chunks}</p>,
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            {/* ------------------- CTA Buttons ---------------- */}
            <div className="md:grid md:grid-cols-[1fr_2fr] items-center gap-3 mt-[100px] px-[1rem] hidden-before-animation animate-slideHeroButtons z-20 relative md:mt-0  ">
              {/* Connect button */}
              <Link
                href="#contact"
                className="group bg-darkBlue w-full text-white text-center text-sm py-4 md:py-4 flex justify-center items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                onClick={() => {
                  setActiveSection("Contact");
                }}
              >
                {t("cta_connect")}
                <FaArrowRightLong className="opacity-70 group-hover:translate-x-1/2 transition" />
              </Link>
              <div className="w-full grid justify-center md:justify-start text-center mt-3 md:mt-0 grid-cols-[2fr_1fr] md:grid-cols-[1fr_1fr] gap-x-3">
                {/* Download button */}
                <a
                  className="group bg-white px-2 md:px-7 py-3 md:py-3 text-sm inline-flex justify-center items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black dark:bg-transparent/15"
                  href="/cv.pdf"
                  download
                >
                  {t("cta_download")} <FiDownload />
                </a>
                <div className="flex justify-center items-center md:justify-start gap-x-3">
                  {/* Github link */}
                  <a
                    href="https://github.com/AnetaDimoska"
                    target="_blank"
                    className="flex justify-center items-center w-8 h-8 rounded-full bg-white dark:bg-black/10 "
                  >
                    <FaGithub className="text-xl cursor-pointer opacity-70 hover:scale-110  active:scale-105  transition" />
                  </a>
                  {/* LinkedIn link */}
                  <a
                    href="https://www.linkedin.com/in/aneta-dimoska/"
                    target="_blank"
                    className="flex justify-center items-center w-8 h-8 rounded-full bg-white dark:bg-black/10"
                  >
                    <FaLinkedinIn className="text-xl cursor-pointer opacity-70 hover:scale-110  active:scale-105  transition" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 opacity-25 z-[-1] xl:opacity-100 xl:z-auto">
            <IntroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
