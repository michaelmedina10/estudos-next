/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

export default function questao() {
  const [questao, setQuestao] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/questao/123")
      .then((response) => response.json())
      .then(setQuestao);
  }, []);

  return (
    <div>
      <h1>Questao</h1>
      <div>
        <span>{questao?.enunciado}</span>
        <ul>
          {questao?.respostas.map((resp) => (
            <li key={resp}>{resp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
