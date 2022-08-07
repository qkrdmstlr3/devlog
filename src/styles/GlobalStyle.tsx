import React from 'react';
import { Global, css } from '@emotion/react';

function GlobalStyle(): React.ReactElement {
  return (
    <Global
      styles={css`
        @import url('//cdn.jsdelivr.net/gh/Dalgona/neodgm-webfont@1.510/neodgm/style.css');

        html {
          height: 100%;
        }
        body {
          margin: 0;
          background-color: #ddd;
          height: 100%;
        }
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

        ul {
          padding: 0;
          margin: 0;
        }
      `}
    />
  );
}

export default GlobalStyle;
