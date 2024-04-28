import { FcGoogle } from "react-icons/fc";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

export const GoogleWidget = () => {
  return (
    <Container>
      <FcGoogle />

      <input disabled type="text" placeholder="Restaurantes? Da um google.." />

      <BiSearch className="google-searchIcon" size={14} />
    </Container>
  );
};

const Container = styled.div`
  height: 24px;
  width: 94%;
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: #f2f2fa;
  border-radius: 20px;
  input {
    width: 80%;
    height: 100%;
    background: none;
    border: none;
    font-size: 8px;
  }
  svg {
    flex-shrink: 0;
  }
  .google-searchIcon {
    color: #242424;
  }
`;
