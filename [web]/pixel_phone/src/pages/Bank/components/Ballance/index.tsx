import React, { useState } from "react";
import { Container } from "./styles";

import EyeIcon from "@iconscout/react-unicons/icons/uil-eye";
import EyeSlashIcon from "@iconscout/react-unicons/icons/uil-eye-slash";

type BallanceProps = {
  ballance: number;
};

export const Ballance = ({ ballance }: BallanceProps) => {
  const [isViewValue, setViewValue] = useState(false);

  return (
    <Container>
      <p>Saldo em conta</p>

      <div className="value">
        {isViewValue ? (
          <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(ballance)}
          </p>
        ) : (
          <span />
        )}

        <button onClick={() => setViewValue(!isViewValue)}>
          {isViewValue ? (
            <EyeSlashIcon size={16} color="#575761" />
          ) : (
            <EyeIcon size={16} color="#575761" />
          )}
        </button>
      </div>
    </Container>
  );
};
