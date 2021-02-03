import React from 'react';
import * as Style from './styled';

interface MyHPProps {
  /** 포켓몬 체력 퍼센트 */
  hp: number;
  /** 포켓몬 마나량 */
  mp: number;
}

function MyHP({ hp, mp }: MyHPProps) {
  return (
    <Style.HPWrapper>
      <Style.HPText>HP :</Style.HPText>
      <Style.HPCenter>
        {mp} / {mp}
      </Style.HPCenter>
      <Style.HPStick>
        <Style.HPStickBar hp={hp} />
      </Style.HPStick>
    </Style.HPWrapper>
  );
}

export default MyHP;
