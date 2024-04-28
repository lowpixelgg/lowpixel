import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../../components/ActionBtn";
import { Ballance } from "../../components/Ballance";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { useBank } from "../../../../Contexts/BankContext";

export const PixPay = () => {
  const navigate = useNavigate();
  const { SistemDispatch } = useContext<any>(GlobalContext);
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
      <Header title="Pagar" left={{ type: "back" }} />

      <section>
        <Ballance ballance={bank?.balance!} />

        <h3>Faça um pagamento usando um código gerado por um jogador</h3>
      </section>

      <section className="form">
        <div>
          <label htmlFor="code">
            Código <span>*</span>
          </label>

          <input id="code" type="number" placeholder="Código do pagamento" />
        </div>

        <ActionButton
          title="Continuar"
          onClick={() => navigate("/bank/pix/pay/infos")}
        />
      </section>
    </Container>
  );
};
