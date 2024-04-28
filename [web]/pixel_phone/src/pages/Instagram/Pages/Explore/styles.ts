import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  overflow-y: hidden;

  .imgsContainer {
    flex: 1;
    width: 100%;
    overflow-y: auto;
    display: grid;
    align-content: start;
    gap: 1px;
    grid-template-columns: 1fr 1fr 1fr;
    img {
      object-fit: cover;
      aspect-ratio: 1;
    }
    img:nth-child(2) {
      grid-area: 1 / 2 / 3 / 4;
    }
  }
`;
