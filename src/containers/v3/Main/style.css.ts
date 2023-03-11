import { style } from '@vanilla-extract/css';
import { rem } from 'polished';

export const Wrapper = style({
  position: 'relative',
  height: '100vh',
});

export const NumberPadWrapper = style({
  top: '30%',
  left: '50%',
  width: rem(320),
  maxWidth: rem(320),
  boxSizing: 'border-box',
  padding: '0 20px',
  position: 'absolute',
  transform: 'translateX(-50%)',
});
