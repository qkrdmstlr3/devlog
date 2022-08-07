// Dependencies
import React, { useEffect } from 'react';
import * as Style from './styled';
import { navigate } from 'gatsby';

// Components
import BorderBox from '../BorderBox';

// Hooks
import typingHook from '../../../hooks/useTyping';

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
