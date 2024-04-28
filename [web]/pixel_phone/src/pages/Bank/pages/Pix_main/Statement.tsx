import React from "react";
import { useBank } from "../../../../Contexts/BankContext";

export const Statement = () => {
  const { bank } = useBank();

  const luaTime = (luaTime: number): string => {
    const date = new Date(luaTime * 1000);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <ul className="statement--list">
      {bank?.extract.map((transaction) => (
        <li>
          <div>
            <p>
              {transaction.from === bank._id ? "Enviado" : "Recebido"}
              {transaction.to == bank._id && <> - {transaction.name}</>}
            </p>
            <span>{luaTime(transaction.createdAt)}</span>
          </div>

          <p className="value">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(transaction.value)}
          </p>
        </li>
      ))}
    </ul>
  );
};
