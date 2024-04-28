import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Ballance } from "../../components/Ballance";
import { Header } from "../../components/Header";
import { Container } from "./styles";

import UpArrowIcon from "@iconscout/react-unicons/icons/uil-angle-up";
import DownArrowIcon from "@iconscout/react-unicons/icons/uil-angle-down";
import { useState } from "react";
import { ActionButton } from "../../components/ActionBtn";
import { useBank } from "../../../../Contexts/BankContext";
import { RegisterMTAEvent } from "../../../../hooks/RegisterMTAEvent";

export const LoanSimulate = () => {
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const { bank } = useBank();
  const navigate = useNavigate();

  const [value, setValue] = useState(0);
  const [portions, setPortions] = useState(4);

  const DotValue = (number: string) => {
    let parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return parts.join(",");
  };

  const CalculatePortions = () => {
    return DotValue((value / portions + value * 0.032).toFixed(2));
  };

  const CalculateMontant = () => {
    return DotValue(((value / portions + value * 0.032) * portions).toFixed(2));
  };

  const handleSimulate = () => {
    RegisterMTAEvent("execSimulate", {});
  };

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
      <Header title="Simular empréstimo" left={{ type: "back" }} />

      <main>
        <Ballance ballance={bank?.balance!} />

        <div className="input">
          <label htmlFor="value">
            Valor desejado <span>*</span>
          </label>

          <input
            onChange={(e: any) => setValue(e.target.value)}
            id="value"
            type="number"
            placeholder="Valor"
          />
        </div>

        <div className="portion">
          <p>
            <strong>{value > 0 ? portions : "0"}</strong> parcelas de{" "}
            <strong>R$ {CalculatePortions()}</strong>
          </p>

          <div className="btns">
            <button onClick={() => setPortions(portions + 1)}>
              <UpArrowIcon size={20} color="#6638A6" />
            </button>

            <button onClick={() => setPortions(portions - 1)}>
              <DownArrowIcon size={20} color="#6638A6" />
            </button>
          </div>
        </div>

        <div className="total">
          <p>Total a pagar</p>

          <h4>$ {value > 0 ? CalculateMontant() : "0,00"}</h4>

          <small>3.2 % ao mês</small>
        </div>

        <ActionButton title="Continuar" onClick={() => handleSimulate()} />
      </main>
    </Container>
  );
};
