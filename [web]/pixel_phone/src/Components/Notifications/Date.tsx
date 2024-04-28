export const DateView = () => {
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
  const date = new Date();
  const RenderDate = `${DateValues.dia[date.getDay()]}., ${date.getDate()} de ${
    DateValues.mes[date.getMonth()]
  }`;

  return <div className="date">{RenderDate}</div>;
};
