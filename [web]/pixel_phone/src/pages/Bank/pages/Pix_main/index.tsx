import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { motion } from "framer-motion";
import TransferIcon from "@iconscout/react-unicons/icons/uil-money-insert";
import CargeIcon from "@iconscout/react-unicons/icons/uil-usd-circle";
import PayIcon from "@iconscout/react-unicons/icons/uil-bill";
import NextIcon from "@iconscout/react-unicons/icons/uil-arrow-right";
import KeyIcon from "@iconscout/react-unicons/icons/uil-key-skeleton";
import UserIcon from "@iconscout/react-unicons/icons/uil-user-square";
import { Statement } from "./Statement";

export const PixMain = () => {
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
        title="Pix"
        left={{ type: "close", action: () => navigate("/bank/init") }}
      />

      <section className="btns">
        <h4>Meu pix</h4>

        <div className="actions">
          <motion.button
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "backIn", duration: 0.4 }}
            onClick={() => navigate("/bank/pix/transfer")}
          >
            <div className="icon">
              <TransferIcon size={16} color="#6638A6" />
            </div>

            <p>Tranferir</p>
          </motion.button>

          {/* <motion.button
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "backIn", duration: 0.4, delay: 0.1 }}
            onClick={() => navigate("/bank/pix/charge")}
          >
            <div className="icon">
              <CargeIcon size={16} color="#6638A6" />
            </div>

            <p>Cobrar</p>
          </motion.button>

          <motion.button
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "backIn", duration: 0.4, delay: 0.2 }}
            onClick={() => navigate("/bank/pix/pay")}
          >
            <div className="icon">
              <PayIcon size={16} color="#6638A6" />
            </div>

            <p>Pagar</p>
          </motion.button> */}
        </div>
      </section>

      <section className="others">
        <ul>
          <motion.li
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "backIn", duration: 0.4, delay: 0.2 }}
            onClick={() => navigate("/bank/pix/keys")}
          >
            <KeyIcon size={16} color="#6638A6" />

            <p>Minhas chaves</p>

            <NextIcon size={20} color="#6638A6" />
          </motion.li>

          <motion.li
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "backIn", duration: 0.4, delay: 0.3 }}
            onClick={() => navigate("/bank/pix/contacts")}
          >
            <UserIcon size={16} color="#6638A6" />

            <p>Meus Contatos</p>

            <NextIcon size={20} color="#6638A6" />
          </motion.li>
        </ul>
      </section>

      <section className="statement">
        <h4>Extrato</h4>

        <Statement />
      </section>
    </Container>
  );
};
