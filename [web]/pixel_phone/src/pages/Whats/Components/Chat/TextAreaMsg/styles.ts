import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 0 8px 8px 8px;

  .textAreaContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 4px;
    border-radius: 20px;
    padding: 0 8px;
    width: 179px;
    height: 32px;
    background-color: #1f2c34;
  }

  .audioRecorder {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    flex-shrink: 0;

    background-color: #05a685;
  }

  .micIcon {
    font-size: 19px;
  }

  input {
    position: relative;
    right: 4px;

    width: 100%;
    max-width: 117px;
    font-size: 12px;
    color: #fff;
  }

  .clipsIcon {
    font-size: 25px;
    color: #85969e;
    transform: rotate(120deg);
  }

  .cameraIcon {
    position: relative;
    left: -4px;

    font-size: 18px;
    color: #85969e;
  }

  .RecorderAudio{
    display: flex;
    align-items: center;
    padding: 0.313rem;
    justify-content: space-between;
    width: 100%;
    height: 32px;
    background-color: #121B22;

    transition: all 0.5s;

    .CancelAudio{
      color: white;
      & > svg:hover{
        color: #A84242;
        transition: all 0.3s;
      }
    }

    .PauseAudio:hover{
      transition: all 0.3s;
      filter: brightness(0.8);
    }

    .SubmitAudio{
      display: inline-block;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 1.563rem;
      border-radius: 4px;
      background-color: #018865;

      transition: all 0.3s;

      &:hover{
        filter: brightness(0.8);
      }
    }

    strong{
      font-size: 0.75rem;
      font-weight: 400;
    }
  }
`;
