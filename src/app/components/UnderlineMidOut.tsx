'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type UnderlineMidOutProps = {
  text: string;
  duration?: number;
  color?: string;
  thickness?: number;
};

export default function UnderlineMidOut({
  text,
  duration = 0.4,
  color = 'black',
  thickness = 5
}: UnderlineMidOutProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="inline-block relative cursor-pointer" 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
      <motion.span
        className="absolute left-0 bottom-0"
        style={{ 
          backgroundColor: color, 
          width: '100%', 
          height: `${thickness}px`,
          transformOrigin: 'center'
        }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration, ease: 'easeInOut' }}
      />
    </div>
  );
}
