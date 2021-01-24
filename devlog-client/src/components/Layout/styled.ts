import styled, { EmotionStyleType } from '@Style/styled';

interface ItemProps extends EmotionStyleType {
  isPathMain: boolean;
}

interface ContainerProps {
  isPostPage: boolean;
}

const POST_PAGE = '2.5fr 4fr 0.7fr 0.7fr';
const NOT_POST_PAGE = '2.5fr 4fr 1.25fr 1.25fr';

export const Container = styled.div<ContainerProps>`
  height: 100vh;
  display: grid;
  grid-template-columns: 1.2fr 7.5fr 1.2fr;
  grid-template-rows: ${(props) =>
    props.isPostPage ? POST_PAGE : NOT_POST_PAGE};
  grid-template-areas: 'header main main' 'list main main' 'blue bottomList introduce' 'blue bottomList yellow';
`;

export const Header = styled.div<ItemProps>`
  border-bottom: 7px solid black;
  grid-area: header;
  background-color: ${(props) =>
    props.isPathMain ? props.theme.WHITE : props.theme.RED};
`;

export const LeftList = styled.nav`
  border-top: 7px solid black;
  border-bottom: 10px solid black;
  grid-area: list;
`;

export const Main = styled.main<ItemProps>`
  border-left: 10px solid black;
  border-bottom: 10px solid black;
  grid-area: main;
  overflow-y: scroll;
  background-color: ${(props) =>
    props.isPathMain ? props.theme.RED : props.theme.WHITE};
`;

export const Blue = styled.div<EmotionStyleType>`
  grid-area: blue;
  background-color: ${(props) => props.theme.BLUE};
`;

export const BottomList = styled.div<ItemProps>`
  color: ${(props) => (props.isPathMain ? 'white' : 'black')};
  border-left: 10px solid black;
  border-right: 7px solid black;
  grid-area: bottomList;
  pointer-events: ${(props) => (props.isPathMain ? 'none' : 'auto')};
`;

export const Introduce = styled.div`
  border-bottom: 7px solid black;
  grid-area: introduce;
  padding: 10px;
`;

export const IntroduceLink = styled.a<ItemProps>`
  display: ${(props) => (props.isPathMain ? 'block' : 'none')};
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Yellow = styled.div<EmotionStyleType>`
  grid-area: yellow;
  background-color: ${(props) => props.theme.YELLOW};
`;
