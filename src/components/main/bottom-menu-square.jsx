import React from "react";
import "../../styles/Bottom_menu.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
const Bottom_Menu_Square = ({ icon, menu_words, menu_navigation }) => {
    const navigate = useNavigate()
  return (
      <div className="Bottom_Menu_Square" onClick={() => navigate(menu_navigation)}>
        <div className="icon">
          <img src={icon}></img>
        </div>
        <div className="bottom_menu_text">{menu_words}</div>
      </div>
  );
};

export default Bottom_Menu_Square;
