import React, { useState } from "react";

import "./styles/Menu.scss";

const Menu = () => {
  const [open, setOpen] = useState(false)

  const toggleSideMenu = () => {
    setOpen(!open)
  };

  return (
    <>
      <div className="menu">
        <div className={`menu--side-menu ${open ? "open-sidemenu" : ""}`} onClick={toggleSideMenu}>
          <ul>
            <li>Básica</li>
            <li>Cientifica</li>
            <li>Conversión</li>
          </ul>
        </div>
      </div>
      <div className={`btn-options ${open ? "hide" : ""}`} onClick={toggleSideMenu}>
        <span>⚡</span>
      </div>
    </>
  );
};

export default Menu;
