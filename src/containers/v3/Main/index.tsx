import { motion } from 'framer-motion';
import { useState } from 'react';
import { Logo } from '../../../components/v3/Logo';
import { Stitch } from '../../../components/v3/Stitch';
import { Contents } from './Contents';
import { Ring } from './Ring';
import * as Style from './style.css';

export function MainContainer() {
  const [scale, setScale] = useState(1);
  const [showStitch, setShowStitch] = useState(false);

  return (
    <div className={Style.Wrapper}>
      <motion.div
        animate={{
          top: '2%',
          transform: 'translateX(-50%)',
        }}
        transition={{ delay: 2, duration: 0.5 }}
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'scale(1) translateX(-50%)',
          top: '50%',
        }}
        onAnimationStart={() => {
          setTimeout(() => {
            setScale(0.7);
          }, 2000);
        }}
        onAnimationComplete={() => setShowStitch(true)}
      >
        <motion.div
          animate={{
            opacity: 1,
            top: '50%',
            transform: 'translateY(0)',
          }}
          transition={{ duration: 0.5 }}
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
          }}
        >
          <motion.div
            initial="show"
            animate={showStitch ? 'hide' : 'show'}
            variants={{
              show: {
                opacity: 1,
              },
              hide: {
                opacity: 0,
              },
            }}
            transition={{ duration: 0.5 }}
          >
            <Logo style={{ transform: `scale(${scale})` }} />
          </motion.div>
          <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <Stitch showing={showStitch} />
          </div>
        </motion.div>
      </motion.div>
      <div className={Style.NumberPadWrapper}>
        <Contents />
      </div>
      <Ring />
    </div>
  );
}
