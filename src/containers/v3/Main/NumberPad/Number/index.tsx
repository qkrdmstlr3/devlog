import { motion } from 'framer-motion';
import { MouseEvent } from 'react';
import * as Style from './style.css';

export interface NumberProps {
  id?: string;
  number: number;
  animationDelay?: number;
  onClick?: (event: MouseEvent<HTMLSpanElement>) => void;
}

export function Number({ id, number, animationDelay, onClick }: NumberProps) {
  return (
    <motion.span
      id={id}
      className={Style.NumberWrapper}
      onClick={onClick}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
        delay: animationDelay,
      }}
      style={{
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {number}
    </motion.span>
  );
}
