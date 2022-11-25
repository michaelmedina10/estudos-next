import { useState } from "react";

export default function formulario() {
  const [valor, setValor] = useState("inicial");
  let [cont, setCont] = useState(1);
  const estilo = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  function alteraInput(valor) {
    let newValor = valor;
    console.log(newValor);
    setValor(newValor);
  }

  function limparInputInicialmente(e) {
    if (cont === 1) {
      setValor("");
      setCont("");
    }
  }
  return (
    <div>
      <div style={estilo}>
        <label style={{ margin: "10px" }} htmlFor="input">
          Informe Um Valor Qualquer
        </label>
        <input
          type="text"
          name="input"
          value={valor}
          onChange={(e) => alteraInput(e.target.value)}
          onClick={limparInputInicialmente}
        />
      </div>
    </div>
  );
}
