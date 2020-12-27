import styled, { CreateStyled } from '@emotion/styled';

interface ThemeType {
  [color: string]: string;
}

export interface EmotionStyleType {
  theme?: ThemeType;
}

export const theme: ThemeType = {
  BLACK: '#464646',
  RED: '#F40604',
  BLUE: '#112576',
  YELLOW: '#F4E121',
};

export default styled as CreateStyled;
