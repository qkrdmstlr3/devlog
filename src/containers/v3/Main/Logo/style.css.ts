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
  fontWeight: 500,
  fontSize: '42px',
});

export const City = style({
  fontFamily: 'goudyo',
  fontSize: rem(20),
  fontWeight: 500,
  letterSpacing: rem(1),
});
