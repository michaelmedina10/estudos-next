/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

export default function form() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [usuarios, setUsuarios] = useState([]);

  async function salvarUsuario() {
    await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify({ nome, idade }),
    });

    const resp = await fetch("/api/form");
    const usuarios = await resp.json(); // nao sabia dessa abordagem
    setUsuarios(usuarios);
  }

  function renderizarUsuarios() {
    return usuarios.map((usuario, i) => (
      <li key={i}>
        {usuario.nome} - {usuario.idade}
      </li>
    ));
  }

  return (
    <div>
      <h1>Integrando com API</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        value={idade}
        onChange={(e) => setIdade(+e.target.value)}
      />
      <button onClick={salvarUsuario}>Enviar</button>

      <ul>{renderizarUsuarios()}</ul>
    </div>
  );
}
