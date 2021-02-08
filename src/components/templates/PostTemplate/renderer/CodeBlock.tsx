import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodeBlock({ value }): React.ReactElement {
  return (
    <SyntaxHighlighter language="typescript" style={monokai}>
      {value}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
