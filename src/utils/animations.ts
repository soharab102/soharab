// src/utils/animations.ts

import { Variants } from 'framer-motion';

// ===== FADE ANIMATIONS =====
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// ===== SCALE ANIMATIONS =====
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const scaleInPulse: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut',
      scale: {
        type: 'spring',
        stiffness: 200,
        damping: 15
      }
    }
  }
};

// ===== STAGGER ANIMATIONS =====
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

// ===== SLIDE ANIMATIONS =====
export const slideInLeft: Variants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const slideInRight: Variants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const slideInUp: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const slideInDown: Variants = {
  hidden: { y: '-100%', opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// ===== ROTATE & FLIP ANIMATIONS =====
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -180 },
  visible: { 
    opacity: 1, 
    rotate: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

export const flipIn: Variants = {
  hidden: { opacity: 0, rotateX: -90 },
  visible: { 
    opacity: 1, 
    rotateX: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const flipInY: Variants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: { 
    opacity: 1, 
    rotateY: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// ===== BOUNCE & SPRING ANIMATIONS =====
export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10
    }
  }
};

export const springIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  }
};

// ===== HOVER EFFECTS =====
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2, ease: 'easeInOut' }
};

export const hoverGlow = {
  boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
  transition: { duration: 0.3 }
};

export const hoverLift = {
  y: -8,
  transition: { duration: 0.2, ease: 'easeInOut' }
};

export const hoverShake = {
  x: [0, -5, 5, -5, 5, 0],
  transition: { duration: 0.5 }
};

// ===== TAP EFFECTS =====
export const tapScale = {
  scale: 0.95,
  transition: { duration: 0.1 }
};

export const tapPush = {
  scale: 0.98,
  y: 2,
  transition: { duration: 0.1 }
};

// ===== CARD ANIMATIONS =====
export const cardHover = {
  y: -10,
  scale: 1.02,
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  transition: { duration: 0.3, ease: 'easeInOut' }
};

export const cardTap = {
  scale: 0.98,
  transition: { duration: 0.1 }
};

// ===== BUTTON VARIANTS =====
export const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
    transition: { duration: 0.2 }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

export const primaryButtonVariants: Variants = {
  initial: { 
    scale: 1,
    background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)'
  },
  hover: { 
    scale: 1.05,
    background: 'linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)',
    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.95 }
};

// ===== TEXT ANIMATIONS =====
export const textContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.2
    }
  }
};

export const textChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  }
};

export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// ===== LOADING & CONTINUOUS ANIMATIONS =====
export const spinnerVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear'
    }
  }
};

export const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const floatVariants: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const breatheVariants: Variants = {
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// ===== PAGE TRANSITIONS =====
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
};

export const slideTransition: Variants = {
  initial: { opacity: 0, x: 100 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    x: -100,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
};

// ===== VIEWPORT SETTINGS =====
export const viewportOptions = {
  once: true,
  margin: '-100px',
  amount: 0.3
};

export const viewportOptionsEager = {
  once: true,
  margin: '0px',
  amount: 0.1
};

export const viewportOptionsLazy = {
  once: true,
  margin: '-200px',
  amount: 0.1
};

// ===== GRADIENT BACKGROUND ANIMATIONS =====
export const gradientBackground = {
  animate: {
    background: [
      'linear-gradient(45deg, #1e3a8a, #3730a3)',
      'linear-gradient(45deg, #3730a3, #7e22ce)',
      'linear-gradient(45deg, #7e22ce, #be123c)',
      'linear-gradient(45deg, #be123c, #1e3a8a)'
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'linear'
    }
  }
};

// ===== GLOW EFFECTS =====
export const glowVariants: Variants = {
  initial: { boxShadow: '0 0 0px rgba(59, 130, 246, 0)' },
  animate: {
    boxShadow: [
      '0 0 0px rgba(59, 130, 246, 0)',
      '0 0 20px rgba(59, 130, 246, 0.5)',
      '0 0 0px rgba(59, 130, 246, 0)'
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// ===== MORPHING SHAPES =====
export const morphVariants: Variants = {
  animate: {
    borderRadius: [
      '60% 40% 30% 70% / 60% 30% 70% 40%',
      '30% 60% 70% 40% / 50% 60% 30% 60%',
      '60% 40% 30% 70% / 60% 30% 70% 40%'
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// ===== QUICK ANIMATIONS FOR PERFORMANCE =====
export const quickFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

export const quickScaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.2, ease: 'easeOut' }
  }
};

// ===== COMPOSED ANIMATIONS =====
export const heroEntrance: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Export a default set for common use
export const defaultAnimation = fadeInUp;
export const defaultStagger = staggerContainer;
export const defaultViewport = viewportOptions;