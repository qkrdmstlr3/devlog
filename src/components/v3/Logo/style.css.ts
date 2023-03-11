import { style } from '@vanilla-extract/css';
import { rem } from 'polished';

export const Wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  cursor: 'pointer',
  transition: 'transform .5s linear',
});

export const Logo = style({
  fontFamily: 'goudyo',
  fontSize: rem(30),
  fontWeight: 'bold',
  letterSpacing: rem(0.1),
});

export const Location = style({
  fontFamily: 'goudyo',
  fontWeight: 'bold',
  letterSpacing: rem(5),
});
