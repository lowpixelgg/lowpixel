import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { Container } from "./styles";

import UserIcon from "@iconscout/react-unicons/icons/uil-user-square";
import KeyIcon from "@iconscout/react-unicons/icons/uil-key-skeleton";
import PhoneIcon from "@iconscout/react-unicons/icons/uil-phone";
import { IoCopyOutline } from "react-icons/io5";
import { Key, useBank } from "../../../../Contexts/BankContext";

export const PixKeys = () => {
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
      <Header title="Minhas chaves" left={{ type: "back" }} />

      {bank && (
        <section>
          <h4>Gerenciar chaves</h4>

          {bank.keys.map((key: Key) => (
            <div className="card">
              <UserIcon size={20} color="#6638A6" />

              <div>
                <p>{key.title}</p>

                <span>
                  <p>Chave: </p>
                  <strong>{key.key}</strong>
                </span>
              </div>

              <button>
                <IoCopyOutline size={16} color="#6638A6" />
              </button>
            </div>
          ))}
        </section>
      )}
    </Container>
  );
};
