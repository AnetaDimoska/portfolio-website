import { ReactNode } from "react";

export default async function ProjectDetailsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative">
      <div className="bg-[#ecd0d0]  blur-[14rem] absolute top-[600px] left-0 -z-10 w-full h-1/2 dark:bg-[#4b393a]"></div>
      {children}
    </div>
  );
}
