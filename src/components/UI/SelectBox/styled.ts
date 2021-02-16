import styled, { mq } from '../../../common/style/styled';
import { SizeEnum } from '../../types';

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

  ${mq(SizeEnum.small)} {
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
  font-size: 60px;
  cursor: pointer;

  ${mq(SizeEnum.small)} {
    font-size: 1rem;
  }
`;
