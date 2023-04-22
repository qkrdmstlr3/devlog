import { style } from '@vanilla-extract/css';
import { rem } from 'polished';

export const Wrapper = style({
  position: 'relative',
  width: rem(80),
  height: rem(36),
  cursor: 'pointer',
});

export const TopLeft = style({
  position: 'absolute',
  backgroundColor: 'rgb(18, 18, 18)',
  width: rem(15),
  height: rem(2),
  transform: 'rotateZ(50deg)',
  borderRadius: '3px',
});

export const TopRight = style({
  position: 'absolute',
  backgroundColor: 'rgb(18, 18, 18)',
  width: rem(15),
  height: rem(2),
  transform: 'rotateZ(-50deg)',
  borderRadius: '3px',
});

export const BottomLeft = style({
  position: 'absolute',
  backgroundColor: 'rgb(18, 18, 18)',
  width: rem(15),
  height: rem(2),
  transform: 'rotateZ(130deg)',
  borderRadius: '3px',
});

export const BottomRight = style({
  position: 'absolute',
  backgroundColor: 'rgb(18, 18, 18)',
  width: rem(15),
  height: rem(2),
  transform: 'rotateZ(-130deg)',
  borderRadius: '3px',
});

export const MenuItem = style({
  fontSize: rem(20),
  width: '100%',
  display: 'inline-block',
  textAlign: 'center',
  fontFamily: 'goudyo',
  cursor: 'pointer',
});
