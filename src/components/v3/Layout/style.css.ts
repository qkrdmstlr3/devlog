import { style } from '@vanilla-extract/css';
import { rem } from 'polished';

export const Container = style({
  maxWidth: rem(550),
  margin: '0 auto',
  minHeight: '100vh',
  backgroundColor: 'white',
});
