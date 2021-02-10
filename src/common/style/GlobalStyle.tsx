import React from 'react';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

function GlobalStyle(): React.ReactElement {
  return (
    <Global
      styles={css`
        @import url('//cdn.jsdelivr.net/gh/Dalgona/neodgm-webfont@1.510/neodgm/style.css');
        ${emotionReset}

        html {
          height: 100%;
        }
        body {
          background-color: #ddd;
          overflow-y: scroll;
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

        /* @font-face {
          font-family: 'neodgm';
          src: local('neodgm'), url('/fonts/neodgm.woff2') format('woff2'),
            url('/fonts/neodgm.woff') format('woff'),
            url('/fonts/neodgm.ttf') format('truetype');
        } */
      `}
    />
  );
}

export default GlobalStyle;
