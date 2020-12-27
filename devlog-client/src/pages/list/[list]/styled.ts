import styled, { EmotionStyleType } from '@Style/styled';

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 15px;
`;

export const Title = styled.h1<EmotionStyleType>`
  font-size: 2rem;
  font-weight: bold;
  text-align: right;
`;

export const Date = styled.span`
  font-size: 1.2rem;
`;

export const ContentContainer = styled.div`
  height: calc(100% - 62px);
  padding: 0 30px;
  overflow-y: scroll;
`;
