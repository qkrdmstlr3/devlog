import styled from '@emotion/styled';
import mq from '../../../../styles/v2/mq';

export const Wrapper = styled.article`
  margin: 0 auto;
  margin-bottom: 30px;
  height: 100%;
  padding-bottom: 70px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;

export const Date = styled.span`
  font-size: 1.2rem;
  padding-left: 10px;
  opacity: 0.8;

  ${mq('sm')} {
    font-size: 1rem;
    padding-left: 10px;
  }
`;

export const Category = styled.span`
  font-size: 1.5rem;
  opacity: 0.8;

  ${mq('sm')} {
    font-size: 1.6rem;
  }
`;

export const Back = styled.button`
  background-color: transparent;
  border: none;
  font-family: 'NeoDunggeunmo', sans-serif;
  font-size: 1.5rem;
  padding: 0;

  ${mq('sm')} {
    font-size: 1.3rem;
  }
`;

export const WysiwygStyle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 22px !important;
  }

  h2 {
    font-size: 26px;
  }

  h3 {
    font-size: 22px;
  }

  h4 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
    line-height: 30px;
  }

  img {
    display: block;
    margin: 0 auto !important;
  }

  pre {
    font-size: 15px;
  }
`;
