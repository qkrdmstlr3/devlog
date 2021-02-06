import styled from '../../../common/style/styled';

interface HPStickBarProps {
  hp: number;
}

export const Name = styled.span`
  display: inline-block;
  width: 450px;
  text-align: right;
  font-size: 50px;
  font-family: 'NeoDunggeunmo', sans-serif;
  font-weight: bold;
`;

export const HPWrapper = styled.div`
  position: relative;
  width: 600px;
  height: 120px;

  background-color: black;
  border-bottom-left-radius: 30px;
`;

export const HPWrapperInner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 570px;
  height: 110px;

  background-color: white;
  border-bottom-left-radius: 30px;
`;

export const HPBar = styled.div`
  position: absolute;
  width: 93%;
  height: 45px;
  top: 10px;
  right: 10px;

  background-color: black;
`;

export const HPText = styled.span`
  display: inline-block;
  margin-top: 4px;
  padding-left: 5px;

  color: #ecd482;
  font-size: 40px;
  font-weight: bold;
  font-family: 'NeoDunggeunmo', sans-serif;
`;

export const HPStick = styled.div`
  position: absolute;
  top: 0px;
  right: 25px;
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
