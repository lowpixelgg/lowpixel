import styled from "styled-components";

type Props = {
  opacity: boolean;
};

export const Container = styled.div<Props>`
  * {
    opacity: ${(p) => (p.opacity ? 255 : 0)};
    transition: 500ms;
  }
`;
