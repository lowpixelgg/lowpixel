import React from "react";
import { Container } from "./styles";
import CloseIcon from "@iconscout/react-unicons/icons/uil-multiply";
import BackIcon from "@iconscout/react-unicons/icons/uil-arrow-left";
import { useNavigate } from "react-router-dom";

export const Header = ({ title, left }: any) => {
  const navigate = useNavigate();

  return (
    <Container>
      {left.type === "close" ? (
        <button onClick={left.action}>
          <CloseIcon size={20} />
        </button>
      ) : (
        <button onClick={() => navigate(-1)}>
          <BackIcon size={24} />
        </button>
      )}

      <h2>{title}</h2>
    </Container>
  );
};
