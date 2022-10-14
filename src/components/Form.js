import React, { useState } from "react";
import Style from "../style/Form.module.css";

//Con destructuring obtengo el valor del estado que estoy pasandole a mi componenete "Form" desde "App"
const Form = ({ setValueEmoji }) => {
  //Me creo un ESTADO para recuperar el valor de mi INPUT
  const [value, setValue] = useState("");
  //este estado me valida el error para cuando preciono la tecla enter, cuando no hay nada en mi input, para que no se envie vasio.
  const [error, setError] = useState(false);

  //Esta funcion setea mi estado (lo reinicia )
  const handleSearch = (e) => {
    //prevengo la reaccion de recarga que tiene por defecto el onSubmit
    e.preventDefault();

    //esta condicion me dice que si "value" es igual que vacio " ", entonces me setea (actualiza) el "serError" a "true"
    if (value === "") {
      setError(true);
      //con el setTimeout, lo que hago es que el mensaje se muestre 2 segundos y se borre
      setTimeout(() => setError(false), 2000);
      //poniendo el return, lo que hago es cortar la ejecucion para que no siga ejecutando nada mas.
      return;
    }
    setValueEmoji(value);
    console.log(value);
  };

  /* funcion allEmojis de mi boton */
  const allEmojis = () => {
    setValueEmoji("");
  };

  return (
    <section className={Style.section}>
      {/* Al momento de dar ENTER  en mi formulario, la misma llamara ala funcion "onSubmit", la cual llamara a la funcion(handleSearch) */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="some emoji word..."
          //seteo el valor de mi input (actualizo su valor)
          onChange={(e) => setValue(e.target.value)}
          className={Style.input}
        />
        <button type="button" onClick={allEmojis} className={Style.btn}>
          All
        </button>
      </form>
      {/* si el "error" es true, recien me mostraria el mensaje */}
      {error && <p style={{ color: "red" }}>Input is empy</p>}
    </section>
  );
};

export default Form;
