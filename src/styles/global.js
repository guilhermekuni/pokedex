import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    ${({ theme }) => css`
      background: ${theme.colors.darkGray};
      -webkit-font-smoothing: antialiased;
    `};
  }
  body, input, button {
    font: 16px "Roboto", sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
