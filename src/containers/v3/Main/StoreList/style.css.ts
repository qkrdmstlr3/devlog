import { style } from '@vanilla-extract/css';
import { rem } from 'polished';

export const List = style({
  position: 'absolute',
  top: 'calc(40% + 200px)',
  left: '50%',
  width: rem(320),
  padding: rem(10),
  transform: 'translateX(-50%)',
});

export const Item = style({
  paddingBottom: rem(30),
});

export const ItemTop = style({
  display: 'flex',
  fontWeight: 500,
  justifyContent: 'space-between',
});

export const ItemBottom = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const Name = style({
  width: '30%',
});

export const Book = style({
  width: '90%',
  whiteSpace: 'pre-wrap',
  textAlign: 'right',
});
