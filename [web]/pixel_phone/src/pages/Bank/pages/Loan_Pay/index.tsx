import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container } from "./styles";

import CheckIcon from "@iconscout/react-unicons/icons/uil-check";
import { ActionButton } from "../../components/ActionBtn";

export const LoanPay = () => {
  const { SistemDispatch } = useContext<any>(GlobalContext);

  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handlePay = () => {
    setLoad(true);
    const timer = setTimeout(() => {
      navigate("/bank/confirmPay");

      clearTimeout(timer);
    }, 3000);
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
      <Header title="Empréstimos" left={{ type: "back" }} />

      <main>
        <h3>
          Parcelas referentes ao empréstimo de <span>R$ 5.960,00</span>
        </h3>

        <ul className="loanList">
          <Item num="1" venc="16/jan/23" />

          <Item num="2" venc="16/fev/23" />

          <Item num="3" venc="16/mar/23" />

          <Item num="4" venc="16/abr/23" />

          <Item num="5" venc="16/mai/23" />
        </ul>

        <div className="total">
          <p>R$ 2.384,00</p>

          <ActionButton
            title="Pagar"
            loading={load}
            onClick={() => handlePay()}
          />
        </div>
      </main>
    </Container>
  );
};

const Item = ({ num, venc }: any) => {
  const [check, setCheck] = useState(false);

  return (
    <li onClick={() => setCheck(!check)}>
      <span className={`mark ${check && "check"}`}>
        {check && <CheckIcon size={18} color="#f2f2fa" />}
      </span>

      <div className="infos">
        <p>{num}° parcela</p>
        <small>venc: {venc}</small>
      </div>

      <p className="price">R$ 1.192,00</p>
    </li>
  );
};
