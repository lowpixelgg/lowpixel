import React from "react";
import { Route, Routes } from "react-router-dom";
import { ImageCam } from "./ImageCam";
import { TextCam } from "./TextCam";

export const StoryCam = () => {
  return (
    <Routes>
      <Route path="/" element={<ImageCam />} />

      <Route path="/text" element={<TextCam />} />
    </Routes>
  );
};
