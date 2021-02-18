import styled, { mq } from '../../../common/style/styled';
import { SizeEnum } from '../../types';

// Utils
import barColor from '../../../utils/barColor';

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

  ${mq(SizeEnum.small)} {
    width: 150px;
    font-size: 1.2rem;
  }
`;

export const HPWrapper = styled.div`
  position: relative;
  width: 600px;
  height: 120px;

  background-color: black;
  border-bottom-left-radius: 30px;

  ${mq(SizeEnum.small)} {
    height: 50px;
    width: 180px;

    border-bottom-left-radius: 15px;
  }
`;

export const HPWrapperInner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 570px;
  height: 110px;

  background-color: white;
  border-bottom-left-radius: 30px;

  ${mq(SizeEnum.small)} {
    height: 45px;
    width: 160px;

    border-bottom-left-radius: 15px;
  }
`;

export const HPBar = styled.div`
  position: absolute;
  width: 93%;
  height: 45px;
  top: 10px;
  right: 10px;

  background-color: black;
  ${mq(SizeEnum.small)} {
    top: 5px;
    right: 5px;
    height: 20px;
    width: 90%;
  }
`;

export const HPText = styled.span`
  display: inline-block;
  margin-top: 4px;
  padding-left: 5px;

  color: #ecd482;
  font-size: 40px;
  font-weight: bold;
  font-family: 'NeoDunggeunmo', sans-serif;
  ${mq(SizeEnum.small)} {
    margin-top: 0;
    font-size: 1.4rem;
  }
`;

export const HPStick = styled.div`
  position: absolute;
  top: 0px;
  right: 25px;
  width: 400px;
  height: 35px;
  background-color: white;
  ${mq(SizeEnum.small)} {
    width: 100px;
    height: 14px;
    right: 5px;
  }
`;

export const HPStickBar = styled.div<HPStickBarProps>`
  margin-top: 10px;
  width: ${(props) => props.hp}%;
  height: 15px;
  background-color: ${(props) => barColor(props.hp)};

  ${mq(SizeEnum.small)} {
    margin-top: 4px;
    height: 7px;
  }
`;
