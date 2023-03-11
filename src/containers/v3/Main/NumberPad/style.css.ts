import { style } from '@vanilla-extract/css';
import { rem } from 'polished';

export const Wrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: rem(5),
});
