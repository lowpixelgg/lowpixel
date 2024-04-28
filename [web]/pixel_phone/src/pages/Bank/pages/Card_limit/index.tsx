import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../../components/ActionBtn";
import { Header } from "../../components/Header";
import { LimitValue } from "./LimitValue";
import { Container } from "./styles";

const limitRange = {
  max: 8000,
};

export const CardLimit = () => {
  const navigate = useNavigate();
  const { SistemDispatch } = useContext<any>(GlobalContext);

  const [newLimit, setNewLimit] = useState<number>(0);

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
      <Header left={{ type: "back" }} title="Ajuste de limite" />

      <h3>
        Escolha o valor que você quer e ajuste o limite total do seu cartão
      </h3>

      <div className="limit">
        <LimitValue
          newLimit={newLimit}
          setNewLimit={setNewLimit}
          limitRange={limitRange}
        />

        <div className="feedbacks">
          <div className="new">
            <span />

            <p>
              Novo limite:{" "}
              {newLimit > 0 ? `R$ ${newLimit.toFixed(2)}` : "R$ 0,00"}
            </p>
          </div>

          <div className="max">
            <span />

            <p>Máximo: R$ {limitRange.max.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <ActionButton
        title="Pedir limite"
        onClick={() => navigate("/bank/card/limitReview")}
      />
    </Container>
  );
};
