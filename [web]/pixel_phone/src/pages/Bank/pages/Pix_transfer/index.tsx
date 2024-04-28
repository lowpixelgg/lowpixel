import { GlobalContext } from "../../../../Contexts/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { Ballance } from "../../components/Ballance";
import { Header } from "../../components/Header";
import { Form } from "./Form";
import { Container } from "./styles";
import { useBank } from "../../../../Contexts/BankContext";
import { useParams } from "react-router-dom";

export const PixTransfer = () => {
  const { id } = useParams();
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const [keyType, setKeyType] = useState("Chave");

  const { bank } = useBank();

  useEffect(() => {
    SistemDispatch({ type: "showBottomNav" });
    SistemDispatch({
      type: "setBottomNavStyles",
      values: {
        background: "#FCF8F4",
        color: "#101011",
      },
    });

    SistemDispatch({ type: "showStatusbar" });
    SistemDispatch({
      type: "setStatusBarStyle",
      values: {
        background: "#FCF8F4",
        color: "#101011",
      },
    });
  }, []);

  return (
    <Container>
      <Header left={{ type: "back" }} title="Transferir" />

      <div className="wrap">
        <Ballance ballance={bank?.balance!} />
      </div>

      <div className="navs">
        <button onClick={() => setKeyType("Chave")}>Infos</button>

        <span className={`${keyType}`} />
      </div>

      <Form keyType={keyType} pixKey={id} setKeyType={setKeyType} />
    </Container>
  );
};
