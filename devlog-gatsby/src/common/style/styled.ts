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
  WHITE: '#FFFFFF',
};

export const StyleWrapper = styled.div`
  .description {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export default styled as CreateStyled;
