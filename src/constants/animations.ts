export const ANIMATION_DELAYS = {
  welcomeMessage: '0.8s',
  nameText: '1.2s',
  roleDescription: '1.8s',
  ctaButtons: '2.8s',
  scrollIndicator: '3.2s',
} as const;

export const ANIMATION_DURATIONS = {
  transition: '3000ms',
  hover: '500ms',
  shine: '1000ms',
  bounce: '300ms',
} as const;

export const FLOATING_ELEMENT_CONFIG = {
  count: 30,
  maxDelay: 8,
  baseDuration: 15,
  maxDurationVariation: 10,
  minSize: 30,
  maxSizeVariation: 40,
} as const;

export const WIND_PARTICLE_CONFIG = {
  count: 8,
  maxDelay: 6,
  baseDuration: 8,
  maxDurationVariation: 4,
} as const;