"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
};

export default function ProjectGallery({ images }: Props) {
  const t = useTranslations("project_details_page");
  const [activeImage, setActiveImage] = useState<string>(images[0]);
  return (
    <div className=" mt-6 shadow-md bg-white/25 dark:bg-white/15 rounded-xl">
        <h3 className="text-2xl font-semibold text-gray-900 text-center m-4 pt-4 dark:text-white/60">
        {t('gallery')}
        </h3>
      <div className="xxl:flex gap-8  justify-between  px-6 py-6 ">
        <div className="hidden w-2/3 rounded-xl  xxl:block">
          <Image
            src={activeImage}
            width={800}
            height={800}
            className="block w-full h-auto object-fit rounded-xl"
            alt="Project Image"
          />
        </div>
        <div className="w-full xl:w-1/3 xl:h-1/2 lg:grid grid-cols-2 xl:grid-cols-3  gap-2 items-center ">
          {images.map((image, index) => (
            <div key={index} className=" h-[190px] xxl:h-auto rounded-xl">
              <Image
                className="w-full h-[190px] xxl:h-auto block object-contain rounded-md"
                width={290}
                height={190}
                src={image}
                alt="Project Image"
                onMouseEnter={() => setActiveImage(image)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
