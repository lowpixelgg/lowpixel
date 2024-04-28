import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import NextIcon from "@iconscout/react-unicons/icons/uil-angle-right-b";
import CardIcon from "@iconscout/react-unicons/icons/uil-credit-card";
import LockIcon from "@iconscout/react-unicons/icons/uil-lock-alt";
import { Password } from "./Password";
import { AnimatePresence, motion } from "framer-motion";

export const CardMain = () => {
  const navigate = useNavigate();
  const { SistemDispatch } = useContext<any>(GlobalContext);

  const [viewPasscard, setViewPasscard] = useState(false);

  useEffect(() => {
    SistemDispatch({ type: "showBottomNav" });
    SistemDispatch({
      type: "setBottomNavStyles",
      values: {
        background: "#e1e1e6",
        color: "#101011",
      },
    });

    SistemDispatch({ type: "showStatusbar" });
    SistemDispatch({
      type: "setStatusBarStyle",
      values: {
        background: "#8B3AC2",
        color: "#f2f2fa",
      },
    });
  }, []);

  return (
    <Container>
      <AnimatePresence>
        {viewPasscard && <Password setViewPasscard={setViewPasscard} />}
      </AnimatePresence>

      <div className="head">
        <Header
          title="Cartão"
          left={{ type: "close", action: () => navigate("/bank/init") }}
        />
      </div>

      <section className="main">
        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.2 }}
          className="card"
        >
          <img src={"src/assets/Bank-BlackCard.png"} alt="credit card" />

          <div>
            <p>Soweto Chesterfield</p>
            <span>2901-1090-1232</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.2, delay: 0.1 }}
          className="limit"
        >
          <h4>Limite</h4>

          <div className="bar">
            <span className="fill" style={{ width: "70%" }} />
          </div>

          <div className="values">
            <div className="used">
              <span>Usado</span>

              <p>R$ 8.000,00</p>
            </div>

            <div className="free">
              <span>Disponível</span>

              <p>R$ 4.000,00</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.2, delay: 0.2 }}
          className="invoice"
        >
          <button
            className="head"
            onClick={() => navigate("/bank/card/invoice")}
          >
            <h4>Fatura</h4>
            <NextIcon color="#552E8C" size={16} />
          </button>

          <div className="values">
            <div className="actual">
              <span>Atual</span>

              <p>R$ 2.000,00</p>
            </div>

            <div className="next">
              <span>Próxima</span>

              <p>R$ 0,00</p>
            </div>
          </div>
        </motion.div>

        <div className="buttons">
          <motion.button
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.2, delay: 0.3 }}
            onClick={() => navigate("/bank/card/limitAdjust")}
            className="btn"
          >
            <CardIcon size={28} color="#341959" />

            <p>Pedir limite</p>
          </motion.button>

          <motion.button
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.2, delay: 0.4 }}
            className="btn"
            onClick={() => setViewPasscard(true)}
          >
            <LockIcon size={28} color="#341959" />

            <p>Senha</p>
          </motion.button>
        </div>
      </section>
    </Container>
  );
};
