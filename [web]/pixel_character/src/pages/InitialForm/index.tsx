import React from "react";
import * as Styles from "./styles";
import { Icon } from "@iconify/react";
import { formDataTypes } from "../../App";

type genderOpts = "masculine" | "feminine" | undefined;
type Props = {
  formData: formDataTypes;
  setFormData: React.Dispatch<React.SetStateAction<formDataTypes>>;
};

export const InitialForm = ({ formData, setFormData }: Props) => {
  const regex = /^[\p{L}´´~~ç]+$/u;

  
  const handleSelectGender = (opt: genderOpts) => {

    mta.triggerEvent("web:changeGender", opt);
    setFormData({ ...formData, gender: opt });    
  };

  const handleClick = (e: any) => {
    e.preventDefault(); 
  }


  return (
    <Styles.InitialForm>
      <Styles.Row>
        <label htmlFor="firstName">Primeiro Nome</label>
        <input
          value={formData.firstName}
          onChange={(e) => {
            if (regex.test(e.target.value) || e.target.value === "") {
              setFormData({ ...formData, firstName: e.target.value });
            }
          }}
          type="text"
          id="firstName"
          placeholder="Nome"
          maxLength={15}
          className={formData.firstName && formData.firstName.length > 0 ? 'active' : ''}
        />
      </Styles.Row>

      <Styles.Row>
        <label htmlFor="lastName">Ultimo Nome</label>
        <input
          value={formData.lastName}
          onChange={(e) => {
            if (regex.test(e.target.value) || e.target.value === "") {
              setFormData({ ...formData, lastName: e.target.value })
            }
          }
          }
          type="text"
          id="lastName"
          maxLength={15}
          placeholder="Sobrenome"
          className={formData.lastName && formData.lastName.length > 0 ? 'active' : ''}
        />
      </Styles.Row>

      <Styles.Row>
        <label htmlFor="birth">Idade</label>
        <input
          type="text"
          id="birth"
          maxLength={2}
          onClick={handleClick}
          placeholder="Idade"
          value={formData.birthDate}
          onChange={(e) =>
            setFormData({ ...formData, birthDate: e.target.value })
          }
          className={formData.birthDate && formData.birthDate?.length > 0 ? 'active' : ''}
        />
      </Styles.Row>

      <Styles.RowCol>
        <button
          onClick={() => handleSelectGender("masculine")}
          className={formData.gender === "masculine" ? "active" : ""}
        >
          <Icon
            icon="tabler:gender-male"
            fontSize={24}
            color={formData.gender === "masculine" ? "#f8f9fa" : "#393A41"}
          />
        </button>

        <label className={formData.gender === "masculine" ? "active" : ""}>Gênero Masculino</label>

        <button
          onClick={() => handleSelectGender("feminine")}
          className={formData.gender === "feminine" ? "active" : ""}
        >
          <Icon
            icon="tabler:gender-female"
            fontSize={24}
            color={formData.gender === "feminine" ? "#f8f9fa" : "#393A41"}
          />
        </button>

        <label className={formData.gender === "feminine" ? "active" : ""}>Gênero Feminino</label>
      </Styles.RowCol>

      <label>Seu documento:</label>
      <Styles.Row>
        <Styles.IdCard>
          <div className="Content">
            <div className="contentRow1">
              <h3>LOS SANTOS</h3>
              <span className="line"></span>
            </div>
            <div className="contentRow2">
              <h2>INTERNATIONAL PASSPORT</h2>
            </div>
            <div className="contentRow3">
              <ul>
                <li>
                  Nome: <strong>{formData.firstName || "Jhon"}</strong>
                </li>
                <li>
                  SOBRENOME: <strong>{formData.lastName || "Doe"}</strong>
                </li>
                <li>
                  AGE: <strong>{formData.birthDate && formData.birthDate || "N/A"}</strong>
                </li>
                <li>
                  SEXO: <strong>{formData.gender == "masculine" ? "Masculino" : "Feminino" || "N/A"}</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="id">
            <p>
              {
                "48f69025-9ff5-4122-9c55-f842eae4b17b-48f69025-9ff5-4122-9c55-f842eae4b17b-48f69025-9ff5-4122-9c55-f842eae4b17b-48f69025-9ff5-4122-9c55-f842eae4b17b-48f69025-9ff5-4122-9c55-f842eae4b17b-48f69025-9ff5-4122-9c55-f842eae4b17b-48f69025-9ff5-4122-9c55-f842eae4b17b"
              }
            </p>
          </div>
        </Styles.IdCard>
      </Styles.Row>
    </Styles.InitialForm>
  );
};
