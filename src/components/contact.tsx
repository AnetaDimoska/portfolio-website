"use client";

import { sendEmail } from "@/actions/sendEmail";
import { useRef } from "react";
import { useSectionInView } from "@/hooks/useSectionInView";
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";
import SubmitButton from "./submit-button";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  const { ref } = useSectionInView(t("section_name"));

  const refForm = useRef<HTMLFormElement>(null);

  return (
    <section
      ref={ref}
      id="contact"
      className=" mt-24 md:mt-32 w-[min(90%,38rem)] mx-auto scroll-mt-32"
    >
      <SectionHeading>{t("heading")}</SectionHeading>

      <form
        ref={refForm}
        action={async (formData) => {
          const res = await sendEmail(formData);

          if ("error" in res && typeof res.error === "string") {
            return toast.error(res?.error as string);
          }

          if (
            res.error &&
            typeof res.error === "object" &&
            "message" in res?.error
          ) {
            return toast.error(res?.error.message as string);
          }

          toast.success(t("success"));
          refForm.current?.reset();
        }}
        className="mt-10 flex flex-col dark:text-black "
      >
        <input
          className="h-14 px-4 rounded-lg border border-gray-300 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="email"
          type="email"
          required
          maxLength={500}
          placeholder={t("email")}
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-gray-300 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder={t("message")}
          required
          maxLength={5000}
        />

        <SubmitButton />
      </form>
    </section>
  );
}
