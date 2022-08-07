import styled from '@emotion/styled';
import { SizeEnum } from '../types';
import mq from '../../../styles/mq';

// Utils
import barColor from '../../../utils/barColor';

interface HPStickBarProps {
  hp: number;
}

export const Name = styled.span`
  display: inline-block;
  font-family: 'NeoDunggeunmo', sans-serif;
  font-weight: bold;

  margin-left: 130px;
  font-size: 2.5rem;

  ${mq('sm')} {
    font-size: 1.2rem;
    margin-left: 50px;
  }
`;

export const HPWrapper = styled.div`
  position: relative;
  background-color: black;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;

  width: 400px;
  height: 120px;

  ${mq('sm')} {
    height: 60px;
    width: 180px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
  }
`;

export const HPCenter = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  padding: 15px 30px 0 0;
  background-color: white;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
  font-family: 'NeoDunggeunmo', sans-serif;
  font-weight: bold;
  letter-spacing: 12px;
  word-spacing: 20px;

  top: 40px;
  width: 370px;
  height: 70px;
  font-size: 2.5rem;

  ${mq('sm')} {
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
  color: #ecd482;
  font-weight: bold;
  font-family: 'NeoDunggeunmo', sans-serif;

  font-size: 2.5rem;
  padding: 0 0 0 40px;

  ${mq('sm')} {
    font-size: 1.4rem;
    padding: 0 0 0 25px;
  }
  &::before {
    content: '';
    height: 45px;
    position: absolute;
    left: 0px;
    top: 0px;
    background-color: white;
    width: 32px;

    ${mq('sm')} {
      width: 20px;
    }
  }
`;

export const HPStick = styled.div`
  position: absolute;
  top: 0px;
  background-color: white;

  width: 250px;
  height: 30px;
  right: 40px;

  ${mq('sm')} {
    width: 100px;
    height: 14px;
    right: 20px;
  }
`;

export const HPStickBar = styled.div<HPStickBarProps>`
  margin-top: 10px;
  width: ${(props) => props.hp}%;
  height: 15px;
  transition: width 1s ease-in;
  background-color: ${(props) => barColor(props.hp)};
  ${mq('sm')} {
    margin-top: 4px;
    height: 7px;
  }
`;
