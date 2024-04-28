import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: ${({ theme }) => theme.background10};
  color: ${({ theme }) => theme.text10};

  .header {
    flex-shrink: 0;
    width: 100%;
    padding: 0 8px 0 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2px;

    .left {
      display: flex;
      align-items: center;

      h4 {
        margin-left: 8px;
        font-size: 12px;
      }
    }
  }

  .messagesList {
    padding: 0 8px;
    height: 100%;
    overflow-y: auto;
    transition: 0.2s ease;
    display: flex;
    flex-direction: column;

    .wrap {
      margin-top: auto;
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 10px;
    }

    .chatBox {
      display: flex;
      max-width: 75%;
      padding: 6px 12px;
      align-self: flex-start;
      background: #272837;
      border-radius: 8px;
      color: #f2f2fa;
    }

    .chatBox.isMe {
      align-self: flex-end;
      background: #3e3ebd;
    }
  }

  .commentInput {
    padding: 4px 8px;
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
  }
`;
