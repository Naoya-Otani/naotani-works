export const SOCIAL_LINKS = [
  { 
    icon: '🐙', 
    name: 'GitHub', 
    href: 'https://github.com/naotani' 
  },
  { 
    icon: '💼', 
    name: 'LinkedIn', 
    href: 'https://linkedin.com/in/naotani' 
  },
  { 
    icon: '🐦', 
    name: 'Twitter', 
    href: 'https://twitter.com/naotani' 
  },
  { 
    icon: '📧', 
    name: 'Email', 
    href: 'mailto:contact@naotani.works' 
  },
] as const;

export const CONTACT_LINKS = {
  email: 'mailto:contact@naotani.works',
  github: 'https://github.com/naotani',
} as const;