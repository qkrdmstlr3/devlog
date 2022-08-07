import React, { useState } from 'react';
import { PokemonType } from '../../../hooks/usePokemon';
import BorderBox from '../BorderBox';
import * as Style from './styled';

interface FightBoxProps {
  myPokemon: PokemonType;
  onClickSkill: (skill: string) => void;
}

function FightBox({ myPokemon, onClickSkill }: FightBoxProps) {
  const [currentSkill, setCurrentSkill] = useState('');

  const mouseEnterHandler = (skill: string) => {
    const isNotSkill = skill === currentSkill;
    if (isNotSkill) return;

    setCurrentSkill(skill);
  };

  return (
    <Style.Wrapper>
      <Style.LeftWrapper>
        <BorderBox>
          <Style.SkillBox>
            {Object.keys(myPokemon.skill).map((skill) => (
              <Style.Skill
                key={skill}
                onMouseEnter={() => mouseEnterHandler(skill)}
                onClick={() => onClickSkill(skill)}
              >
                {skill === currentSkill && <Style.Select>▶</Style.Select>}
                {skill}
              </Style.Skill>
            ))}
          </Style.SkillBox>
        </BorderBox>
      </Style.LeftWrapper>
      <Style.RightWrapper>
        <BorderBox>
          {currentSkill && <Style.SkillTypeBox>기술 타입 / {myPokemon.skill[currentSkill].type}</Style.SkillTypeBox>}
        </BorderBox>
      </Style.RightWrapper>
    </Style.Wrapper>
  );
}

export default FightBox;
