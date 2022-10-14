import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Results from "./components/Results";
import Style from "./style/App.module.css";

function App() {
  //Este estado = "setValueEmoji" lo envio a mi componenete "Form" por "props"
  //Este estado = "valueEmoji" lo envio a mi componenete "Results" por "props"
  const [valueEmoji, setValueEmoji] = useState("fruit");

  /* Esto me sirve para cambiar en modo dia/noche */

  return (
    <div className={Style.container}>
      <Header />
      <Form setValueEmoji={setValueEmoji} />
      <Results valueEmoji={valueEmoji} />
      <Footer />
    </div>
  );
}

export default App;
