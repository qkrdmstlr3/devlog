// Dependencies
import styled from '../common/style/styled';

export const Layout = styled.main`
  position: relative;
  max-width: 1000px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 30px;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  opacity: 0.8;
  font-family: neodgm, sans-serif;
`;

export const Copyright = styled.span``;

export const Information = styled.div``;

export const Github = styled.a`
  text-decoration: underline;
`;
