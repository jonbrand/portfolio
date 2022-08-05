import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #22272e;
    --background-terminal: #24283b;
    --dark-purple: #332D4B;

    --purple: #645894;
    --green-light: #62FF5B;
    --green-dark: #0C4900;

    --pink: #B744B8;
    --pink-light: #a379c9;
    --gray: #3e4c5a;

    --gray-light: #8094A8;
    --title: #ADBAC7;
    --white: #fcfcfc;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font family size - 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75% large; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: var(--gray-light);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    background-color: var(--background);
    border: none;
  }

  // disable buttons
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`