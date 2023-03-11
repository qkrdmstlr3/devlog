import { style } from '@vanilla-extract/css';
import { rem } from 'polished';

export const Wrapper = style({
  position: 'relative',
  width: rem(80),
  height: rem(36),
});

export const TopLeft = style({
  backgroundColor: 'rgb(18, 18, 18)',
  width: rem(15),
  height: rem(2),
  transform: 'rotateZ(50deg)',
  borderRadius: '3px',
});

export const TopRight = style({
  backgroundColor: 'rgb(18, 18, 18)',
  width: rem(15),
  height: rem(2),
  transform: 'rotateZ(-50deg)',
  borderRadius: '3px',
});

export const BottomLeft = style({
  backgroundColor: 'rgb(18, 18, 18)',
  width: rem(15),
  height: rem(2),
  transform: 'rotateZ(130deg)',
  borderRadius: '3px',
});

export const BottomRight = style({
  backgroundColor: 'rgb(18, 18, 18)',
  width: rem(15),
  height: rem(2),
  transform: 'rotateZ(-130deg)',
  borderRadius: '3px',
});
