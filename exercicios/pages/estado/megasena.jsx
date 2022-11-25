import { useState, useEffect } from "react";
import NumeroDisplay from "../../components/NumeroDisplay";
import { mega } from "../../functions/mega";

export default function megasena() {
  const [qtde, setQtde] = useState(6);
  const [numeros, setNumeros] = useState([]);

  // ajudar a mudar o estado de um componente sem um evento e sem loop infinito
  useEffect(() => {
    setNumeros(mega());
  }, []);

  function renderizarNumeros() {
    return numeros.map((numero) => (
      <NumeroDisplay key={numero} numero={numero} />
    ));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Mega Sena</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {renderizarNumeros()}
      </div>
      <div>
        <input
          type="number"
          min={6}
          max={60}
          value={qtde}
          onChange={(ev) => setQtde(+ev.target.value)}
        />
        <button onClick={() => setNumeros(mega(qtde))}>Gerar Aposta</button>
      </div>
    </div>
  );
}
