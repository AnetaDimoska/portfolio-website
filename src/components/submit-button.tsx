

import { useTranslations } from "next-intl";
import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";


export default function SubmitButton() {
  const { pending } = useFormStatus();
  const t = useTranslations("contact");

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-full md:w-[8rem] bg-darkBlue text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {t('submit')}{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}