import { useState, useEffect } from 'react';

interface TypingHookProps {
  content: string;
}

function sleep(t: number) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

function typingHook({ content }: TypingHookProps) {
  const [text, setText] = useState<string>('');
  const [isTypingEnd, setIsTypingEnd] = useState<boolean>(false);

  const typingText = async () => {
    for (let i = 0; i <= content.length; i += 1) {
      await sleep(70);
      setText(content.slice(0, i));
    }
    setIsTypingEnd(true);
  };

  useEffect(() => {
    typingText();
  }, [content]);

  return [text, isTypingEnd];
}

export default typingHook;
