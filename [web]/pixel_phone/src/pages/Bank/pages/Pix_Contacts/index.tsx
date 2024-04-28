import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import KeyIcon from "@iconscout/react-unicons/icons/uil-key-skeleton";
import TrashIcon from "@iconscout/react-unicons/icons/uil-trash";
import NextIcon from "@iconscout/react-unicons/icons/uil-sign-out-alt";

import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useBank } from "../../../../Contexts/BankContext";
import { Contact } from "../../../../Contexts/BankContext";
import { RegisterMTAEvent } from "../../../../hooks/RegisterMTAEvent";

export const PixContacts = () => {
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const { bank, removeContact } = useBank();

  const handleRemoveContact = (id: any) => {
    removeContact(id);
    RegisterMTAEvent("execDeleteBankContact", { id: id });
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
      <Header title="Meus contatos" left={{ type: "back" }} />

      <section>
        <h4>Gerenciar contatos</h4>

        <div className="wrap">
          <AnimatePresence>
            {bank?.contacts &&
              bank?.contacts.map((item: Contact, index) => (
                <Card
                  id={item.id}
                  name={`${item.bank.firstname} ${item.bank.lastname}`}
                  pixKey={item.key.key}
                  index={index}
                  key={index}
                  handleRemoveContact={handleRemoveContact}
                />
              ))}
          </AnimatePresence>
        </div>
      </section>
    </Container>
  );
};

const Card = ({ id, name, pixKey, index, handleRemoveContact }: any) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      exit={{ translateX: 200, opacity: 0 }}
      transition={{ ease: "backIn", duration: 0.4, delay: 0.1 * index }}
      className="card"
    >
      <div className="card--col1">
        <h5>{name}</h5>

        <div className="key">
          <KeyIcon size={14} color="#6638A6" />

          <p>
            Chave: <strong>{pixKey}</strong>
          </p>
        </div>
      </div>

      <div className="card--col2">
        <button className="trash" onClick={() => handleRemoveContact(id)}>
          <TrashIcon size={14} color="#E91C1C" />
        </button>

        <button
          className="next"
          onClick={() => navigate("/bank/pix/transfer/" + pixKey)}
        >
          <NextIcon size={18} color="#6638A6" />
        </button>
      </div>
    </motion.div>
  );
};
