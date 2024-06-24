import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ActiveSectionContextProvider from "../context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aneta's portfolio",
  description:
    "Aneta is a front end developer with over 2 years of experience building responsive and modern web apps with React and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} w-full bg-gray-50 text-gray-950 relative lg:px-4 xl:px-0 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 transition-colors`}
      >
        <div className="bg-[#f3d8d9] absolute -z-10 top-[-6rem] right-[11rem] h-[30rem] w-[30rem] rounded-full blur-[10rem] sm:w-[65rem] dark:bg-[#6e5657] dark:text-gray-50 dark:text-opacity-90"></div>
        <div className="bg-[#d2cef1] absolute -z-10 top-[-1rem] left-[-35rem] h-[30rem] w-[50rem] rounded-full blur-[10rem] sm:w-[65rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#55526e] dark:text-gray-50 dark:text-opacity-90"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}
          </ActiveSectionContextProvider>

          <Toaster
            position="bottom-left"
            containerStyle={{
              bottom: 50,
              left: 50,
            }}
          />
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
