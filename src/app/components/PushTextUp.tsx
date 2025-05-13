'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type PushTextUpProps = {
  text: string;
  hoverText: string;
  initialClasses?: string;
  hoverClasses?: string;
  duration?: number;
};

const PushTextUp: React.FC<PushTextUpProps> = ({
  text,
  hoverText,
  initialClasses = '',
  hoverClasses = '',
  duration = 0.3,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="h-[1.2em] relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.span
        className={`absolute ${initialClasses}`}
        animate={{ y: hovered ? '-120%' : '0%' }}
        initial={{y: '0%'}}
        transition={{ duration }}
      >
        {text}
      </motion.span>
      <motion.span
        className={`absolute ${hoverClasses}`}
        animate={{ y: hovered ? '0%' : '120%' }}
        initial={{ y: '120%'}}
        transition={{ duration }}
      >
        {hoverText}
      </motion.span>
    </div>
  );
};

export default PushTextUp;
