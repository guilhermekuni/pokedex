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
    font: 16px "Space Mono", "Roboto", sans-serif;
  }
  button {
    cursor: pointer;
  }

  @keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity: 1;
  }
}
`;
