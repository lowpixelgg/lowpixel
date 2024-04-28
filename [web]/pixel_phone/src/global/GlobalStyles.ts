import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  scroll-behavior: smooth;
  user-select: none;
  :focus {
    outline: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
}

#root {
  width: 100vw;
  height: 100vh;
  position: relative;
}

a {
  color: inherit;
  -webkit-user-drag: none;
}

img {
  display: block;
  width: 100%;
  -webkit-user-drag: none;
}

ul {
  list-style: none;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
}

input {
  background: none;
  outline: none;
  border: none;
}

p {
  word-break: break-word;
}

.poppins {
  font-family: 'Poppins', sans-serif;
}

`;
