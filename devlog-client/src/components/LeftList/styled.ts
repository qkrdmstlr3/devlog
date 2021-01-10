import styled, { EmotionStyleType } from '@Style/styled';

interface ItemProps extends EmotionStyleType {
  isSelected: boolean;
}

export const List = styled.ul`
  padding: 10px;
`;

export const Item = styled.li<ItemProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 10px 0;

  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => props.theme.BLACK};

  span {
    font-size: 1rem;
  }
`;

export const HomeItem = styled.li<ItemProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => props.theme.BLACK};

  span {
    font-size: 1rem;
  }
`;
