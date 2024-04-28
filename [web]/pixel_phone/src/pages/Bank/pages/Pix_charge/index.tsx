import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../../components/ActionBtn";
import { Ballance } from "../../components/Ballance";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { useBank } from "../../../../Contexts/BankContext";

export const PixCharge = () => {
  const navigate = useNavigate();
  const { bank } = useBank();
  const { SistemDispatch } = useContext<any>(GlobalContext);

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
      <Header title="Cobrar" left={{ type: "back" }} />

      <section>
        <Ballance ballance={bank?.balance!} />

        <h3>Informe ao pagador o valor do seu serviço</h3>
      </section>

      <div className="form">
        <div>
          <label htmlFor="value">
            Valor <span>*</span>
          </label>

          <input id="value" type="number" placeholder="Valor à transferir" />
        </div>

        <div>
          <label htmlFor="descrição">Descrição</label>

          <textarea rows={4} id="descrição" placeholder="Descrição" />
        </div>

        <ActionButton
          title="Gerar Pagamento"
          onClick={() => navigate("/bank/pix/pay/infos")}
        />
      </div>
    </Container>
  );
};
