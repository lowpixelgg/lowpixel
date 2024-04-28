import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../../components/ActionBtn";
import { Header } from "../../components/Header";
import { motion } from "framer-motion";
import { Container } from "./styles";
import BillIcon from "@iconscout/react-unicons/icons/uil-bill";
import NextIcon from "@iconscout/react-unicons/icons/uil-angle-right-b";
import Xicon from "@iconscout/react-unicons/icons/uil-times-square";

const UserLoans = [
  { value: 5000, date: "jan/22" },
  { value: 3000, date: "out/22" },
];

export const LoanMain = () => {
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const navigate = useNavigate();

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
      <Header
        title="Empréstimos"
        left={{ type: "close", action: () => navigate("/bank/init") }}
      />

      <motion.main
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.4 }}
      >
        <div className="head">
          <h4>Crédito disponível para empréstimos:</h4>

          <p>R$ 10.000,00</p>
        </div>

        <ul className="list">
          {UserLoans.length > 0 ? (
            UserLoans.map((item, index) => {
              return <Item value={item.value} date={item.date} key={index} />;
            })
          ) : (
            <Empty />
          )}
        </ul>
      </motion.main>

      <ActionButton
        title="Novo empréstimo"
        onClick={() => navigate("/bank/loan/simulate")}
      />
    </Container>
  );
};

const Item = ({ value, date }: any) => {
  const navigate = useNavigate();

  const DotValue = (number: string) => {
    let parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return parts.join(",");
  };

  return (
    <li className="item">
      <BillIcon size={20} color="#6638A6" />

      <div className="infos">
        <p>R$ {DotValue(value.toFixed(2))}</p>

        <span>{date}</span>
      </div>

      <button onClick={() => navigate("/bank/loan/pay")}>
        <NextIcon size={20} color="#6638A6" />
      </button>
    </li>
  );
};

const Empty = () => {
  return (
    <div className="empty">
      <Xicon size={28} color="#8B3AC2" />

      <p>Você não possui nenhum empréstimo ativo</p>
    </div>
  );
};
