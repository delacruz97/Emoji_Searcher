import React, { useState } from "react";
import Style from "../style/Card.module.css";

const Card = ({ title, emoji }) => {
  //este estado lo uso para poder mostrar un mensaje cuando se copia el emoji
  const [copi, setCopy] = useState(false);
  /* esta funcion me sirve para poder copiar el emojin */
  const handleCopy = () => {
    navigator.clipboard.writeText(emoji);
    setCopy(true);
    /* utilizo un setTimeout, para que despues de cierto tiempo se me borre el mensaje de copiado */
    setTimeout(() => setCopy(false), 3000);
  };
  return (
    <article className={Style.card}>
      <p className={Style.emoji} onClick={handleCopy}>
        {emoji}
      </p>
      <h5 className={Style.title}>{title}</h5>
      {copi && <p className={Style.copie}>Copied!</p>}
    </article>
  );
};

export default Card;
