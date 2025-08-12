import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export function LettersPullUp({
  text,
  className,
  startDelay = 0,
}: {
  text: string;
  className?: string;
  startDelay?: number;
}) {
  const splittedText = text.split('');

  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: startDelay + i * 0.05,
      },
    }),
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const mergeClasses = (...classes: (string | undefined)[]) =>
    classes.filter(Boolean).join(' ');

  return (
    <div className="flex justify-center">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
          className={mergeClasses(
            '',
            className
          )}
        >
          {current === ' ' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}
