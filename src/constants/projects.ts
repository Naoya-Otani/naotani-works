export interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  delay: string;
  demoUrl?: string;
  codeUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'AI-Powered Portfolio',
    description: '次世代ポートフォリオサイト。革新的な3DアニメーションとAI技術を組み合わせたイマーシブな体験を提供。',
    tech: ['Next.js', 'Three.js', 'AI/ML', 'WebGL'],
    gradient: 'from-emerald-500 via-green-500 to-teal-600',
    delay: '2s',
    demoUrl: 'https://portfolio.naotani.works',
    codeUrl: 'https://github.com/naotani/ai-portfolio'
  },
  {
    title: 'Keio Easylist',
    description: '慶應義塾大学の学生向けに、授業や履修の組み方を支援するウェブアプリケーション。授業の情報を簡単に検索・管理できる機能を提供。',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    gradient: 'from-orange-400 via-amber-500 to-red-500',
    delay: '2.2s',
    demoUrl: 'https://dashboard.naotani.works',
    codeUrl: 'https://github.com/naotani/interactive-dashboard'
  }
] as const;