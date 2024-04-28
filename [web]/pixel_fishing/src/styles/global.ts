import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    user-select: none;
    color: ${({ theme }) => theme.colors.text_primary};
    background: radial-gradient(
    107.9% 107.9% at 50% 50%,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.81) 72.36%
  );
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
  }
`;
