import styled, { EmotionStyleType } from '@Style/styled';

export const Header = styled.header`
  width: 825px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
  padding-top: 20px;
  width: 825px;
  margin: 0 auto;
  height: calc(100% - 62px);
`;
