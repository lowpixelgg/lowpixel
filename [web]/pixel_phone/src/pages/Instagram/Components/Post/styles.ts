import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${({ theme }) => theme.text10};
  button {
    color: ${({ theme }) => theme.text10};
  }
  .container1 {
    display: flex;
    justify-content: space-between;
    & > div {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    p {
      font-size: 10px;
      font-weight: 500;
    }
  }

  .postImg {
    width: 100%;
    max-height: 160px;
    object-fit: cover;
  }

  .container3 {
    margin: 8px 0 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    button {
      display: flex;
      align-items: center;
    }
    .chat {
      margin-bottom: 2px;
    }
    .likedHeart {
      color: #d73628;
      animation: like 0.2s ease-in;
    }

    @keyframes like {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    .savedMark {
      animation: like 0.2s ease-in;
    }
  }

  .container4 {
    p {
      width: 100%;
      font-size: 10px;
      font-weight: 300;
    }
    strong {
      font-weight: 600;
    }
  }

  .coments {
    color: ${({ theme }) => theme.text20};
    font-size: 8px;
    cursor: pointer;
    opacity: 0.8;
  }
`;
