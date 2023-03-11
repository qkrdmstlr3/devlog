import { motion } from 'framer-motion';
import * as Style from './style.css';

interface StitchProps {
  showing?: boolean;
}

export function Stitch({ showing }: StitchProps) {
  return (
    <div className={Style.Wrapper}>
      <motion.div
        initial="hide"
        animate={showing ? 'show' : 'hide'}
        variants={{
          show: {
            top: '0px',
            left: '0px',
            opacity: 1,
          },
          hide: {
            top: '-50px',
            left: '-50px',
            opacity: 0,
          },
        }}
        style={{ position: 'absolute' }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className={Style.TopLeft} />
      </motion.div>
      <motion.div
        initial="hide"
        animate={showing ? 'show' : 'hide'}
        variants={{
          show: {
            top: '0px',
            right: '0px',
            opacity: 1,
          },
          hide: {
            top: '-50px',
            right: '-50px',
            opacity: 0,
          },
        }}
        style={{ position: 'absolute' }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className={Style.TopRight} />
      </motion.div>
      <motion.div
        initial="hide"
        animate={showing ? 'show' : 'hide'}
        variants={{
          show: {
            bottom: '0px',
            left: '0px',
            opacity: 1,
          },
          hide: {
            bottom: '-50px',
            left: '-50px',
            opacity: 0,
          },
        }}
        style={{ position: 'absolute' }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <div className={Style.BottomLeft} />
      </motion.div>
      <motion.div
        initial="hide"
        animate={showing ? 'show' : 'hide'}
        variants={{
          show: {
            bottom: '0px',
            right: '0px',
            opacity: 1,
          },
          hide: {
            bottom: '-50px',
            right: '-50px',
            opacity: 0,
          },
        }}
        style={{ position: 'absolute' }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <div className={Style.BottomRight} />
      </motion.div>
    </div>
  );
}
