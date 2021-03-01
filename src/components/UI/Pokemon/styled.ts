import { keyframes } from '@emotion/react';
import styled, { mq } from '../../../common/style/styled';
import { SizeEnum } from '../../types';

interface WrapperProps {
  isMyPokemon: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 90%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.isMyPokemon ? 'center' : 'flex-start')};
  margin-left: ${(props) => (props.isMyPokemon ? '10%' : 0)};
`;

export const Person = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: black;
  margin-left: 120px;

  ${mq(SizeEnum.large)} {
    margin-left: 0px;
  }
`;
