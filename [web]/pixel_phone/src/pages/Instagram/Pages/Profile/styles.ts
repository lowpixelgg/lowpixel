import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ theme }) => theme.background10};
  color: ${({ theme }) => theme.text10};
  transition: 0.4s ease-in-out;

  .container1 {
    padding: 0 8px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    & > div {
      display: flex;
      align-items: center;
      gap: 2px;
    }
    .left.back {
      gap: 0;
      margin-left: -4px;
    }
    .right {
      gap: 8px;
      button {
        color: ${({ theme }) => theme.text10};
      }
    }
  }

  .container2 {
    width: 100%;
    padding: 0 8px;
    margin: 8px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    .avatar {
      padding: 2px;
      border: 2px solid #48484a;
    }
    .infos {
      display: flex;
      gap: 12px;
      font-size: 10px;
      strong {
        font-size: 12px;
      }
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .infos.follow {
      flex-wrap: wrap;
      row-gap: 2px;
      justify-content: center;
    }
  }

  .container3 {
    width: 100%;
    padding: 0 8px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 4px;
    .username {
      font-size: 12px;
      font-weight: 600;
    }
    .bio {
      font-size: 10px;
    }
    &.margin {
      margin-bottom: 8px;
    }
  }

  button.edit {
    margin: 8px auto 0 auto;
    width: calc(100% - 8px);
    padding: 4px;
    background: none;
    border: 1px solid ${({ theme }) => theme.border10};
    border-radius: 6px;
    font-size: 10px;
    font-weight: 500;
    color: ${({ theme }) => theme.text10};
    display: flex;
    justify-content: center;
  }

  button.follow {
    width: 100%;
    padding: 2px;
    background: none;
    background-color: #5d5dfc;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 500;
    color: ${({ theme }) => theme.background10};
    display: flex;
    justify-content: center;
  }

  .highsContainer {
    margin: 8px;
    max-width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    overflow-x: auto;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;

      button {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        padding: 2px;
        border: 1px solid ${({ theme }) => theme.border10};
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          color: ${({ theme }) => theme.text10};
        }
      }

      img {
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }

      p {
        max-width: 36px;
        max-height: 12px;
        font-size: 10px;
        overflow: hidden;
        text-align: center;
      }
    }
  }

  .container4 {
    width: 100%;
    display: flex;
    border-top: 1px solid ${({ theme }) => theme.border10};
    & > div {
      width: 50%;
      padding: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      img {
        width: 16px;
      }
    }
    & > .active {
      border-bottom: 1px solid ${({ theme }) => theme.text10};
    }
  }

  .container5 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1px;
    img {
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
`;
