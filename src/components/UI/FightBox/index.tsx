// Dependencies
import React, { useState } from 'react';
import * as Style from './styled';

// Recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import { gameState } from '../../../lib/recoil/game';
import { myPokemonState } from '../../../lib/recoil/myPokemon';

// Components
import BorderBox from '../BorderBox';

function FightBox() {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [recoilGameState, setGameState] = useRecoilState(gameState);
  const recoilMyPokemonState = useRecoilValue(myPokemonState);

  const mouseEnterHandler = (index: number) => {
    const isNotSkill =
      index === currentSkill ||
      recoilMyPokemonState[recoilGameState.sort].skill[index].name === '-';
    if (isNotSkill) return;

    setCurrentSkill(index);
  };

  const clickHandler = (index: number) => {
    const isNotSkill =
      recoilMyPokemonState[recoilGameState.sort].skill[index].name === '-';
    if (isNotSkill) return;

    const enemySkill = Math.floor(Math.random() * 4);
    setGameState({
      ...recoilGameState,
      gameStatus: 5,
      mySkill: currentSkill,
      enemySkill,
    });
  };

  return (
    <Style.Wrapper>
      <Style.LeftWrapper>
        <BorderBox>
          <Style.SkillBox>
            {recoilMyPokemonState[recoilGameState.sort].skill.map(
              (skill, index) => (
                <Style.Skill
                  key={index}
                  onMouseEnter={() => mouseEnterHandler(index)}
                  onClick={() => clickHandler(index)}
                >
                  {index === currentSkill && <Style.Select>▶</Style.Select>}
                  {skill.name}
                </Style.Skill>
              )
            )}
          </Style.SkillBox>
        </BorderBox>
      </Style.LeftWrapper>
      <Style.RightWrapper>
        <BorderBox>
          <Style.SkillTypeBox>
            기술 타입 /{' '}
            {
              recoilMyPokemonState[recoilGameState.sort].skill[currentSkill]
                .skillType
            }
          </Style.SkillTypeBox>
        </BorderBox>
      </Style.RightWrapper>
    </Style.Wrapper>
  );
}

export default FightBox;
