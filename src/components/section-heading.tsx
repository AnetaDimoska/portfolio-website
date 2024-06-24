import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="flex justify-center">
      <h2 className="inline-block text-[1.625rem] md:text-[2rem] font-medium capitalize mb-8 text-center border-b-4 rounded-b-md border-b-teal-300 dark:border-b-teal-300/30 dark:text-white/75" >
        {children}
      </h2>
    </div>
  );
}
