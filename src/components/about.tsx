"use client";
import { useSectionInView } from "@/hooks/useSectionInView";
import { useTheme } from "@/context/theme-context";
import SectionHeading from "./section-heading";
import Image from "next/image";
import profileImage from "../../public/aneta-profile.jpeg";
import { useTranslations } from "next-intl";


export default function About() {
  const t = useTranslations("about");
  const { ref } = useSectionInView(t("section_name"));
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      id="about"
      className=" mt-24 md:mt-32 relative lg:static scroll-mt-32"
    >
      <SectionHeading>{t("heading")}</SectionHeading>
      <div className=" mt-3 lg:mt-20  xxl:w-11/12 xxxl:w-[68%] mx-auto relative z-1 p-4 lg:p-0">
        <div className="bg-[#fbe2e3] blur-[14rem] absolute top-0 left-0 -z-10 w-full h-full dark:bg-[#4b393a]"></div>
        <div className="flex flex-col-reverse  lg:flex-row">
          {/* Content */}
          <div className="rounded-xl self-center lg:w-3/5  relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 409.6 409.6"
              className="absolute bottom-0  left-[-3.125rem] -z-10 "
            >
              <path
                d="M409.602 341.336c0 37.7-30.567 68.266-68.266 68.266-37.703 0-68.266-30.567-68.266-68.266 0-37.703 30.563-68.266 68.266-68.266 37.7 0 68.266 30.563 68.266 68.266zM324.27 179.2c0 32.991-26.743 59.734-59.735 59.734-32.992 0-59.734-26.743-59.734-59.735 0-32.988 26.742-59.734 59.734-59.734 32.992 0 59.735 26.746 59.735 59.734zm-119.47 128c0 56.554-45.847 102.402-102.402 102.402C45.848 409.602 0 363.754 0 307.199c0-56.554 45.848-102.398 102.398-102.398 56.555 0 102.403 45.844 102.403 102.398zM170.672 85.336c0 47.129-38.207 85.336-85.336 85.336S0 132.465 0 85.336 38.207 0 85.336 0s85.336 38.207 85.336 85.336zM409.602 51.2c0 28.277-22.926 51.198-51.204 51.198-28.277 0-51.199-22.921-51.199-51.199C307.2 22.922 330.121 0 358.4 0c28.277 0 51.203 22.922 51.203 51.2zm-17.071 170.663c0 9.426-7.64 17.067-17.066 17.067-9.426 0-17.067-7.64-17.067-17.067 0-9.422 7.641-17.062 17.067-17.062s17.066 7.64 17.066 17.062zM264.535 59.734c0 14.141-11.46 25.602-25.601 25.602-14.137 0-25.598-11.461-25.598-25.602 0-14.136 11.46-25.597 25.598-25.597 14.14 0 25.601 11.46 25.601 25.597zm0 0"
                fill='url("#SvgjsLinearGradient1042")'
              ></path>
              <defs>
                <linearGradient id="SvgjsLinearGradient1042">
                  <stop
                    stop-color={theme === "light" ? "#e1d3ec" : "#6d5d7a"}
                    offset="0"
                  ></stop>
                  <stop
                    stop-color={theme === "light" ? "#f4edfa" : "#534e58"}
                    offset="1"
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
            <p className="text-lg">
              {t.rich("content_one", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p className="text-lg mt-2">
              {t.rich("content_two", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p className="text-lg mt-4">
              {t.rich("content_three", {
                a0: (chunks) => (
                  <a
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                    href="https://www.amazon.co.uk/HowExpert-Guide-Belly-Dancing-Learn-ebook/dp/B08BJGGP45/ref=sr_1_1?dib=eyJ2IjoiMSJ9.3FcfThAJmmrI7pkTUl74Zg.dvLZv-OUxULqe61h3dHSEbW1hYf1C6Hb_TTqputaXIM&dib_tag=se&qid=1718149373&refinements=p_27%3AAneta+Dimoska&s=books&sr=1-1"
                  >
                    {chunks}
                  </a>
                ),
                a1: (chunks) => (
                  <a
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                    href="https://www.youtube.com/watch?v=MR3I0pCZLcY"
                  >
                    {chunks}
                  </a>
                ),
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </div>

          {/* Profile Image */}
          <div className=" w-[12.5rem] h-[12.5rem] lg:flex mx-auto mb-6 lg:mb-0 justify-center lg:w-[18.75rem] lg:h-[18.75rem]">
            <div>
              <Image
                src={profileImage}
                alt="Profile Image"
                className="w-full block  rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
