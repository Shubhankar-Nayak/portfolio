import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import * as React from 'react';

interface TextFadeProps {
  direction: 'up' | 'down';
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
}

export function TextFade({
  direction,
  children,
  className = '',
  staggerChildren = 0.1,
}: TextFadeProps) {
  const FADE_VARIANTS: Variants = {
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring' } 
    },
    hidden: { 
      opacity: 0, 
      y: direction === 'down' ? -18 : 18 
    },
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE_VARIANTS}>{child}</motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}
