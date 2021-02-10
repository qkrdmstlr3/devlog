import styled, { CreateStyled } from '@emotion/styled';
import { MediaQueryType } from '../../components/types';

interface ThemeType {
  [color: string]: string;
}

export interface EmotionStyleType {
  theme?: ThemeType;
}

const breakpoint = {
  small: 420,
  medium: 700,
  large: 1024,
};

export const mq = (size: MediaQueryType): string => {
  const screenSize = breakpoint[size];

  return `@media (max-width: ${screenSize}px)`;
};

export const theme: ThemeType = {
  BLACK: '#000000',
  GRAY: '#666666',
  WHITE: '#FFFFFF',
};

export default styled as CreateStyled;
