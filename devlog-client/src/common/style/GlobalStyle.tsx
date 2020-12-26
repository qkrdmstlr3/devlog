import React from 'react';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

function GlobalStyle(): React.ReactElement {
  return (
    <Global
      styles={css`
        ${emotionReset}

        * {
          box-sizing: border-box;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button,
        button:active {
          outline: none;
          cursor: pointer;
        }

        input:focus {
          outline: none;
        }
      `}
    />
  );
}

export default GlobalStyle;
