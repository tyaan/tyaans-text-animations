'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type PushLettersUpProps = {
  text: string;
  hoverText: string;
  initialClasses?: string;
  hoverClasses?: string;
  duration?: number;
  stagger?: number
};

const PushLettersUp: React.FC<PushLettersUpProps> = ({
  text,
  hoverText,
  initialClasses = '',
  hoverClasses = '',
  duration = 0.3,
  stagger = 0.05
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="h-[1.1em] relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* initial text */}
      <motion.span
        className={`absolute ${initialClasses}`}
        animate={hovered ? 'hover' : 'initial'}
        initial="initial"
        variants={{
          hover: {
            transition: {
              staggerChildren: stagger,
            },
          },
          initial: {
            transition: {
              staggerChildren: stagger
            },
          },
        }}
      >
        {text.replace(/ /g, '\u00A0').split('').map((char, i) => (
          <motion.span
            key={text + i}
            className="relative inline-block"
            variants={{
              initial: { y: '0%'},
              hover: { y: '-120%'},
            }}
            transition={{
              duration,
              ease: 'easeInOut'
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>

      {/* Hover Text */}
      <motion.span
        className={`absolute ${hoverClasses}`}
        animate={hovered ? 'hover' : 'initial'}
        initial="initial"
        variants={{
          hover: {
            transition: {
              staggerChildren: stagger
            },
          },
          initial: {
            transition: {
              staggerChildren: stagger
            },
          },
        }}
      >
        {hoverText.replace(/ /g, '\u00A0').split('').map((char, i) => (
          <motion.span
            key={hoverText + i}
            className="relative inline-block"
            variants={{
              initial: { y: '120%'},
              hover: { y: '0%'},
            }}
            transition={{
              duration,
              ease: 'easeInOut'
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>

    </div>
  );
};

export default PushLettersUp;
