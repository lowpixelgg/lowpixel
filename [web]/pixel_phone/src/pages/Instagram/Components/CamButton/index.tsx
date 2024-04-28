import React from "react";
import { Container } from "./styles";
import ActionButton from "./ActionButton";

export const CamButton = ({ children, onClick }: any) => {
  return (
    <Container>
      <button onClick={onClick}>{children}</button>
    </Container>
  );
};

export { ActionButton };
