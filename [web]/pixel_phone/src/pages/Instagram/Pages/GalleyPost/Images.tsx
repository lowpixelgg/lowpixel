import React from "react";

const imgsList = Array(3).fill("");

export const Images = ({ selectedImgs, setSelectedImgs }: any) => {
  const handleSelectImg = (id: any) => {
    if (selectedImgs.includes(id)) {
      setSelectedImgs(
        selectedImgs.filter((item: any) => {
          return item !== id;
        })
      );
    } else {
      setSelectedImgs([...selectedImgs, id]);
    }
  };

  return (
    <div className="imagesWrap">
      {imgsList.map((item, index) => {
        return (
          <ImgItem
            selected={selectedImgs.includes(index)}
            order={
              selectedImgs.includes(index)
                ? selectedImgs.indexOf(index) + 1
                : null
            }
            onClick={() => handleSelectImg(index)}
            key={index}
          />
        );
      })}
    </div>
  );
};

const ImgItem = ({ selected, order, onClick }: any) => {
  return (
    <div className="item" onClick={onClick}>
      <img src="src/assets/Images/placeholder5.png" alt="gallery" />

      <span className={`radio ${selected && "selected"}`}>
        {selected ? order : null}
      </span>
    </div>
  );
};
