import styled from '../../../common/style/styled';

interface WrapperProps {
  isMyPokemon: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.isMyPokemon ? 'center' : 'flex-start')};
`;
