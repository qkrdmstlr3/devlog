// Dependencies
import React, { useState } from 'react';
import * as Style from './styled';

// Recoil
import { useRecoilState } from 'recoil';
import { gameState } from '../../../lib/recoil/game';

// Components
import BorderBox from '../BorderBox';

// Data
import { MyPokemon } from '../../../common/data/pokemon';

function FightBox() {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [{ name }, setGameState] = useRecoilState(gameState);

  const mouseEnterHandler = (index: number) => {
    if (index === currentSkill || MyPokemon[name].skill[index].name === '-')
      return;
    setCurrentSkill(index);
  };

  const clickHandler = (index: number) => {
    // gameStatus 5번으로 설정 후 textBox에서 6 7 8일 경우에 따라서 설정
  };

  return (
    <Style.Wrapper>
      <Style.LeftWrapper>
        <BorderBox>
          <Style.SkillBox>
            {MyPokemon[name].skill.map((skill, index) => (
              <Style.Skill
                key={index}
                onMouseEnter={() => mouseEnterHandler(index)}
                onClick={() => clickHandler(index)}
              >
                {index === currentSkill && <Style.Select>▶</Style.Select>}
                {skill.name}
              </Style.Skill>
            ))}
          </Style.SkillBox>
        </BorderBox>
      </Style.LeftWrapper>
      <Style.RightWrapper>
        <BorderBox>
          <Style.SkillTypeBox>
            기술 타입 / {MyPokemon[name].skill[currentSkill].skillType}
          </Style.SkillTypeBox>
        </BorderBox>
      </Style.RightWrapper>
    </Style.Wrapper>
  );
}

export default FightBox;
