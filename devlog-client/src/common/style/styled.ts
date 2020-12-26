import styled, { CreateStyled } from '@emotion/styled';

interface ThemeType {
  [color: string]: string;
}

export const theme: ThemeType = {
  BLACK: '#464646',
};

export default styled as CreateStyled;
