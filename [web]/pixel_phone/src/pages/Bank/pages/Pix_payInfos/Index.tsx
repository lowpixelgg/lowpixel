import { GlobalContext } from "../../../../Contexts/GlobalContext";
import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../../components/ActionBtn";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export const PixPayInfos = () => {
  const navigate = useNavigate();
  const { SistemDispatch } = useContext<any>(GlobalContext);

  const [headerTitle, setHeaderTitle] = useState("Pagar");
  const [buttonTitle, setButtonTitle] = useState("Copiar código");
  const [isload, setIsLoad] = useState(false);

  // user example === "evol"
  const payment = {
    owner: "sow",
    isPaid: false,
  };

  const validatePayment = () => {
    switch (payment.owner) {
      case "evol":
        setHeaderTitle("Cobrar");

        if (payment.isPaid) {
          setButtonTitle("Inicio");
        } else {
          setButtonTitle("Copiar código");
        }
        break;

      default:
        setHeaderTitle("Pagar");

        if (payment.isPaid) {
          setButtonTitle("Inicio");
        } else {
          setButtonTitle("Confirmar");
        }
        break;
    }
  };

  const handleConfirmPayment = () => {
    setIsLoad(true);

    let timer = setTimeout(() => {
      navigate("/bank/confirmPay");

      clearTimeout(timer);
    }, 1000);
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

    validatePayment();
  }, []);

  return (
    <Container>
      <Header title={headerTitle} left={{ type: "back" }} />

      <section>
        <h3>Pagamento</h3>

        <div className="row">
          <p className="name">Pagador</p> <p>Evol</p>
        </div>

        <div className="row">
          <p className="name">Rg</p> <p>56456rgfdf23</p>
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
          <p className="name">Valor</p> <p>R$ 12.000,00</p>
        </div>

        <div className="row">
          <div className="col">
            <p className="name">Descrição</p>
            <p>Pagamento de tal item para o cara la</p>
          </div>
        </div>
      </section>

      <section className="save">
        <FormControlLabel control={<Checkbox />} label="Salvar contato" />
      </section>

      <ActionButton
        title={buttonTitle}
        loading={isload}
        onClick={() => handleConfirmPayment()}
      />
    </Container>
  );
};
