/* eslint-disable no-nested-ternary */
import { motion } from 'framer-motion';
import { match } from 'ts-pattern';
import { useState } from 'react';
import { rem } from 'polished';
import * as Style from './style.css';
import * as Route from '../../../route';

interface StitchProps {
  showing?: boolean;
}

const ROUTE_MENU_MAPPING = {
  Book: Route.bookPageRoute,
  Blog: Route.blogPageRoute,
  Me: Route.mePageRoute,
  Empty: Route.emtyPageRoute,
} as const;

export function Stitch({ showing }: StitchProps) {
  const currentRoute = window.location.pathname;
  const [menuOpened, setMenuOpened] = useState(false);

  const animate = match({ showing, menuOpened })
    .with({ showing: true, menuOpened: true }, () => 'menu')
    .with({ showing: true }, () => 'show')
    .otherwise(() => 'hide');

  const selectMenu = () => {
    setMenuOpened(false);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={Style.Wrapper} onClick={() => setMenuOpened(true)}>
      <motion.div
        initial="hide"
        animate={animate}
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
            rotateZ: 50,
          },
          menu: {
            width: rem(50),
            top: '25px',
            rotateZ: 0,
            opacity: 1,
            left: -100,
          },
        }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className={Style.TopLeft}
      >
        <motion.span
          initial="hide"
          animate={menuOpened ? (currentRoute === ROUTE_MENU_MAPPING.Book ? 'selected' : 'show') : 'hide'}
          variants={{
            show: { opacity: 1, translateY: 0 },
            hide: { opacity: 0, translateY: -11 },
            selected: { opacity: 1, translateY: -22 },
          }}
          transition={{ delay: 1 }}
          className={Style.MenuItem}
          onClick={() => selectMenu()}
        >
          Book
        </motion.span>
      </motion.div>
      <motion.div
        initial="hide"
        animate={animate}
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
            rotateZ: -50,
          },
          menu: {
            width: rem(50),
            top: '25px',
            rotateZ: 0,
            opacity: 1,
            right: -100,
          },
        }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className={Style.TopRight}
      >
        <motion.span
          initial="hide"
          animate={menuOpened ? (currentRoute === ROUTE_MENU_MAPPING.Me ? 'selected' : 'show') : 'hide'}
          variants={{
            show: { opacity: 1, translateY: 0 },
            hide: { opacity: 0, translateY: -11 },
            selected: { opacity: 1, translateY: -22 },
          }}
          transition={{ delay: 1 }}
          className={Style.MenuItem}
          onClick={() => selectMenu()}
        >
          Me
        </motion.span>
      </motion.div>
      <motion.div
        initial="hide"
        animate={animate}
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
            rotateZ: 130,
          },
          menu: {
            width: rem(50),
            top: '25px',
            rotateZ: 0,
            opacity: 1,
            left: -25,
          },
        }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className={Style.BottomLeft}
      >
        <motion.span
          initial="hide"
          animate={menuOpened ? (currentRoute === ROUTE_MENU_MAPPING.Blog ? 'selected' : 'show') : 'hide'}
          variants={{
            show: { opacity: 1, translateY: 0 },
            hide: { opacity: 0, translateY: -11 },
            selected: { opacity: 1, translateY: -22 },
          }}
          transition={{ delay: 1 }}
          className={Style.MenuItem}
          onClick={() => selectMenu()}
        >
          Blog
        </motion.span>
      </motion.div>
      <motion.div
        initial="hide"
        animate={animate}
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
            rotateZ: -130,
          },
          menu: {
            width: rem(50),
            top: '25px',
            rotateZ: 0,
            opacity: 1,
            right: -25,
          },
        }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className={Style.BottomRight}
      >
        <motion.span
          initial="hide"
          animate={menuOpened ? (currentRoute === ROUTE_MENU_MAPPING.Empty ? 'selected' : 'show') : 'hide'}
          variants={{
            show: { opacity: 1, translateY: 0 },
            hide: { opacity: 0, translateY: -11 },
            selected: { opacity: 1, translateY: -22 },
          }}
          transition={{ delay: 1 }}
          className={Style.MenuItem}
          onClick={() => selectMenu()}
        >
          Empty
        </motion.span>
      </motion.div>
    </div>
  );
}
