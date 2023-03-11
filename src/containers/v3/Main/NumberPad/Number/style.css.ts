import { style } from '@vanilla-extract/css';
import { rem } from 'polished';

export const NumberWrapper = style({
  fontSize: rem(30),
  fontWeight: 'bolder',
  cursor: 'pointer',
});
