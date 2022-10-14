import React from "react";
import Style from "../style/Header.module.css";

const Header = () => {
  return (
    <header className={Style.header}>
      <h2 className={Style.h2}>Emoji Searcher 🧐</h2>
      <h3 className={Style.h3}>Busca tu emoji favorito...</h3>
    </header>
  );
};

export default Header;
