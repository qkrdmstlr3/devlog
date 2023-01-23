import styled from '@emotion/styled';
import mq from '../../../../styles/v2/mq';

// Utils
import barColor from '../../../../utils/barColor';

interface HPStickBarProps {
  hp: number;
}

export const Name = styled.span`
  display: inline-block;
  text-align: right;
  font-family: 'NeoDunggeunmo', sans-serif;
  font-weight: bold;

  width: 300px;
  font-size: 2.5rem;

  ${mq('sm')} {
    width: 150px;
    font-size: 1.2rem;
  }
`;

export const HPWrapper = styled.div`
  position: relative;
  background-color: black;
  border-bottom-left-radius: 30px;

  width: 400px;
  height: 100px;

  ${mq('sm')} {
    height: 50px;
    width: 180px;
    border-bottom-left-radius: 15px;
  }
`;

export const HPWrapperInner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  border-bottom-left-radius: 30px;

  height: 90px;
  width: 370px;

  ${mq('sm')} {
    height: 45px;
    width: 160px;
    border-bottom-left-radius: 15px;
  }
`;

export const HPBar = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: black;

  width: 90%;
  height: 40px;

  ${mq('sm')} {
    top: 5px;
    right: 5px;
    height: 20px;
    width: 90%;
  }
`;

export const HPText = styled.span`
  display: inline-block;
  padding-left: 5px;
  color: #ecd482;
  font-weight: bold;
  font-family: 'NeoDunggeunmo', sans-serif;

  margin-top: 3px;
  font-size: 2.5rem;

  ${mq('sm')} {
    margin-top: 0;
    font-size: 1.4rem;
  }
`;

export const HPStick = styled.div`
  position: absolute;
  top: 0px;
  background-color: white;

  width: 250px;
  height: 30px;
  right: 20px;

  ${mq('sm')} {
    width: 100px;
    height: 14px;
    right: 5px;
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
