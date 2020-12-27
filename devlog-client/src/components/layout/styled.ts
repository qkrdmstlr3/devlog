import styled, { EmotionStyleType } from '@Style/styled';

interface ItemProps extends EmotionStyleType {
  isPathMain: boolean;
}

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1.2fr 7.5fr 1.2fr;
  grid-template-rows: 2.5fr 4fr 1.25fr 1.25fr;
  grid-template-areas: 'header main main' 'list main main' 'blue bottomList introduce' 'blue bottomList yellow';
`;

export const Header = styled.div<ItemProps>`
  border-bottom: 7px solid black;
  grid-area: header;
  background-color: ${(props) =>
    props.isPathMain ? props.theme.WHITE : props.theme.RED};
`;

export const List = styled.div`
  border-top: 7px solid black;
  border-bottom: 10px solid black;
  grid-area: list;
`;

export const Main = styled.div<ItemProps>`
  border-left: 10px solid black;
  border-bottom: 10px solid black;
  grid-area: main;
  background-color: ${(props) =>
    props.isPathMain ? props.theme.RED : props.theme.WHITE};
`;

export const Blue = styled.div<EmotionStyleType>`
  grid-area: blue;
  background-color: ${(props) => props.theme.BLUE};
`;

export const BottomList = styled.div`
  border-left: 10px solid black;
  border-right: 7px solid black;
  grid-area: bottomList;
`;

export const Introduce = styled.div`
  border-bottom: 7px solid black;
  grid-area: introduce;
`;

export const Yellow = styled.div<EmotionStyleType>`
  grid-area: yellow;
  background-color: ${(props) => props.theme.YELLOW};
`;
