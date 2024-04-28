import { useContext } from "react";
import { Container } from "./styles";

import { FaBars, FaRegCircle, FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Contexts/GlobalContext";



export const BottomNav = () => {
  const { SistemState, notificationsHanldes } = useContext<any>(GlobalContext);
  const { controls, HandleY } = notificationsHanldes();

  const navigate = useNavigate();

  const handleGoBack = () => {
    if (HandleY.get() > -250) {
      controls.start("hidden");
      return;
    }

    navigate(-1);
  };

  const handleGoHome = () => {
    if (HandleY.get() > -250) {
      controls.start("hidden");
    }

    navigate("/home");
  };

  return (
    <Container bottomstyles={SistemState.bottomNavStyles}>
      <div className="background" />

      <button>
        <FaBars className="bars" />
      </button>
      <button onClick={() => handleGoHome()}>
        <FaRegCircle />
      </button>
      <button onClick={() => handleGoBack()}>
        <FaChevronLeft />
      </button>
    </Container>
  );
};
