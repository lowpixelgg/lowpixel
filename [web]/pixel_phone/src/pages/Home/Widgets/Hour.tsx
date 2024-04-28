import { useEffect, useState } from "react";
import styled from "styled-components";

export const HourWidget = () => {
  const DateValues = {
    dia: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    mes: [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ],
  };

  const now = new Date();

  const zeroFill = (n: any) => {
    return ("0" + n).slice(-2);
  };

  const [renders, setRenders] = useState({
    date: `${DateValues.dia[now.getDay()]}, ${now.getDate()} de ${
      DateValues.mes[now.getMonth()]
    }`,
    hour: `${now.getHours()}:${zeroFill(now.getMinutes())}`,
  });

  const updateDates = () => {
    const date = new Date();

    setRenders({
      date: `${DateValues.dia[date.getDay()]}, ${date.getDate()} de ${
        DateValues.mes[date.getMonth()]
      }`,
      hour: `${date.getHours()}:${zeroFill(date.getMinutes())}`,
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      updateDates();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <h1>{renders.hour}</h1>

      <h3>{renders.date}</h3>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 40px;
    line-height: 36px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  h3 {
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-weight: 400;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
