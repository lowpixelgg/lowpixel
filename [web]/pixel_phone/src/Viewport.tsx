import React from "react";
import { App } from "./App";
import { GlobalContextProvider } from "./Contexts/GlobalContext";
import styled from "styled-components";

const Container = styled.div`
  width: 228px;
  height: 493px;
  position: absolute;
  left: 0px;
  top: 0px;

  .frame {
    position: absolute;
    width: 250px;
    height: 522px;
    top: -8px;
    left: -9px;
    z-index: 1000;
    background: url("src/assets/frame.png") no-repeat;
    background-size: contain;
    pointer-events: none;
  }

  .move {
    position: absolute;
    width: 25px;
    height: 25px;
    right: -45px;
    top: -20px;
    opacity: 0.5;
    transition: 0.6s;
  }

  .move:hover {
    opacity: 1;
  }
`;

const Master = styled.div`
  width: 100%;
  height: 100vh;
`;


export const Viewport = () => {
  const [position, setPosition] = React.useState({ x: 20, y: 20, margin: 0 });
  const [mouseState, setMouseState] = React.useState(null);


  return (
    <Master >
      <GlobalContextProvider>
        <Container
          style={{
            left: position.x + "px",
            top: position.y + "px",
          }}
        >
          <div className="frame"></div>

          <App />
        </Container>
      </GlobalContextProvider>
    </Master>
  );
};
