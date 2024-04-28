import { useNavigate } from "react-router-dom";
import { ActionButton } from "../../components/ActionBtn";
import { useState } from "react";
import { RegisterMTAEvent } from "../../../../hooks/RegisterMTAEvent";
import { useMta } from "../../../../Contexts/GameContext";
import { useBank } from "../../../../Contexts/BankContext";

export const Form = ({ pixKey, keyType }: any) => {
  const navigate = useNavigate();
  const { bank, setTransferData } = useBank();
  const { addEventListener } = useMta();
  const [key, setKey] = useState<string>(pixKey ? pixKey : "");
  const [balance, setBalance] = useState<number>();
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleGetBank = (key: string) => {
    setLoading(true);
    RegisterMTAEvent("execGetBankByKey", { key: key });

    addEventListener("execGetBankByKey", (data) => {
      if (!data) {
        setLoading(false);
      }

      setTransferData({
        bank: data._id,
        firstname: data.firstname,
        lastname: data.lastname,
        description: description,
        key: key,
        agency: data.agency,
        value: balance!,
      });
    });
  };

  return (
    <div className="form">
      <div>
        <label htmlFor="key">
          {keyType} <span>*</span>
        </label>
        <input
          id="key"
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Insira a chave do jogador"
        />
      </div>

      <div>
        <label htmlFor="value">
          Valor <span>*</span>
        </label>

        <input
          id="value"
          type="number"
          value={balance}
          onChange={(e) => setBalance(Number(e.target.value))}
          placeholder="Valor à transferir"
        />
      </div>

      <div>
        <label htmlFor="descrição">Descrição</label>

        <textarea
          rows={4}
          id="descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição"
        />
      </div>

      <ActionButton
        title="Continuar"
        loading={loading}
        onClick={() => handleGetBank(key)}
      />
    </div>
  );
};
