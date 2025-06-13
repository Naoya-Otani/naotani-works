import SkillDot from '@/components/atoms/SkillDot';

interface SkillItemProps {
  skill: string;
}

export default function SkillItem({ skill }: SkillItemProps) {
  return (
    <li className="flex items-center gap-3 text-green-800 font-medium group/item">
      <SkillDot />
      <span className="group-hover/item:translate-x-2 transition-transform duration-300">
        {skill}
      </span>
    </li>
  );
}