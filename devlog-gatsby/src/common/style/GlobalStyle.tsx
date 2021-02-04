import React from 'react';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

function GlobalStyle(): React.ReactElement {
  return (
    <Global
      styles={css`
        ${emotionReset}
        body {
          background-color: #ddd;
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

        @font-face {
          font-family: 'neodgm';
          src: local('neodgm'), url('fonts/neodgm.woff2') format('woff2'),
            url('fonts/neodgm.woff') format('woff'),
            url('fonts/neodgm.ttf') format('truetype');
        }
      `}
    />
  );
}

export default GlobalStyle;
