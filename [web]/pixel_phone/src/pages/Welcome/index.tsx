import { useEffect } from "react";
import { Container } from "./styles";
import { motion } from "framer-motion";
import { RegisterMTAEvent } from "../../hooks/RegisterMTAEvent";
import { useNavigate } from "react-router-dom";
import { useMta } from "../../Contexts/GameContext";
import { useSocket } from "../../Contexts/SocketContext";

export const Welcome = () => {
  const navigate = useNavigate();
  const { addEventListener } = useMta();
  const { connect } = useSocket();

  useEffect(() => {
    RegisterMTAEvent("execBootRequest", {});
  }, []);

  addEventListener("execOnPhoneBoot", (data: { id: string }) => {
    if (data) {
      connect(data.id);
      navigate("/home");
    } else {
      navigate("/onboarding");
    }
  });

  return (
    <motion.div
      style={{ height: "100%", overflowY: "auto" }}
      initial={{ backgroundColor: "transparent" }}
      animate={{ backgroundColor: "#09090a" }}
      exit={{ backgroundColor: "#000000" }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      <Container>
        <img src={"src/assets/samsungA50.png"} alt="banner" />
      </Container>
    </motion.div>
  );
};
