import styled from "styled-components";

export const Container = styled.div`
  padding: 4px 8px;
  margin: 8px 0;
  width: calc(100% - 24px);
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.background40};
  border-radius: 6px;

  & > input {
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.text10};
    font-size: 12px;
    ::placeholder {
      color: ${({ theme }) => theme.text50};
    }
  }

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.text50};
  }
`;
