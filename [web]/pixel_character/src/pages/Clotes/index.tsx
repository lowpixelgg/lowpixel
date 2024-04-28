import { Dispatch, SetStateAction } from "react";
import { Clothes } from "../../App";
import "./styles.css";

type Props = { 
  clothes: Clothes[],
  setClothe: Dispatch<React.SetStateAction<Clothes | undefined>>
}

export const Clotes = ({ clothes, setClothe }: Props) => {
  const handleSelectClote = (index: number) => {
    const items = document.querySelectorAll(".listItem");

    for (const i of items) {
      i.classList.remove("active");
    }
    items[index].classList.add("active");

    if (clothes[index]) {
      setClothe(clothes[index] as unknown as Clothes)
    }
  };

  return (
    <div className="clotesContainer pageIn">
      <div className="col">
        <label>Selecione uma roupa:</label>

        <div className="blockList">
          <ul className="listWrap">
            {clothes.map((item: Clothes, index) => {
              return (
                <li
                  className="listItem"
                  onClick={() => handleSelectClote(index)}
                  key={index}
                >
                  <div className="block">
                    <p>{item.id}</p>
                    <img src={"src/assets/clothe_icons/"+ item.icon +".png"} />
                  </div>

                  <p>{item.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
