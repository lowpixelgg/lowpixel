import { Avatar } from "../../../../Components/Avatar";
import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "./styled";
import EyeIcon from "@iconscout/react-unicons/icons/uil-eye";
import EyeSlashIcon from "@iconscout/react-unicons/icons/uil-eye-slash";
import { motion } from "framer-motion";
import { Card } from "./Card";
import { Pix } from "./Pix";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
import { useBank } from "../../../../Contexts/BankContext";

export const Dashboard = () => {
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const { bank } = useBank();
  const navigate = useNavigate();

  const [isViewBallance, setIsViewBallance] = useState(false);

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
        color: "#f2f2fa",
      },
    });
  }, []);

  return (
    <Container>
      <header>
        <div className="balance">
          <h3>Saldo em conta</h3>

          <div>
            {isViewBallance ? (
              <p>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(bank?.balance!)}
              </p>
            ) : (
              <span className="ballanceSkeleton" />
            )}

            <button onClick={() => setIsViewBallance(!isViewBallance)}>
              {isViewBallance ? (
                <EyeSlashIcon size={16} color="#f2f2fa" />
              ) : (
                <EyeIcon size={16} color="#f2f2fa" />
              )}
            </button>
          </div>
        </div>

        <Avatar url={bank?.picture} size={24} />
      </header>

      <div className="navs">
        <motion.button
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          className="navButton"
          transition={{ ease: "backIn", duration: 0.4, delay: 0.1 }}
          onClick={() => navigate("/bank/pix")}
        >
          <div className="icon">
            <img src={"src/assets/Bank-pixIcon.png"} alt="icon" />
          </div>

          <p>Pix</p>
        </motion.button>

        <motion.button
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          className="navButton disabled"
          transition={{ ease: "backIn", duration: 0.4, delay: 0.2 }}
        >
          <div className="icon disabled">
            <img src={"src/assets/Bank-cardIcon.png"} alt="icon" />
          </div>

          <p>Cartão</p>
        </motion.button>

        <motion.button
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          className="navButton disabled"
          transition={{ ease: "backIn", duration: 0.4, delay: 0.3 }}
        >
          <div className="icon disabled">
            <img src={"src/assets/Bank-loanIcon.png"} alt="icon" />
          </div>

          <p>Empréstimos</p>
        </motion.button>
      </div>

      <div className="sections">
        <Card />

        <Pix />
      </div>

      <Footer />
    </Container>
  );
};
