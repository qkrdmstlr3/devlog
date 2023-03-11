import { motion } from 'framer-motion';
import { MouseEvent } from 'react';
import * as Style from './style.css';

export interface NumberProps {
  number: number;
  animationDelay?: number;
  onClick?: (event: MouseEvent<HTMLSpanElement>) => void;
}

export function Number({ number, animationDelay, onClick }: NumberProps) {
  return (
    <motion.span
      className={Style.NumberWrapper}
      onClick={onClick}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        // rotate: 360,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 2,
        delay: animationDelay,
      }}
    >
      {number}
    </motion.span>
  );
}
