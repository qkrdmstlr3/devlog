import { style } from '@vanilla-extract/css';
import { rem } from 'polished';

export const Wrapper = style({});

export const StitchWrapper = style({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  top: '3.18%',
  height: '60px',
});

export const ListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  maxWidth: rem(500),
  margin: '0 auto',
});

export const ListItem = style({
  cursor: 'pointer',

  selectors: {
    [`${ListContainer} &`]: {
      marginBottom: rem(50),
    },
  },
});

export const ItemHeader = style({
  display: 'flex',
  alignItems: 'flex-end',
});

export const Title = style({
  fontSize: rem(25),
  fontWeight: 600,
});

export const Summary = style({
  opacity: 0.8,
});
