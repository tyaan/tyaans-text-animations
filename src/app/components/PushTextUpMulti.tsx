'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type PushTextUpMultiProps = {
  text: string[];
  classes?: string[];
  duration?: number;
  timeBetween?: number;
};

const PushTextUpMulti: React.FC<PushTextUpMultiProps> = ({
  text,
  classes = [],
  duration = 0.3,
  timeBetween = 1
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
      className="h-[1.2em] relative overflow-hidden cursor-pointer"
    >
      {text.map((word, i) => (
        <motion.span
        key={word + i}
        className={`absolute ${classes[i]}`}
        animate={{ y: i == posMod(wordIdx - 1, text.length) ? '-120%' : 
                      i == wordIdx ? '0%' : 
                      '120%'}}
        initial={{ y: i == posMod(wordIdx - 1, text.length) ? '-120%' : 
                      i == wordIdx ? '0%' : 
                      '120%'}}
        transition={{ 
          duration: (i == posMod(wordIdx - 1, text.length) || i == wordIdx ) || 
                    (i == (wordIdx - 1) % text.length) ? duration : 0,
          ease: 'easeInOut'}}
      >
        {text[i]}
      </motion.span>
      ))}
    </div>
  );
};

export default PushTextUpMulti;
