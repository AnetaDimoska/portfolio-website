"use client";

import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "@/components/locale-switcher-select";
import { locales } from "@/config";
import { useEffect, useState } from "react";

export default function LocaleSwitcher() {
  const t = useTranslations("locale_switcher");
  const locale = useLocale();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("locale", locales);

  return (
    <LocaleSwitcherSelect defaultValue={locale} >
      {locales.map((current) => (
        <option
          key={current}
          value={current}
          className="text-[14px] flex justify-center dark:text-black"
        >
      
            {" "}
            {isMobile
              ? t("locale_flags", { locale: current })
              : t("locale", { locale: current })}
        
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
