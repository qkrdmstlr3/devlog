import styled from '@emotion/styled';
import { SizeEnum } from '../types';
import mq from '../../../styles/mq';

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
  ${mq('sm')} {
    padding: 3px;
  }
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

export const NavItem = styled.h2`
  display: inline-block;
  width: 50%;
  font-family: 'NeoDunggeunmo', sans-serif;
  font-size: 40px;
  cursor: pointer;
  ${mq('sm')} {
    font-size: 1rem;
  }
`;
