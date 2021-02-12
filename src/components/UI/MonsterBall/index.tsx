// Dependencies
import React from 'react';
import * as Style from './styled';

function MyCharacter() {
  return (
    <Style.BallWrapper>
      <Style.InnerWrapper>
        {[...Array(6)].map(() => (
          <Style.Ball>
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

export default MyCharacter;
