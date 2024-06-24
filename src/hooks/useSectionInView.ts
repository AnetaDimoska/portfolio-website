import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useRef } from "react";

export function useSectionInView(sectionName: string) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { setActiveSection, timeOfLastClick, setTimeOfLastClick } = useActiveSectionContext();

  useEffect(() => {

        const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          if (entry.isIntersecting) {
            setActiveSection(sectionName);
          }
        },
        { threshold: 0.6 }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
  

  }, [sectionName, timeOfLastClick, setActiveSection, setTimeOfLastClick]);

  return {
    ref,
  };
}
