import { motion } from 'framer-motion';
import { useCity } from '../../../../contexts/CityContext';
import * as Style from './style.css';

export function Logo() {
  const { city } = useCity();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.5, duration: 1.5 }}
      className={Style.Wrapper}
    >
      <div className={Style.Title}>Maison Shellboy</div>
      {city ? (
        <motion.div className={Style.City} initial={{ translateY: -100 }} animate={{ translateY: 0 }}>
          {city}
        </motion.div>
      ) : (
        <div className={Style.City} style={{ opacity: 0 }}>
          empty
        </div>
      )}
    </motion.div>
  );
}
