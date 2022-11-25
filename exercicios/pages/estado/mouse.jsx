import { useState } from "react";

export default function mouse() {
  const [x, setX] = useState(0);

  const arrayY = useState(0);
  let y = arrayY[0];
  let alterarY = arrayY[1];

  const estilo = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh",
  };

  function quandoMover(e) {
    setX(e.clientX);
    alterarY(e.clientY);
  }
  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <div>Eixo X: {x}</div>
      <div>Eixo Y: {y}</div>
    </div>
  );
}
