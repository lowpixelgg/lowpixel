import React from "react";

export const LimitValue = ({ newLimit, setNewLimit, limitRange }: any) => {
  const handleChange = (e: any) => {
    const value = Math.min(limitRange.max, Number(e.target.value));

    setNewLimit(value);
  };

  return (
    <div className="input">
      <label htmlFor="value">
        Limite <span>*</span>
      </label>

      <input
        id="value"
        type="number"
        maxLength={4}
        value={newLimit}
        onChange={(e: any) => handleChange(e)}
        placeholder="Novo limite desejado"
      />
    </div>
  );
};
