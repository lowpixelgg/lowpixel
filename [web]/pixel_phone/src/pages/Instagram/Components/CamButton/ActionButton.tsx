import { Container } from "./styles";

export default ({ children, onClick }: any) => {
  return (
    <Container className="actionBtn">
      <button onClick={onClick}>{children}</button>
    </Container>
  );
};
