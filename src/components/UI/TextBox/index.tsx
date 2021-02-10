// Dependencies
import React from 'react';
import * as Style from './styled';

// Components
import BorderBox from '../BorderBox';

// Hooks
import typingHook from '../../../hooks/typingHook';

function TextBox(): React.ReactElement {
  const [text, isTypingEnd] = typingHook({
    content: '앗! 야생의\n 리액트(이)가 나타났다!',
  });

  const handleClick = () => {
    if (!isTypingEnd) return;
    alert('hi');
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
