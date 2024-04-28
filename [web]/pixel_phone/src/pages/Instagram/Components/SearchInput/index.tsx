import React from "react";
import { Container } from "./styled";
import { IoSearchSharp } from "react-icons/io5";

export const SearchInput = ({ ...rest }) => {
  return (
    <Container className="searchInput">
      <IoSearchSharp size={14} />

      <input {...rest} type="text" placeholder="Buscar" />
    </Container>
  );
};
