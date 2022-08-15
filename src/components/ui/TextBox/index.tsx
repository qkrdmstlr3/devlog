// Dependencies
import React from 'react';
import * as Style from './styled';

// Components
import BorderBox from '../BorderBox';

// Hooks
import typingHook from '../../../hooks/useTyping';
import useKeyboard from '../../../hooks/useKeyboard';

interface TextBoxProps {
  content: string;
  onClick: () => void;
  isLoading?: boolean;
}

function TextBox({ content, onClick, isLoading = false }: TextBoxProps): React.ReactElement {
  const [text, isTypingEnd] = typingHook({ content });
  const clickHandler = () => {
    if (isTypingEnd) onClick();
  };

  useKeyboard({ keyEvents: [{ key: 'Space', keyEvent: clickHandler }] });

  return (
    <Style.Wrapper onClick={clickHandler}>
      <BorderBox>
        <p>{text}</p>
        {isTypingEnd && !isLoading && <Style.Click>Click</Style.Click>}
      </BorderBox>
    </Style.Wrapper>
  );
}

export default TextBox;
