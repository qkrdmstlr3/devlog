import React from 'react';
import * as Style from './styled';

interface EnemyHPProps {
  /** 포켓몬 체력 퍼센트 */
  hp: number;
  /** 포켓몬 이름 */
  name: string;
}

function EnemyHP({ hp, name }: EnemyHPProps) {
  return (
    <div>
      <Style.Name>{name}</Style.Name>
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
    </div>
  );
}

export default EnemyHP;
