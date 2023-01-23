import styled from '@emotion/styled';
import mq from '../../../../styles/mq';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 35%;
`;

export const NavContainer = styled.div`
  position: absolute;
  width: 52%;
  right: 0;
  top: 0;
  height: 100%;
  background-color: white;
  padding-left: 2%;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  padding: 25px;
  ${mq('sm')} {
    padding: 3px;
  }
`;

export const NavItem = styled.h2`
  position: relative;
  display: inline-block;
  width: 40%;
  font-family: 'NeoDunggeunmo', sans-serif;
  font-size: 38px;
  cursor: pointer;
  ${mq('sm')} {
    font-size: 1rem;
  }
`;

export const Select = styled.span`
  position: absolute;
  margin-right: 15px;
  left: -38px;
`;
