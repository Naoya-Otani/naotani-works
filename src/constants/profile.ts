export interface RoleItem {
  text: string;
  delay: string;
}

export const PROFILE = {
  name: 'Naoya Otani',
  welcomeMessage: '🌱 自然の中へようこそ 🌱',
  tagline: 'デジタルの森で 体験を育てる',
  highlightText: '体験を育てる',
} as const;

export const ROLES: RoleItem[] = [
  { text: '🌳 ソフトウェアエンジニア', delay: '2.2s' },
  { text: '🎨 UI/UX デザイン', delay: '2.4s' },
  { text: '🌱 DX導入支援', delay: '2.6s' }
];

export const CTA_BUTTONS = {
  explore: '作品をみる',
  connect: 'つながりましょう！',
  scrollMore: 'もっとみてみる',
} as const;