import { useEffect, useState } from "react";
import { ListParents } from "./list";
import "./styles.css";

export const Parents = () => {
  const [skinSelected, setSkin] = useState(1);

  const ScrollList = () => {
    const items = document.querySelectorAll(".listItem");
    const List = document.querySelector(".listWrap");
    let lastOffElem = -1;

    for (const item of items) {
      const ItemIndex = [...items].indexOf(item);

      if (
        item.getBoundingClientRect().top <=
          List!.getBoundingClientRect().top + 8 &&
        ItemIndex <= 2
      ) {
        item.classList.add("isVisible");
        lastOffElem = -1;
      } else if (
        item.getBoundingClientRect().top <=
        List!.getBoundingClientRect().top + 8
      ) {
        item.classList.remove("isVisible");
        lastOffElem = [...items].indexOf(item);
      } else {
        items.forEach((elem, index) => {
          index <= lastOffElem + 6 && index > lastOffElem
            ? elem.classList.add("isVisible")
            : elem.classList.remove("isVisible");
        });
      }
    }
  };

  const handleSelectParent = (index: number) => {
    const items = document.querySelectorAll(".listItem");

    if (!items[index].classList.contains("isVisible")) {
      return;
    }

    for (const i of items) {
      i.classList.remove("active");
    }

    items[index].classList.add("active");

    window.mta.triggerEvent("web:onChangeParent", index);
  };

  useEffect(() => {
    ScrollList();
    handleSelectParent(0);
  }, []);

  useEffect(() => {
    window.mta.triggerEvent("web:onChangeColor", skinSelected);
  }, [skinSelected]);

  return (
    <div className="parentsContainer pageIn">
      <div className="col">
        <label>PARENTESCO</label>

        <ul className="listWrap" onScroll={() => ScrollList()}>
          {ListParents.map((item, index) => {
            return (
              <li
                className="listItem"
                onClick={() => handleSelectParent(index)}
                key={index}
              >
                <p>{item.name}</p>

                <img src={item.img} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
