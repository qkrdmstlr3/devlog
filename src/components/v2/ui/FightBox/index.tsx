import React, { useState } from 'react';
import { PokemonType } from '../../../../hooks/usePokemon';
import useKeyboard from '../../../../hooks/useKeyboard';

import BorderBox from '../BorderBox';
import * as Style from './styled';

interface FightBoxProps {
  myPokemon: PokemonType;
  onClickSkill: (skill: string) => void;
}

function FightBox({ myPokemon, onClickSkill }: FightBoxProps) {
  const mySkills = myPokemon.skill;
  const mySkillNames = Object.keys(mySkills);
  const mySkillsLength = mySkillNames.length;

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  useKeyboard({
    keyEvents: [
      { key: 'ArrowDown', keyEvent: () => setCurrentSkillIndex(Math.min(mySkillsLength - 1, currentSkillIndex + 1)) },
      { key: 'ArrowUp', keyEvent: () => setCurrentSkillIndex(Math.max(0, currentSkillIndex - 1)) },
      { key: 'Space', keyEvent: () => onClickSkill(mySkillNames[currentSkillIndex]) },
    ],
  });

  const mouseEnterHandler = (index: number) => setCurrentSkillIndex(index);

  return (
    <Style.Wrapper>
      <Style.LeftWrapper>
        <BorderBox>
          <Style.SkillBox>
            {mySkillNames.map((skill, index) => (
              <Style.Skill
                key={skill}
                onMouseEnter={() => mouseEnterHandler(index)}
                onClick={() => onClickSkill(skill)}
              >
                {index === currentSkillIndex && <Style.Select>▶</Style.Select>}
                {skill}
              </Style.Skill>
            ))}
          </Style.SkillBox>
        </BorderBox>
      </Style.LeftWrapper>
      <Style.RightWrapper>
        <BorderBox>
          <Style.SkillTypeBox>기술 타입 / {Object.values(mySkills)[currentSkillIndex].type}</Style.SkillTypeBox>
        </BorderBox>
      </Style.RightWrapper>
    </Style.Wrapper>
  );
}

export default FightBox;
