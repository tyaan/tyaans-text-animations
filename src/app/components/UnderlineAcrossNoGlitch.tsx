'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type UnderlineAcrossNoGlitchProps = {
  text: string;
  duration?: number;
  color?: string;
  thickness?: number;
};

export default function UnderlineAcrossNoGlitch({
  text,
  duration = 0.4,
  color = 'black',
  thickness = 5
}: UnderlineAcrossNoGlitchProps) {
  const [tenState, setTenState] = useState(0);

  return (
    <div
      className="inline-block overflow-hidden relative cursor-pointer " 
      onMouseEnter={() => setTenState((prev) => (prev + 1) % 10)}
      onMouseLeave={() => setTenState((prev) => (prev + 1) % 10)}
    >
      {text}
      {[0, 2, 4, 6, 8].map((state) => (
        <motion.span
        key={text + state}
        className={`absolute left-0 bottom-0`}
        style={{ 
          backgroundColor: color, 
          width: '100%', 
          height: thickness + 'px'}}
        animate={{ left: tenState == state ? '-100%' : tenState == state + 1 ? 0 : '100%'}}
        initial={{ left: tenState == state ? '-100%' : tenState == state + 1 ? 0 : '100%'}}
        transition={{ duration: tenState == state ? 0 : duration, ease: 'easeInOut' }}
      />
      ))}
    </div>
  );
}
