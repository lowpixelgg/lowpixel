import React, { useState } from "react";
import { ActionButton } from "../../components/ActionBtn";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Password } from "./Password";
import { useBank } from "../../../../Contexts/BankContext";

export type RegistrationData = {
  firstname: string;
  lastname: string;
  password: string;
  confirm: string;
};

export const Form = () => {
  const { registrationData, setRegistrationData } = useBank();

  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const handleSetPage = () => {
    if (
      registrationData.firstname.length > 1 ||
      registrationData.lastname.length > 1
    ) {
      setPage(1);
    }
  };

  const handleSubmit = () => {
    return navigate("/bank/auth/camera");
  };

  return (
    <>
      {page == 0 && (
        <motion.div
          className="form"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.4 }}
        >
          <div className="profile"></div>
          <input
            type="text"
            onChange={(e) =>
              setRegistrationData({
                ...registrationData,
                firstname: e.target.value,
              })
            }
            placeholder="Nome"
          />
          <input
            type="text"
            onChange={(e) => {
              setRegistrationData({
                ...registrationData,
                lastname: e.target.value,
              });
            }}
            placeholder="Sobrenome"
          />
          <ActionButton title="Continuar" onClick={handleSetPage} />
        </motion.div>
      )}

      {page == 1 && (
        <>
          <Password
            registrationData={registrationData}
            setPassword={setRegistrationData}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </>
  );
};
