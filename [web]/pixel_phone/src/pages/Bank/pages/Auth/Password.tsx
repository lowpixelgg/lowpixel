import React, { Dispatch, SetStateAction, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../../components/ActionBtn";
import { motion } from "framer-motion";
import { RegistrationData } from "./Form";
import { RegisterMTAEvent } from "../../../../hooks/RegisterMTAEvent";

type PasswordProps = {
  setPassword: Dispatch<SetStateAction<RegistrationData>>;
  registrationData: RegistrationData;
  handleSubmit: () => void;
};

export const Password = ({
  registrationData,
  setPassword,
  handleSubmit,
}: PasswordProps) => {
  const navigate = useNavigate();

  const hanldeFocusPass = () => {
    if (registrationData.password.length < 4) {
      /* @ts-ignore */
      document
        .getElementById(`password${registrationData.password.length}`)
        .focus();
    } else {
      /* @ts-ignore */
      document.getElementById(`password3`).focus();
    }
  };

  const hanldeFocusConfirm = () => {
    if (registrationData.confirm.length < 4) {
      /* @ts-ignore */
      document
        .getElementById(`confirmPass${registrationData.confirm.length}`)
        .focus();
    } else {
      /* @ts-ignore */
      document.getElementById(`confirmPass3`).focus();
    }
  };

  useEffect(() => {
    if (registrationData.confirm.length < 4) {
      hanldeFocusConfirm();
    }
  }, [registrationData.confirm]);

  useEffect(() => {
    if (registrationData.password.length < 4) {
      hanldeFocusPass();
    }
  }, [registrationData.password]);

  const handleKeyUpPass = (e: any) => {
    if (e.key === "Backspace") {
      setPassword({
        ...registrationData,
        password: registrationData.password.slice(0, -1),
      });
    }
  };

  const handleKeyUpConfirm = (e: any) => {
    if (e.key === "Backspace") {
      setPassword({
        ...registrationData,
        confirm: registrationData.confirm.slice(0, -1),
      });
    }
  };

  return (
    <motion.div
      className="password"
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.4 }}
    >
      <div className="field">
        <label onClick={hanldeFocusPass}>Senha</label>

        <input
          id="password0"
          type="number"
          className={`${registrationData.password.length > 0 && "filled"}`}
          maxLength={1}
          onFocus={hanldeFocusPass}
          value={registrationData.password.charAt(0)}
          onChange={(e) => {
            setPassword({ ...registrationData, password: e.target.value });
          }}
          onKeyUp={(e) => handleKeyUpPass(e)}
        />
        <input
          id="password1"
          type="number"
          className={`${registrationData.password.length > 1 && "filled"}`}
          maxLength={1}
          onFocus={hanldeFocusPass}
          value={registrationData.password.charAt(1)}
          onChange={(e) => {
            setPassword({
              ...registrationData,
              password: registrationData.password.concat(e.target.value),
            });
          }}
          onKeyUp={(e) => handleKeyUpPass(e)}
        />
        <input
          id="password2"
          type="number"
          className={`${registrationData.password.length > 2 && "filled"}`}
          maxLength={1}
          onFocus={hanldeFocusPass}
          value={registrationData.password.charAt(2)}
          onChange={(e) => {
            setPassword({
              ...registrationData,
              password: registrationData.password.concat(e.target.value),
            });
          }}
          onKeyUp={(e) => handleKeyUpPass(e)}
        />
        <input
          id="password3"
          type="number"
          className={`${registrationData.password.length > 3 && "filled"}`}
          maxLength={1}
          onFocus={hanldeFocusPass}
          value={registrationData.password.charAt(3)}
          onChange={(e) => {
            registrationData.password.length === 3 &&
              setPassword({
                ...registrationData,
                password: registrationData.password.concat(e.target.value),
              });
          }}
          onKeyUp={(e) => handleKeyUpPass(e)}
        />
      </div>

      <div className="field">
        <label onClick={() => hanldeFocusConfirm()}>Confirmar senha</label>

        <input
          id="confirmPass0"
          type="number"
          className={`${registrationData.confirm.length > 0 && "filled"}`}
          maxLength={1}
          onFocus={hanldeFocusConfirm}
          value={registrationData.confirm.charAt(0)}
          onChange={(e) => {
            setPassword({ ...registrationData, confirm: e.target.value });
          }}
          onKeyUp={(e) => handleKeyUpConfirm(e)}
        />
        <input
          id="confirmPass1"
          type="number"
          className={`${registrationData.confirm.length > 1 && "filled"}`}
          maxLength={1}
          onFocus={hanldeFocusConfirm}
          value={registrationData.confirm.charAt(1)}
          onChange={(e) => {
            setPassword({
              ...registrationData,
              confirm: registrationData.confirm.concat(e.target.value),
            });
          }}
          onKeyUp={(e) => handleKeyUpConfirm(e)}
        />
        <input
          id="confirmPass2"
          type="number"
          className={`${registrationData.confirm.length > 2 && "filled"}`}
          maxLength={1}
          onFocus={hanldeFocusConfirm}
          value={registrationData.confirm.charAt(2)}
          onChange={(e) => {
            setPassword({
              ...registrationData,
              confirm: registrationData.confirm.concat(e.target.value),
            });
          }}
          onKeyUp={(e) => handleKeyUpConfirm(e)}
        />
        <input
          id="confirmPass3"
          type="number"
          className={`${registrationData.confirm.length > 3 && "filled"}`}
          maxLength={1}
          onFocus={hanldeFocusConfirm}
          value={registrationData.confirm.charAt(3)}
          onChange={(e) => {
            registrationData.confirm.length === 3 &&
              setPassword({
                ...registrationData,
                confirm: registrationData.confirm.concat(e.target.value),
              });
          }}
          onKeyUp={(e) => handleKeyUpConfirm(e)}
        />
      </div>

      <ActionButton title="Criar conta" onClick={handleSubmit} />
    </motion.div>
  );
};
