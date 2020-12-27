import styled, { CreateStyled } from '@emotion/styled';

interface ThemeType {
  [color: string]: string;
}

export interface EmotionStyleType {
  theme?: ThemeType;
}

export const theme: ThemeType = {
  BLACK: '#000000',
  GRAY: '#666666',
  RED: '#F40604',
  BLUE: '#112576',
  YELLOW: '#F4E121',
  WHITE: '#FFFFFF',
};

export default styled as CreateStyled;
