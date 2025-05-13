'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type PushLettersSideMultiProps = {
  text: string[];
  classes?: string[];
  duration?: number;
  stagger?: number;
  timeBetween?: number;
  letterWidth?: number | null
};

const PushLettersSideMulti: React.FC<PushLettersSideMultiProps> = ({
  text,
  classes = [],
  duration = 0.3,
  stagger = 0.05,
  timeBetween = 1,
  letterWidth = null
}) => {
  const [wordIdx, setWordIdx] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % text.length);
    }, timeBetween*1000);

    return () => clearInterval(interval);
  }, [timeBetween, text.length]);

  function posMod(a: number, b: number): number {
    return ((a % b) + b) % b;
  }

  return (
    <div
      className="h-[1.2em] items-center justify-center relative flex overflow-hidden cursor-pointer"
    >
      {text.map((word, i) => (
        <motion.span
          key={word + i}
          className={`absolute ${classes[i]}`}
          animate={
            i == posMod(wordIdx - 1, text.length) ? 'below' : 
            i == wordIdx ? 'centered' : 
            'above'
          }
          initial={
            i == posMod(wordIdx - 1, text.length) ? 'below' : 
            i == wordIdx ? 'centered' : 
            'above'
          }
          variants={{
            below: {
              transition: {
                staggerChildren: stagger
              },
            },
            centered: {
              transition: {
                staggerChildren: stagger,
                delayChildren: stagger * (text[posMod(i - 1, text.length)].length - 1)
              },
            },
            above: {
              transition: {
                staggerChildren: stagger
              },
            },
          }}
        >
          {word.replace(/ /g, '\u00A0').split('').map((char, j) => (
            <motion.span
              key={char + j}
              className="text-center relative inline-block"
              style={{
                width : letterWidth + 'px'
              }}
              variants={{
                below: { x: '-100vw'},
                centered: { x: '0'},
                above: {x: '100vw'}
              }}
              transition={{
                duration: (i == posMod(wordIdx - 1, text.length) || i == wordIdx ) || 
                    (i == (wordIdx - 1) % text.length) ? duration : 0,
                ease: 'easeInOut'
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </div>
  );
};

export default PushLettersSideMulti;
