import styled from "styled-components"

export const Root = styled.div`
  width: 320px;
  height: 180px;
  background: url("src/assets/idBackg.png");
  border-radius: 8px;
  overflow: hidden;

  * {
    font-family: "Outfit", sans-serif;
  }

  > .Content {
    height: 75%;
    flex-grow: 1;
    background: linear-gradient(
      to right,
      rgba(187, 192, 171, 0.6),
      rgba(194, 182, 170, 0.65),
      rgba(175, 183, 167, 0.75)
    );
    padding: 4px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;

    .contentRow1 {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 4px;

      .line {
        width: 100%;
        flex-grow: 1;
        height: 2px;
        background: linear-gradient(
          to right,
          rgba(199, 62, 63, 1),
          rgba(199, 62, 63, 0)
        );
      }

      h3 {
        font-size: 0.825rem;
        color: #c73e3f;
        white-space: nowrap;
        font-weight: 800;
      }
    }

    .contentRow2 {
      width: 100%;
      display: flex;
      justify-content: center;

      h2 {
        font-size: 1rem;
        color: #223565;
        font-weight: 800;
      }
    }

    .contentRow3 {
      width: 100%;
      padding-left: 16px;
      display: flex;
      gap: 8px;
      align-items: center;

      .avatar {
        display: flex;
        background: #f8f9fa;
        padding: 4px;

        img {
          width: 52px;
          height: 52px;
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 2px;
        font-size: 10px;
        color: #223565;

        strong {
          font-size: 9px;
        }
      }
    }

    .idNumber {
      position: absolute;
      bottom: 4px;
      right: 4px;
      color: #223565;
      font-size: 14px;
    }
  }

  > .id {
    flex-shrink: 0;
    padding: 10px;
    text-align: justify;

    p {
      height: 42px;
      overflow: hidden;
      word-wrap: normal;
      font-size: 10px;
      color: #5d657f;
    }
  }
`