import styled from '../../../common/style/styled';

export const Wrapper = styled.article`
  margin: 0 auto;
  max-width: 850px;

  font-size: 3rem;
  font-family: 'NeoDunggeunmo', sans-serif;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  padding: 30px 0 10px 0;
`;

export const Date = styled.span`
  font-size: 1.2rem;
  padding-left: 20px;
`;

export const Category = styled.span`
  font-size: 2rem;
`;

export const Back = styled.button`
  background-color: transparent;
  border: none;
  font-family: 'NeoDunggeunmo', sans-serif;
  font-size: 1.5rem;
`;

export const WysiwygStyle = styled.div`
  p {
    font-size: 1.2rem !important;
  }
`;
