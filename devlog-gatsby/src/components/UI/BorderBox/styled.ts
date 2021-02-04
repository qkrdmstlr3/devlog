// Dependencies
import styled from '../../../common/style/styled';

interface WrapperProps {
  width: string;
  height: string;
}

export const OutWrapper = styled.div<WrapperProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  border: 5px solid black;
  border-bottom: 10px solid black;
  border-radius: 10px;
  z-index: 0;
  background-color: white;
`;

export const InnerWrapper = styled.div<WrapperProps>`
  width: calc(100% - 15px);
  height: calc(100% - 20px);
  padding: 10px;

  border: 5px solid black;
  border-top: 10px solid black;
  border-radius: 10px;
  font-size: 50px;
  font-family: neodgm, sans-serif;
  background-color: white;
`;

// 일단 사용 보류 스타일이 안 어울림
export const Corner = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  width: 30px;
  height: 30px;

  border: 3px solid black;
  border-radius: 15px;
  background-color: white;
  z-index: 100;
`;
