import React from 'react';
import styled, { EmotionStyleType } from '@Style/styled';

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1.2fr 7.5fr 1.2fr;
  grid-template-rows: 2.5fr 4fr 1.25fr 1.25fr;
  grid-template-areas: 'header main main' 'list main main' 'blue bottomList introduce' 'blue bottomList yellow';
`;

const Header = styled.header`
  border-bottom: 7px solid black;
  grid-area: header;
`;
const List = styled.ul`
  border-top: 7px solid black;
  border-bottom: 10px solid black;
  grid-area: list;
`;
const Main = styled.div<EmotionStyleType>`
  border-left: 10px solid black;
  border-bottom: 10px solid black;
  grid-area: main;
  background-color: ${(props) => props.theme.RED};
`;
const Blue = styled.div<EmotionStyleType>`
  grid-area: blue;
  background-color: ${(props) => props.theme.BLUE};
`;
const BottomList = styled.div`
  border-left: 10px solid black;
  border-right: 7px solid black;
  grid-area: bottomList;
`;
const Introduce = styled.div`
  border-bottom: 7px solid black;
  grid-area: introduce;
`;
const Yellow = styled.div<EmotionStyleType>`
  grid-area: yellow;
  background-color: ${(props) => props.theme.YELLOW};
`;

function Layout({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement {
  return (
    <Container>
      <Header />
      <List />
      <Main />
      <Blue />
      <BottomList />
      <Introduce />
      <Yellow />
    </Container>
  );
}

export default Layout;
