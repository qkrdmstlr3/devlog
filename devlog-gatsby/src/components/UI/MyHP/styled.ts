import styled from '../../../common/style/styled';

interface HPStickBarProps {
  hp: number;
}

export const Name = styled.span`
  display: inline-block;
  margin-left: 160px;
  font-size: 50px;
  font-family: neodgm, sans-serif;
  font-weight: bold;
`;

export const HPWrapper = styled.div`
  position: relative;
  width: 600px;
  height: 160px;

  background-color: black;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
`;

export const HPCenter = styled.div`
  position: absolute;
  top: 45px;
  width: 570px;
  height: 105px;
  display: flex;
  justify-content: flex-end;
  padding: 15px 30px 0 0;

  background-color: white;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
  font-family: neodgm, sans-serif;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 12px;
  word-spacing: 20px;
`;

export const HPText = styled.span`
  position: relative;
  display: inline-block;
  padding: 4px 0 0 45px;

  color: #ecd482;
  font-size: 40px;
  font-weight: bold;
  font-family: neodgm, sans-serif;

  &::before {
    content: '';
    height: 45px;
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
  right: 50px;
  width: 400px;
  height: 35px;
  background-color: white;
`;

export const HPStickBar = styled.div<HPStickBarProps>`
  margin-top: 10px;
  width: ${(props) => props.hp}%;
  height: 15px;
  background-color: #2fe408;
`;
