import { style } from '@vanilla-extract/css';
import { rem } from 'polished';

export const Wrapper = style({
  width: '100%',
  display: 'flex',
  paddingLeft: rem(15),
  justifyContent: 'space-between',
});
