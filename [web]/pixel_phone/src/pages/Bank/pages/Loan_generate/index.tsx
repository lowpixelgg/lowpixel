import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect } from "react";
import { ActionButton } from "../../components/ActionBtn";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export const LoanGenerate = () => {
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
      <Header title="Empréstimos" left={{ type: "back" }} />

      <section>
        <h3>Resumo do seu empréstimo</h3>

        <div className="row">
          <p className="name">A receber</p> <p>R$ 5.000,00</p>
        </div>

        <div className="row">
          <p className="name">Parcelas</p> <p>8 x R$ 785,00</p>
        </div>

        <div className="row">
          <div className="col">
            <p className="name">Pagador</p>

            <p>Evol</p>
          </div>

          <div className="col">
            <p className="name">Conta</p>

            <p>1596-0</p>
          </div>
        </div>

        <div className="row">
          <p className="name">Forma de Pagamento</p>
          <p>Debito em conta</p>
        </div>

        <div className="row">
          <p className="name">Total a pagar:</p> <p>R$ 6.280,00</p>
        </div>
      </section>

      <ActionButton title="Confirmar" />
    </Container>
  );
};
