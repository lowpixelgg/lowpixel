import "./index.css";
import "./app.css";
import { Icon } from "@iconify/react";
import { InitialForm } from "./pages/InitialForm";
import { useEffect, useState } from "react";
import { Parents } from "./pages/parents";
import { Clotes } from "./pages/Clotes";
import { useMta } from "./contexts/GameContext";
import { Container } from "./styles";

export type formDataTypes = {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  gender?: "masculine" | "feminine";
};

export type Clothes = {
  id: number;
  icon: string;
  name: string;
  type: string;
};

function App() {
  const [page, setPage] = useState<number>(0);
  const [formData, setFormData] = useState<formDataTypes>({
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "masculine",
  });

  const [clothes, setBodyClothes] = useState<Clothes[]>([]);
  const [clothe, setClothe] = useState<Clothes>();
  const [ fade, setFade ] = useState<boolean>(false);

  const formValues = Object.values(formData);
  const allFieldsFilled = formValues.every(
    (value) => value !== null && value !== undefined && value !== ""
  );

  const { RegisterMTAEvent, addEventListener } = useMta();

  const handleConfirm0 = () => {
    // @ts-ignore
    if (formData.birthDate > 60 || formData.birthDate < 18) {
      RegisterMTAEvent("web:onError", {
        stage: 0,
        errmsg: "pixel_lobby:larger_age",
      });

      return;
    }

    if (allFieldsFilled) {
      setPage(1);
    } else {
      RegisterMTAEvent("web:onError", {
        stage: 0,
        errmsg: "pixel_lobby:empty_fields",
      });
    }
  };

  const handleStage2 = () => {
    setPage(2);
    RegisterMTAEvent("web:onCompleteStage2", formData);
  };

  const handleFinish = () => {
    RegisterMTAEvent("web:onComplete", formData);
  };

  addEventListener("showAvailableClothes", (data) => {
    setPage(3);
    setBodyClothes(data.clothes);
  });

  addEventListener("bodySelector", () => {
    setPage(2);
  });



  useEffect(() => {
    if (clothe?.id && clothe.type) {
      RegisterMTAEvent("web:onSelectClothe", clothe);
    }
  }, [clothe]);

  useEffect(() => {
    // @ts-ignore
    if (formData.firstName?.length > 0 || formData.lastName?.length > 0) {
      RegisterMTAEvent("web:redrawPlate", formData);
    }
  }, [formData])

  return (
    <Container opacity={true}>
      <main className="main">
        <h1>
          CRIAR <br /> PERSONAGEM
        </h1>

        <div className="container">
          <div className="left">
            {page === 0 && (
              <InitialForm setFormData={setFormData} formData={formData} />
            )}

            {page === 1 && <Parents />}

            {page === 3 && <Clotes clothes={clothes} setClothe={setClothe} />}
          </div>

          <aside className="aside">
            <div className={`${page === 0 && "active"} icon head`}>
              <Icon icon="ic:baseline-face" fontSize={24} color="#f8f9fa" />
            </div>
            <div className={`${page === 1 && "active"} icon`}>
              <Icon
                icon="icon-park-outline:family"
                fontSize={24}
                color="#f8f9fa"
              />
            </div>
            <div className={`${page === 2 && "active"} icon`}>
              <Icon
                icon="emojione-monotone:womans-clothes"
                fontSize={24}
                color="#f8f9fa"
              />
            </div>
          </aside>
        </div>

        <div className="action">
          {page < 2 && (
            <>
              <button
                onClick={() => {
                  page === 0 && handleConfirm0();
                  page === 1 && handleStage2();
                }}
              >
                CONTINUAR
              </button>
            </>
          )}

          {page == 2 && (
            <button onClick={() => handleFinish()}>FINALIZAR</button>
          )}
        </div>
      </main>
    </Container>
  );
}

export default App;
