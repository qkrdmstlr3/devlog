import styled from '../../../common/style/styled';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 35%;
`;

export const Nav = styled.nav`
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  padding: 20px;
`;

export const NavContainer = styled.div`
  position: absolute;
  width: 50%;
  right: 0;
  top: 0;
  height: 100%;
`;

export const NavItem = styled.h2`
  display: inline-block;
  width: 50%;

  font-family: neodgm, sans-serif;
  font-size: 60px;
  cursor: pointer;
`;
