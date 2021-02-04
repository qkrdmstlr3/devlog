import styled from '../../../common/style/styled';

interface WrapperProps {
  isMyPokemon: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.isMyPokemon ? 'center' : 'flex-start')};
  margin-left: ${(props) => (props.isMyPokemon ? '10%' : 0)};
`;
