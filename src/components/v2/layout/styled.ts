import styled from '@emotion/styled';

export const Layout = styled.main`
  position: relative;
  max-width: 850px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 30px 25px 50px 25px;
  overflow: scroll;
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
`;

export const Copyright = styled.span`
  font-size: 13px;
`;

export const Information = styled.div``;

export const Github = styled.a`
  text-decoration: underline;
`;
