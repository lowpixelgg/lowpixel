import React from "react";
import Images from "@iconscout/react-unicons/icons/uil-images";
import { useTheme } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

export const Tabs = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <div className="tabs">
      <button
        onClick={() => navigate("/instagram/galleryPost")}
        className="gallery"
      >
        <Images size={20} color={theme.text20} />
      </button>

      <nav>
        <NavLink to="/instagram/storyCam">Story</NavLink>

        <NavLink to="/instagram/cam">Publicação</NavLink>

        <NavLink to="/instagram/liveCam">Live</NavLink>
      </nav>
    </div>
  );
};
