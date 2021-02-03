import styled from '../../common/style/styled';

interface HPStickBarProps {
  hp: number;
}

export const Name = styled.span`
  display: inline-block;
  width: 350px;
  text-align: right;
  font-size: 40px;
  font-family: neodgn;
  font-weight: bold;
`;

export const HPWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 60px;

  background-color: black;
  border-bottom-left-radius: 10px;
`;

export const HPWrapperInner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 380px;
  height: 50px;

  background-color: white;
  border-bottom-left-radius: 10px;
`;

export const HPBar = styled.div`
  position: absolute;
  width: 90%;
  height: 30px;
  right: 10px;

  background-color: black;
`;

export const HPText = styled.span`
  display: inline-block;
  margin-top: 4px;

  color: #ecd482;
  font-size: 22px;
  font-weight: bold;
  font-family: neodgn;
`;

export const HPStick = styled.div`
  position: absolute;
  top: 0px;
  right: 20px;
  width: 275px;
  height: 20px;
  background-color: white;
`;

export const HPStickBar = styled.div<HPStickBarProps>`
  margin-top: 4px;
  width: ${(props) => props.hp}%;
  height: 10px;
  background-color: #2fe408;
`;
