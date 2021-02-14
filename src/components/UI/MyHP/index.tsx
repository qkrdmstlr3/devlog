import React from 'react';
import * as Style from './styled';

interface MyHPProps {
  /** 포켓몬 체력 퍼센트 */
  hp: number;
  /** 포켓몬 이름 */
  name: string;
}

function MyHP({ hp, name }: MyHPProps) {
  return (
    <div>
      <Style.Name>{name}</Style.Name>
      <Style.HPWrapper>
        <Style.HPText>HP:</Style.HPText>
        <Style.HPCenter>20 / 20</Style.HPCenter>
        <Style.HPStick>
          <Style.HPStickBar hp={hp} />
        </Style.HPStick>
      </Style.HPWrapper>
    </div>
  );
}

export default MyHP;
