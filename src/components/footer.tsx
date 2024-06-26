import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
    return (
        <footer className="mb-10 mt-12 md:mt-20 px-4 text-center text-gray-500">
        <small className="mb-2 block text-xs">
          &copy; 2024 Aneta Dimoska.  {t('content')}.
        </small>
      </footer>
    );
}