import styled, { EmotionStyleType } from '@Style/styled';

interface ItemProps extends EmotionStyleType {
  isSelected: boolean;
}

export const List = styled.ul`
  padding: 10px 35px;
  color: inherit;
`;

export const Item = styled.li<ItemProps>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 10px 0;

  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  color: inherit;

  span {
    font-size: 1rem;
  }
`;

export const BoxIcon = styled.div`
  position: absolute;
  left: -25px;
`;
