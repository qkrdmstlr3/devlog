// Dependencies
import React from 'react';
import * as Style from './styled';

function MonsterBall() {
  return (
    <Style.BallWrapper>
      <Style.InnerWrapper>
        {[...Array(6)].map((_, index) => (
          <Style.Ball key={index}>
            <Style.RedPart />
            <Style.BlackPart>
              <Style.CenterPart />
            </Style.BlackPart>
          </Style.Ball>
        ))}
      </Style.InnerWrapper>
    </Style.BallWrapper>
  );
}

export default MonsterBall;
