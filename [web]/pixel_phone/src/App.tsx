import { Container } from "./AppStyles";
import { Routing } from "./router/routes";
import { GlobalStyles } from "./global/GlobalStyles";
import { useLocation } from "react-router";
import { useContext } from "react";
import { GlobalContext } from "./Contexts/GlobalContext";
import { Statusbar } from "./Components/Statusbar";
import { BottomNav } from "./Components/BottomNavs";
import React from "react";
import { useNavigate } from "react-router-dom";
import MtaProvider from "./Contexts/GameContext";
import WhatsAppProvider from "./Contexts/WhatsAppContext";
import { SocketProvider } from "./Contexts/SocketContext";
import BankProvider from "./Contexts/BankContext";
import NotificationsProvider from "./Contexts/NotificationsContext";

export const App = () => {
  const { SistemState } = useContext<any>(GlobalContext);

  const Location = useLocation();

  return (
    <>
      <GlobalStyles />

      <Container path={Location.pathname}>
        <NotificationsProvider>
          {SistemState.showStatusbar && <Statusbar />}

          <SocketProvider>
            <MtaProvider>
              <BankProvider>
                <WhatsAppProvider>
                  <Routing />
                </WhatsAppProvider>
              </BankProvider>
            </MtaProvider>
          </SocketProvider>

          {SistemState.showBottomNav && <BottomNav />}
        </NotificationsProvider>
      </Container>
    </>
  );
};
