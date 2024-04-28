import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "./styles";

import { Avatar } from "../../../../Components/Avatar";
import { ActionButton } from "../../components/ActionBtn";
import { useNavigate } from "react-router-dom";
import { useBank } from "../../../../Contexts/BankContext";

export const Login = () => {
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const { bank } = useBank();
  const navigate = useNavigate();

  const [userPass, setUserPass] = useState("");

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

  const hanldeFocusPass = () => {
    if (userPass.length < 4) {
      /* @ts-ignore */
      document.getElementById(`password${userPass.length}`).focus();
    } else {
      /* @ts-ignore */
      document.getElementById(`password3`).focus();
    }
  };

  useEffect(() => {
    if (userPass.length < 4) {
      hanldeFocusPass();
    }
  }, [userPass]);

  const handleKeyUpPass = (e: any) => {
    if (e.key === "Backspace") {
      setUserPass(userPass.slice(0, -1));
    }
  };

  const handleLogin = () => {
    if (bank?.password == userPass) {
      navigate("/bank/init");
    }
  };

  return (
    <Container>
      <img
        className="bankLogo"
        src={"src/assets/Bank-logoTransparent.png"}
        alt="bank"
      />

      <div className="form">
        <Avatar url={bank?.picture} size={56} />

        <div className="Account">
          <h3>{bank?.firstname}</h3>
          <p>Conta {bank?.agency}</p>
        </div>

        <div className="field">
          <label onClick={hanldeFocusPass}>Senha</label>

          <input
            id="password0"
            type="number"
            className={`${userPass.length > 0 && "filled"}`}
            maxLength={1}
            onFocus={hanldeFocusPass}
            value={userPass.charAt(0)}
            onChange={(e) => {
              setUserPass(e.target.value);
            }}
            onKeyUp={(e) => handleKeyUpPass(e)}
          />
          <input
            id="password1"
            type="number"
            className={`${userPass.length > 1 && "filled"}`}
            maxLength={1}
            onFocus={hanldeFocusPass}
            value={userPass.charAt(1)}
            onChange={(e) => setUserPass(userPass.concat(e.target.value))}
            onKeyUp={(e) => handleKeyUpPass(e)}
          />
          <input
            id="password2"
            type="number"
            className={`${userPass.length > 2 && "filled"}`}
            maxLength={1}
            onFocus={hanldeFocusPass}
            value={userPass.charAt(2)}
            onChange={(e) => setUserPass(userPass.concat(e.target.value))}
            onKeyUp={(e) => handleKeyUpPass(e)}
          />
          <input
            id="password3"
            type="number"
            className={`${userPass.length > 3 && "filled"}`}
            maxLength={1}
            onFocus={hanldeFocusPass}
            value={userPass.charAt(3)}
            onChange={(e) => {
              userPass.length === 3 &&
                setUserPass(userPass.concat(e.target.value));
            }}
            onKeyUp={(e) => handleKeyUpPass(e)}
          />
        </div>

        <ActionButton title="Entrar" onClick={handleLogin} />
      </div>
    </Container>
  );
};
