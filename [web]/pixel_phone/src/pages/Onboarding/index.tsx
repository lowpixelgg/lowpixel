import React, { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { Page1 } from "./First";
import { Page2 } from "./Connectivity";
import { Page3 } from "./Password";
import { Page4 } from "./PosConected";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { useMta } from "../../Contexts/GameContext";
import { RegisterMTAEvent } from "../../hooks/RegisterMTAEvent";


type Network = {
  id: string;
  mghz: number;
  name: string;
}


export const Onboarding = () => {
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const [page, setPage] = useState(1);
  const [selectedNet, setNet] = useState<Network | null>();


  const [networks, setNetworks] = useState<Network[] | []>([]);

  const { addEventListener } = useMta();
  
  
  addEventListener("receiveNetworks", (nets) => {
    setNetworks(nets)
  });



  const [conectedNet, setConectNet] = useState<string>();

  const handleSelectNet = (value: Network) => {
    setNet(value);
    
    setPage(3);
  };

  const handleConectNet = (value: Network, password: string) => {
    RegisterMTAEvent("execPhoneConnection", {network: value.id, password: password});

    addEventListener("execPhoneConnectionCB", (isConnected) => {
      if (isConnected) {
        setConectNet(value.name);
      }

      setPage(2);
    })
  };


  useEffect(() => {
    SistemDispatch({ type: "showStatusbar" });
    SistemDispatch({
      type: "setStatusBarStyle",
      values: {
        background: "#f2f2fa",
        color: "#29292E",
      },
    });
  }, []);

  return (
    <motion.div
      animate={{ backgroundColor: "#f2f2fa" }}
      exit={{ backgroundColor: "#101011" }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
      style={{ height: "100%", backgroundColor: "#f2f2fa" }}
    >
      <Container>
        <AnimatePresence>
          {page === 1 && <Page1 key={1} setPage={setPage} />}

          {page === 2 && (
            <Page2
              key={2}
              setPage={setPage}
              conectedNet={conectedNet}
              networks = {networks}
              handle={handleSelectNet}
            />
          )}

          {page === 3 && (
            <Page3
              key={3}
              handleConect={handleConectNet}
              network={selectedNet}
            />
          )}

          {page === 4 && <Page4 key={4} />}
        </AnimatePresence>

        {page > 1 && (
          <div className="nav">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 4 ? true : false}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="next"
              disabled={!conectedNet || page === 4 ? true : false}
              onClick={() => setPage(4)}
            >
              Proximo
            </button>
          </div>
        )}
      </Container>
    </motion.div>
  );
};
