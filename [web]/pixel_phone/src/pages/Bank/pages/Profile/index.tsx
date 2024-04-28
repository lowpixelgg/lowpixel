import { Avatar } from "../../../../Components/Avatar";
import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { Nick } from "./Nick";
import { Container } from "./styles";
import InfoIcon from "@iconscout/react-unicons/icons/uil-info-circle";
import { useBank } from "../../../../Contexts/BankContext";
import { useWhatsApp } from "../../../../Contexts/WhatsAppContext";

export const Profile = () => {
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
        background: "#8B3AC2",
        color: "#FCF8F4",
      },
    });
  }, []);

  const luaTime = (luaTime: number): string => {
    const date = new Date(luaTime * 1000);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <Container>
      <header>
        <Header title="Meu perfil" left={{ back: "back" }} />

        <div className="user">
          <Avatar url={bank?.picture} size={32} />

          <div>
            <p>
              {bank?.firstname} {bank?.lastname}
            </p>

            <span>{bank?.agency}</span>
          </div>
        </div>
      </header>

      <main>
        <section>
          <h3>Cadastro</h3>

          <div className="row">
            <p className="name">Nome</p>
            <p>
              {bank?.firstname} {bank?.lastname}
            </p>
          </div>

          <div className="row">
            <p className="name">Conta</p> <p>{bank?.agency}</p>
          </div>

          <div className="row">
            <p className="name">RG</p> <p>1</p>
          </div>

          <div className="row">
            <p className="name">Ativo desde</p>
            <p>{luaTime(bank?.createdAt!)}</p>
          </div>
        </section>

        <div className="version">
          <InfoIcon size={14} color="#341959" />

          <p>V 1.0</p>
        </div>
      </main>
    </Container>
  );
};
