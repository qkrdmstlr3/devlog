import styled from '../../../common/style/styled';

export const BallWrapper = styled.div`
  width: 400px;
  height: 100px;
  position: relative;

  background-color: black;
  border-bottom-right-radius: 30px;
`;

export const InnerWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 30px;
  height: 90px;
  width: 370px;

  border-bottom-right-radius: 30px;
  background-color: white;
  display: flex;
  align-items: center;
`;

export const Ball = styled.div`
  overflow: hidden;
  width: 40px;
  height: 40px;
  margin: 0 9px;

  border: 3px solid black;
  border-radius: 20px;
`;

export const RedPart = styled.div`
  width: 100%;
  height: 45%;
  background-color: red;
`;

export const BlackPart = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;
`;

export const CenterPart = styled.div`
  width: 12px;
  height: 12px;

  border: 3px solid black;
  border-radius: 6px;
  background-color: white;
`;
