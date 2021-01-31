// Dependencies
import React from 'react';
import { Global, css } from '@emotion/core';
import emotionReset from 'emotion-reset';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}

      * {
        box-sizing: border-box;
        font-family: 'DungGeunMo';
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

export const decorators = [
  (Story) => (
    <>
      <Story />
      <GlobalStyle />
    </>
  ),
];
