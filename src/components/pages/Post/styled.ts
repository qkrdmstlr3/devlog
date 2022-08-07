import styled from '@emotion/styled';
import mq from '../../../styles/mq';

export const Wrapper = styled.article`
  margin: 0 auto;
  margin-bottom: 30px;
  max-width: 750px;
  height: 100%;
  padding-bottom: 70px;
  font-family: 'NeoDunggeunmo', sans-serif;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 40px;
  padding: 10px 0;
  border-bottom: 1.5px solid black;
`;

export const Date = styled.span`
  font-size: 1.2rem;
  padding-left: 20px;

  ${mq('sm')} {
    font-size: 1rem;
    padding-left: 10px;
  }
`;

export const Category = styled.span`
  font-size: 2rem;

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
    font-family: 'NeoDunggeunmo', sans-serif;
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
