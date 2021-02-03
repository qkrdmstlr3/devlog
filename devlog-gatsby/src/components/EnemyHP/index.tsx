import React from 'react';
import * as Style from './styled';

interface EnemyHPProps {
  /** 포켓몬 체력 퍼센트 */
  hp: number;
}

function EnemyHP({ hp }: EnemyHPProps) {
  return (
    <Style.HPWrapper>
      <Style.HPWrapperInner>
        <Style.HPBar>
          <Style.HPText>HP :</Style.HPText>
          <Style.HPStick>
            <Style.HPStickBar hp={hp} />
          </Style.HPStick>
        </Style.HPBar>
      </Style.HPWrapperInner>
    </Style.HPWrapper>
  );
}

export default EnemyHP;
