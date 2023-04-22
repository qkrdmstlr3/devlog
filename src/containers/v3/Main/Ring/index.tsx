import { motion } from 'framer-motion';
import { RING_WIDTH } from '../../../../constants';
import { useRing } from '../../../../contexts/RingContext';
import * as Style from './style.css';

export function RingUI() {
  return <div className={Style.Ring} />;
}

export function Ring() {
  const { coordinate } = useRing();

  return coordinate ? (
    <motion.div
      className={Style.RingWrapper}
      initial={{
        opacity: 0,
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      animate={{
        opacity: 1,
        top: coordinate.y - RING_WIDTH / 2,
        left: coordinate.x - RING_WIDTH / 2,
        transform: 'none',
      }}
    >
      <RingUI />
    </motion.div>
  ) : (
    <></>
  );
}
