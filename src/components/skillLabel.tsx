import { ReactNode } from "react";

interface SkillLabelProps {
  id: number;
  title: string;
  icon: ReactNode;
  color: string;
}

export default function SkillLabel({ title, color, icon }: SkillLabelProps) {
  return (
    <div
      className={`flex items-center justify-center gap-1 px-3 py-2 rounded-3xl border font-bold]`}
      style={{ border: `1px solid ${color}` }}
    >
      <span style={{color: color}}>{icon}</span> <span>{title}</span>
    </div>
  );
}
