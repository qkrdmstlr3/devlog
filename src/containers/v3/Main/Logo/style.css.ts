import { style } from '@vanilla-extract/css';
import { rem } from 'polished';

export const Wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Title = style({
  fontFamily: 'goudyo',
  fontWeight: 700,
  fontSize: rem(42),
});

export const City = style({
  fontFamily: 'goudyo',
  fontSize: rem(20),
  fontWeight: 'bold',
  letterSpacing: rem(1),
});
