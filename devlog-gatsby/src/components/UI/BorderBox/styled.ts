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

  overflow: hidden;
  border: 3px solid black;
  border-bottom: 6px solid black;
  z-index: 0;
`;

export const InnerWrapper = styled.div<WrapperProps>`
  width: ${(props) => `calc(${props.width} - 15px)`};
  height: ${(props) => `calc(${props.height} - 15px)`};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;

  border: 3px solid black;
  border-top: 6px solid black;
  font-family: neodgm, sans-serif;
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
