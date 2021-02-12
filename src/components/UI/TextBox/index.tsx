// Dependencies
import React, { useEffect } from 'react';
import * as Style from './styled';

// Recoil
import { useRecoilState } from 'recoil';
import { gameState } from '../../../lib/recoil/game';

// Components
import BorderBox from '../BorderBox';

// Hooks
import typingHook from '../../../hooks/typingHook';

// Data
import { textData } from '../../../common/data/string';

function TextBox(): React.ReactElement {
  const [recoilGameState, setGameState] = useRecoilState(gameState);
  const [text, isTypingEnd] = typingHook({
    content: textData[recoilGameState.gameStatus](),
  });

  useEffect(() => {}, [recoilGameState.gameStatus]);

  const handleClick = () => {
    if (!isTypingEnd) return;

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
