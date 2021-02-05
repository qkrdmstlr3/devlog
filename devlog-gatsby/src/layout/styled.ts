// Dependencies
import styled from '../common/style/styled';

export const Layout = styled.main`
  position: relative;
  max-width: 1250px;
  height: 100vh;
  margin: 0 auto;
  padding: 30px 25px 50px 25px;
  background-color: white;
`;

export const Footer = styled.footer`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  width: 95%;
  display: flex;
  justify-content: space-between;

  opacity: 0.8;
  font-size: 1.2rem;
  font-family: neodgm, sans-serif;
`;

export const Copyright = styled.span``;

export const Information = styled.div``;

export const Github = styled.a`
  text-decoration: underline;
`;
