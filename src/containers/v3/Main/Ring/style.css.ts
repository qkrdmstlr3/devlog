import { style } from '@vanilla-extract/css';
import { rem } from 'polished';
import { RING_WIDTH } from '../../../../constants';

export const RingWrapper = style({
  position: 'absolute',
});

export const Ring = style({
  width: rem(RING_WIDTH),
  height: rem(RING_WIDTH),
  borderRadius: rem(20),
  backgroundColor: 'transparent',
  border: '3px solid black',
});
