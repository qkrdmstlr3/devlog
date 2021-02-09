import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodeBlock({ value }): React.ReactElement {
  const style = {
    fontSize: '1.2rem',
    lineHeight: '20px',
    borderRadius: '10px',
    padding: '12px',
  };

  return (
    <SyntaxHighlighter
      language="typescript"
      style={tomorrowNightBlue}
      customStyle={style}
    >
      {value}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
