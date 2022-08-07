import styled from '@emotion/styled';
import mq from '../../../styles/mq';

interface WrapperProps {
  isMyPokemon: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 95%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.isMyPokemon ? 'center' : 'flex-start')};
  margin-left: ${(props) => (props.isMyPokemon ? '5%' : 0)};
`;

export const Person = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: black;

  ${mq('lg')} {
    margin-left: 0px;
  }
`;
