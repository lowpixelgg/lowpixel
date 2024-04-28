import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${({ theme }) => theme.background10};
  color: ${({ theme }) => theme.text10};
  overflow-y: hidden;

  .header {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .wrap {
    max-height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .comments {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .comments--item {
    display: flex;
    align-items: flex-start;
    gap: 8px;

    .item--content {
      padding-right: 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h3 {
        font-size: 10px;
        font-weight: 500;
      }
      p {
        font-size: 8px;
      }
    }

    svg {
      color: ${({ theme }) => theme.text10};
    }
  }

  .commentInput {
    padding: 4px 0;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    input {
      padding: 4px 8px;
      width: 100%;
      flex-grow: 1;
      border: 2px solid ${({ theme }) => theme.border10};
      color: ${({ theme }) => theme.text10};
      border-radius: 20px;
      font-size: 8px;
    }

    button {
      flex-shrink: 0;
    }

    svg {
      color: ${({ theme }) => theme.text10};
    }
  }
`;
