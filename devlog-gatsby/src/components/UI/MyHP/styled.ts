import styled from '../../../common/style/styled';

interface HPStickBarProps {
  hp: number;
}

export const Name = styled.span`
  display: inline-block;
  margin-left: 100px;
  font-size: 40px;
  font-family: neodgn;
  font-weight: bold;
`;

export const HPWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 80px;

  background-color: black;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
`;

export const HPCenter = styled.div`
  position: absolute;
  top: 30px;
  width: 380px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;

  background-color: white;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  font-family: neodgn;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 12px;
`;

export const HPText = styled.span`
  position: relative;
  display: inline-block;
  padding: 4px 0 0 45px;

  color: #ecd482;
  font-size: 22px;
  font-weight: bold;
  font-family: neodgn;

  &::before {
    content: '';
    height: 30px;
    width: 40px;
    position: absolute;
    left: 0px;
    top: 0px;
    background-color: white;
  }
`;

export const HPStick = styled.div`
  position: absolute;
  top: 0px;
  right: 30px;
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
