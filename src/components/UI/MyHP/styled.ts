import styled, { mq } from '../../../common/style/styled';
import { SizeEnum } from '../../types';

interface HPStickBarProps {
  hp: number;
}

export const Name = styled.span`
  display: inline-block;
  margin-left: 160px;
  font-size: 50px;
  font-family: 'NeoDunggeunmo', sans-serif;
  font-weight: bold;

  ${mq(SizeEnum.small)} {
    font-size: 1.2rem;
    margin-left: 50px;
  }
`;

export const HPWrapper = styled.div`
  position: relative;
  width: 600px;
  height: 160px;

  background-color: black;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;

  ${mq(SizeEnum.small)} {
    height: 60px;
    width: 180px;

    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
  }
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
  font-family: 'NeoDunggeunmo', sans-serif;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 12px;
  word-spacing: 20px;

  ${mq(SizeEnum.small)} {
    top: 20px;
    height: 35px;
    width: 160px;
    padding: 5px 10px 0 0;

    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    font-size: 1.2rem;
    letter-spacing: 5px;
    word-spacing: 5px;
  }
`;

export const HPText = styled.span`
  position: relative;
  display: inline-block;
  padding: 4px 0 0 45px;

  color: #ecd482;
  font-size: 40px;
  font-weight: bold;
  font-family: 'NeoDunggeunmo', sans-serif;

  ${mq(SizeEnum.small)} {
    font-size: 1.4rem;
    padding: 0 0 0 25px;
  }

  &::before {
    content: '';
    height: 45px;
    width: 40px;
    position: absolute;
    left: 0px;
    top: 0px;
    background-color: white;

    ${mq(SizeEnum.small)} {
      width: 20px;
    }
  }
`;

export const HPStick = styled.div`
  position: absolute;
  top: 0px;
  right: 50px;
  width: 400px;
  height: 35px;
  background-color: white;

  ${mq(SizeEnum.small)} {
    width: 100px;
    height: 14px;
    right: 20px;
  }
`;

export const HPStickBar = styled.div<HPStickBarProps>`
  margin-top: 10px;
  width: ${(props) => props.hp}%;
  height: 15px;
  background-color: #2fe408;

  ${mq(SizeEnum.small)} {
    margin-top: 4px;
    height: 7px;
  }
`;
