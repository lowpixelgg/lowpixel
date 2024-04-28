import styled from "styled-components";

const TransparentPages = [
  "/instagram/cam",
  "/whats/camera",
  "/instagram/liveCam",
  "/instagram/storyCam",
  "/instagram/liveOwner",
  "/instagram/liveView",
  "/bank/auth/camera",
];

const shouldRenderBg = (path: string) => {
  if (TransparentPages.includes(path)) {
    return false;
  } else {
    return true;
  }
};

export const Container = styled.div<any>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ path }) => shouldRenderBg(path) && "#101011"};
  position: relative;
  overflow: hidden;
  & > div:nth-child(2) {
    flex: 1;
    overflow-y: auto;
  }
`;
