import styled, { mq } from '../../../common/style/styled';
import { SizeEnum } from '../../types';

export const Wrapper = styled.article`
  margin: 0 auto;
  max-width: 800px;
  height: 100%;
  padding-bottom: 70px;

  font-family: 'NeoDunggeunmo', sans-serif;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  padding: 30px 0 10px 0;
  border-bottom: 1.5px solid black;

  ${mq(SizeEnum.small)} {
    font-size: 1.7rem;
    padding: 18px 0 10px 0;
  }
`;

export const Date = styled.span`
  font-size: 1.2rem;
  padding-left: 20px;

  ${mq(SizeEnum.small)} {
    font-size: 0.7rem;
    padding-left: 10px;
  }
`;

export const Category = styled.span`
  font-size: 2rem;

  ${mq(SizeEnum.small)} {
    font-size: 1rem;
  }
`;

export const Back = styled.button`
  background-color: transparent;
  border: none;
  font-family: 'NeoDunggeunmo', sans-serif;
  font-size: 1.5rem;

  ${mq(SizeEnum.small)} {
    font-size: 1rem;
    padding: 0;
  }
`;

export const WysiwygStyle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
`;
