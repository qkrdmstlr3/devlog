import styled from '../../../common/style/styled';

// Utils
import barColor from '../../../utils/barColor';

interface HPBarProps {
  hp: number;
}

export const PokemonWrapper = styled.div``;

export const Wrapper = styled.ul`
  position: absolute;
  top: 30px;
  bottom: 50px;
  left: 25px;
  right: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Select = styled.span`
  font-size: 3rem;
`;

export const Pokemon = styled.li`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;

  font-family: 'NeoDunggeunmo', sans-serif;
  font-size: 2rem;
  cursor: pointer;
`;

export const LeftWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const IconWrapper = styled.div`
  width: 80px;
  margin-right: 20px;
`;

export const HPWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

export const HPNumber = styled.span`
  display: block;
  width: 100%;
  text-align: center;
`;

export const HPBar = styled.div<HPBarProps>`
  width: ${(props) => props.hp}%;
  height: 20px;
  background-color: ${(props) => barColor(props.hp)};
  border-radius: 5px;
`;

export const SelectWrapper = styled.div`
  position: absolute;
  width: 50%;
  height: 35%;
  right: 0;
  bottom: 0;
  padding-left: 2%;
  background-color: white;
`;

export const SelectList = styled.ul``;

export const SelectMenu = styled.li`
  margin-bottom: 20px;
  cursor: pointer;
`;
