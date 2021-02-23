// Dependencies
import React, { useEffect } from 'react';
import * as Style from './styled';
import { navigate } from 'gatsby';

// Recoil
import { useRecoilState } from 'recoil';
import { gameState } from '../../../lib/recoil/game';

// Components
import BorderBox from '../BorderBox';

// Hooks
import typingHook from '../../../hooks/typingHook';

// Data
import { textData } from '../../../common/data/string';
import { MyPokemon, EnemyPokemon } from '../../../common/data/pokemon';

function TextBox(): React.ReactElement {
  const [recoilGameState, setGameState] = useRecoilState(gameState);
  const [text, isTypingEnd] = typingHook({
    content: textData[recoilGameState.gameStatus](
      MyPokemon[recoilGameState.name].skill[recoilGameState.mySkill]?.name,
      EnemyPokemon.skill[recoilGameState.enemySkill]?.name,
      MyPokemon[recoilGameState.name].name,
      recoilGameState.myCurrentHP
    ),
  });

  useEffect(() => {}, [recoilGameState.gameStatus]);

  const handleClick = () => {
    if (!isTypingEnd) return;

    /** 이거 recoil selector처리로 가능하지 않을까? */
    switch (recoilGameState.gameStatus) {
      case 1: {
        setGameState({
          ...recoilGameState,
          gameStatus: 2,
        });
        return;
      }
      case 2: {
        setGameState({
          ...recoilGameState,
          gameStatus: 3,
        });
        return;
      }
      case 5: {
        const damagedHP =
          recoilGameState.myCurrentHP -
            EnemyPokemon.skill[recoilGameState.enemySkill].damage || 0;
        setGameState({
          ...recoilGameState,
          gameStatus: 6,
          myCurrentHP: damagedHP < 0 ? 0 : damagedHP,
        });
        return;
      }
      case 6: {
        setGameState({
          ...recoilGameState,
          gameStatus: 7,
          enemySkill: -1,
        });
        return;
      }
      case 7: {
        // 내 포켓몬이 쓰러졌을 경우
        if (recoilGameState.myCurrentHP <= 0) {
          setGameState({
            ...recoilGameState,
            gameStatus: 3,
            isPokemonListOpen: true,
          });
          return;
        }

        const damagedHP =
          recoilGameState.enemyCurrentHP -
            MyPokemon[recoilGameState.name].skill[recoilGameState.mySkill]
              .damage || 0;
        setGameState({
          ...recoilGameState,
          gameStatus: 8,
          enemyCurrentHP: damagedHP < 0 ? 0 : damagedHP,
        });
        return;
      }
      case 8: {
        if (recoilGameState.enemyCurrentHP <= 0) {
          setGameState({
            ...recoilGameState,
            gameStatus: 9,
          });
          return;
        }

        setGameState({
          ...recoilGameState,
          gameStatus: 3,
        });
        return;
      }
      case 9: {
        setGameState({
          ...recoilGameState,
          gameStatus: 11,
        });
        return;
      }
      case 11: {
        navigate('/list');
        return;
      }
      default:
        return;
    }
  };

  return (
    <Style.Wrapper>
      <BorderBox onClick={handleClick}>
        <p>{text}</p>
        {isTypingEnd && <Style.Click>Click</Style.Click>}
      </BorderBox>
    </Style.Wrapper>
  );
}

export default TextBox;
