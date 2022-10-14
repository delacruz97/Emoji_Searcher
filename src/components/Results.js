import React from "react";
import { SearchEmoji } from "../utils/SearchEmoji";
import Card from "./Card";
import Style from "../style/Results.module.css";

//Con destructuring obtengo el valor del estado que estoy pasandole a mi componenete "Results" desde "App"
const Results = ({ valueEmoji }) => {
  //le paso el "valueEmoji" a mi funcion "SearchEmoji()", la cual me va a permitir hacer la busqueda
  const arrayEmojin = SearchEmoji(valueEmoji);
  console.log(arrayEmojin);
  return (
    <section className={Style.grid}>
      {/* verifico con "&&" que el array de emojis no esta vasio y si no esta vasio me reccorre con un MAP*/}
      {arrayEmojin &&
        arrayEmojin.map((item) => (
          <Card key={item.title} title={item.title} emoji={item.symbol} />
        ))}
    </section>
  );
};

export default Results;
