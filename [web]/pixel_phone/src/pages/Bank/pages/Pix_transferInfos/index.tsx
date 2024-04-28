import { GlobalContext } from "../../../../Contexts/GlobalContext";
import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { ActionButton } from "../../components/ActionBtn";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { useBank } from "../../../../Contexts/BankContext";
import { RegisterMTAEvent } from "../../../../hooks/RegisterMTAEvent";
import { useMta } from "../../../../Contexts/GameContext";
import { useNavigate } from "react-router-dom";
import { Contacts } from "../../../Contacts";

export const TransferInfos = () => {
  const { bank, transfer, setInitialBank } = useBank();
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [saveContact, setSaveContact] = useState(false);
  const { addEventListener } = useMta();

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

  const handleConfirm = () => {
    setLoading(true);
    RegisterMTAEvent("execBankTransfer", { ...transfer, save: saveContact });
    addEventListener("execBankTransfer", (data) => {
      if (!data) {
        return setLoading(false);
      }

      // @ts-ignore
      setInitialBank({ ...bank, balance: data.balance });

      if (data.contact) {
        // @ts-ignore
        setInitialBank({ ...bank, contacts: [...bank.contacts, data.contact] });
      }

      if (data.transaction) {
        // @ts-ignore
        setInitialBank({
          ...bank,
          extract: [...bank?.extract!, data.transaction],
        });
      }
    });
  };

  return (
    <Container>
      <Header left={{ type: "back" }} title="Transferir" />

      <section>
        <h3>Transferência</h3>

        <div className="row">
          <p className="name">Pagador</p>
          <p>
            {bank?.firstname} {bank?.lastname}
          </p>
        </div>

        <div className="row">
          <p className="name">RG</p> <p>1</p>
        </div>

        <div className="row">
          <div className="col">
            <p className="name">Data</p>

            <p>23/07/22</p>
          </div>

          <div className="col">
            <p className="name">Hora</p>

            <p>20:48</p>
          </div>
        </div>

        <div className="row">
          <p className="name">Valor</p>
          <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(transfer?.value!)}
          </p>
        </div>

        <div className="row">
          <div className="col">
            <p className="name">Descrição</p>
            <p>{transfer?.description}</p>
          </div>
        </div>
      </section>

      <section>
        <h3>Recebedor</h3>

        <div className="row">
          <p className="name">Nome</p>
          <p>
            {transfer?.firstname} {transfer?.lastname}
          </p>
        </div>

        <div className="row">
          <p className="name">RG</p>
          <p>01</p>
        </div>

        <div className="row">
          <div className="col">
            <p className="name">Chave pix</p>
            <p>{transfer?.key}</p>
          </div>

          <div className="col">
            <p className="name">Conta</p>
            <p>{transfer?.agency}</p>
          </div>
        </div>
      </section>

      {!bank?.contacts.some((c) => c.id == transfer?.bank) && (
        <section className="save">
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => {
                  setSaveContact(e.target.checked);
                }}
              />
            }
            label="Salvar contato"
          />
        </section>
      )}

      <ActionButton
        loading={loading}
        title="Confirmar"
        onClick={() => handleConfirm()}
      />
    </Container>
  );
};
