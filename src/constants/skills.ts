export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  color: string;
  delay: string;
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: '🌿 フロントエンド',
    icon: '🌿',
    skills: ['React / Next.js', 'TypeScript', 'Tanstack'],
    color: 'from-green-500 to-emerald-600',
    delay: '1.2s'
  },
  {
    title: '🌳 バックエンド',
    icon: '🌳',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL', 'Firebase', 'Supabase'],
    color: 'from-amber-600 to-yellow-600',
    delay: '1.4s'
  },
  {
    title: '🌱 ツール',
    icon: '🌱',
    skills: ['Git / GitHub', 'Docker', 'GCP', 'Vercel', 'Dify'],
    color: 'from-green-600 to-lime-600',
    delay: '1.6s'
  }
] as const;