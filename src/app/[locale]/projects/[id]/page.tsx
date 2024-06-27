import Link from "next/link";
import { useTranslations } from "next-intl";
import { MdArrowBack } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import ProjectGallery from "@/components/project-gallery";
import ProjectsDetailsData from "@/data/project-details-data";

export default function ProjectDetails({
  params,
}: {
  params: { id: string; locale: string };
}) {
  const t = useTranslations("project_details_page");
  const data = ProjectsDetailsData(+params.id);
  const project = data.find((project) => project.id === +params.id);

  return (
    <section className="bg-black-100 py-20 ">
      <div className="min-h-screen w-[90%]  lg:max-w-[1400px] mx-auto text-gray-950 dark:text-white/60 relative">
        <div className="absolute top-[-80px]  lg:top-0">
          <Link
            href="/"
            className="text-gray-900/60 dark:text-white/60 dark:hover:text-white/30 transition-all"
          >
            <MdArrowBack className="text-3xl " />
          </Link>
        </div>
        {/* ------- Header ----------- */}
        <header>
          <h2 className="text-[38px] leading-[52px] mt-6 lg:mt-0 xl:text-7xl text-center dark:text-white/60">
            {project?.title}
          </h2>
          <p className="lg:w-1/2 mx-auto text-center mt-6">
            {project?.description}
          </p>
          {project?.link ? (
            <a
              href={project?.link}
              target="_blank"
              className="text-center flex justify-center items-center gap-2 mt-3 text-purple-500/80 hover:text-purple-500/60 dark:text-purple-300/80 dark:hover:text-purple-300/60"
            >
              {project.visit_link}
              <FiExternalLink />
            </a>
          ) : (
            ""
          )}
        </header>
        <div className="grid grid-cols-1 xxxl:grid-cols-3 gap-8 mt-12 lg:mt-20">
          {/* <!-- Project Description Card --> */}
          <div className="shadow-md  bg-white/35 rounded-xl p-6 dark:bg-white/15">
            <h3 className="text-2xl font-semibold text-gray-900  dark:text-white/60">
              {t("project_description")}
            </h3>
            <p className="mt-4 leading-relaxed">{project?.info}</p>
          </div>
          {/* <!-- Key Features Card --> */}
          <div className="shadow-md  bg-white/35 rounded-xl p-6 relative overflow-hidden dark:bg-white/15">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 dark:text-white/60">
              {t("key_features")}
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              fill="none"
              viewBox="0 0 200 200"
              className="absolute opacity-10 -bottom-14 -right-14"
            >
              <g clip-path="url(#clip0_116_92)">
                <path
                  fill="url(#paint0_linear_116_92)"
                  d="M127.233 110.308c18.623 7.05 43.69 5.765 59.65-3.058L200 100l-13.117-7.25c-15.96-8.823-41.026-10.107-59.65-3.058l-13.966 5.286c-.087-.281-.192-.553-.295-.826l13.574-6.12c18.154-8.184 34.969-26.817 40.017-44.341l4.148-14.402-14.402 4.148c-17.524 5.047-36.157 21.863-44.342 40.017l-5.91 13.11a13.937 13.937 0 0 0-.828-.379l5.079-13.419c7.049-18.623 5.764-43.69-3.058-59.65L100 0l-7.25 13.117c-8.823 15.96-10.107 41.026-3.058 59.65l5.079 13.419c-.283.114-.556.246-.828.379l-5.91-13.111C79.847 55.3 61.214 38.484 43.69 33.437L29.289 29.29l4.148 14.402C38.484 61.215 55.3 79.848 73.454 88.033l13.573 6.12c-.102.273-.208.544-.294.826l-13.967-5.287c-18.623-7.05-43.69-5.764-59.65 3.058L0 100l13.117 7.25c15.96 8.823 41.026 10.108 59.65 3.058l14.62-5.533c.114.252.23.505.36.749l-14.293 6.444c-18.153 8.184-34.97 26.817-40.017 44.341l-4.148 14.402 14.402-4.148c17.524-5.047 36.157-21.863 44.342-40.016l6.633-14.713c.245.102.5.186.751.275l-5.725 15.125c-7.05 18.623-5.764 43.69 3.058 59.65l7.25 13.117 7.251-13.117c8.822-15.96 10.107-41.026 3.058-59.65l-5.726-15.126c.252-.088.507-.172.752-.275l6.633 14.713c8.184 18.154 26.817 34.969 44.341 40.017l14.402 4.148-4.148-14.402c-5.047-17.524-21.863-36.157-40.016-44.342l-14.294-6.443c.13-.244.246-.497.361-.75l14.619 5.534Z"
                ></path>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_116_92"
                  x1="177"
                  x2="39.499"
                  y1="0"
                  y2="152.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#6870a8"></stop>
                  <stop offset="1" stop-color="#535a96"></stop>
                </linearGradient>
                <clipPath id="clip0_116_92">
                  <path fill="#fff" d="M0 0h200v200H0z"></path>
                </clipPath>
              </defs>
            </svg>

            <ul className="flex flex-wrap gap-2">
              {project?.features.flat().map((feature) => (
                <li
                  key={feature.id}
                  className="flex items-center gap-x-1 p-2  rounded-xl border border-gray-500"
                >
                  <span>{feature.icon}</span>
                  <h3>{feature.title}</h3>
                </li>
              ))}
            </ul>
          </div>

          {/* <!-- Technologies Used Card --> */}
          <div className="shadow-md  bg-white/35 rounded-xl p-6 dark:bg-white/15">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 dark:text-white/60">
              {t("technologies")}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {project?.technologies?.map((tech) => (
                <li
                  key={tech}
                  className="flex rounded-3xl px-3 py-1 items-center opacity-75 border border-gray-900 dark:border-white/60"
                >
                  <span>{`<${tech} />`}</span>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" mt-6 ">
          <div className="lg:flex  shadow-md bg-white/35 rounded-xl p-6 lg:px-6 lg:py-16 dark:bg-white/15">
            {/* <!-- My Role --> */}
            <div className="lg:w-1/2 lg:border-r border-r-gray-400 dark:border-r-gray-400/60">
              <h3 className="text-2xl font-semibold text-gray-900  mb-4 dark:text-white/60">
                {t("my_role")}
              </h3>
              <p className="w-[80%]">{project?.role}</p>
            </div>
            {/* <!-- Development process--> */}
            <div className="mt-10 lg:mt-0 lg:w-1/2 flex flex-col items-end">
              <h3 className="text-2xl font-semibold text-gray-900  mb-4 dark:text-white/60">
                {t("dev_process")}
              </h3>
              <p className="w-[80%] text-right">
                {project?.development_process}
              </p>
            </div>
          </div>
        </div>
        {/* --------------- Project Gallery--------------- */}
        <ProjectGallery images={project?.media?.images || []} />
      </div>
    </section>
  );
}
