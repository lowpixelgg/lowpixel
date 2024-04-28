import React from "react";
import { Container } from "./styles";
import SpinIcon from "@iconscout/react-unicons/icons/uil-spinner-alt";

export const ActionButton = ({ title, loading, onClick }: any) => {
  return (
    <Container className="submit" onClick={onClick}>
      {loading ? (
        <SpinIcon className="spinner" size={14} color="#f2f2fa" />
      ) : (
        title
      )}
    </Container>
  );
};
