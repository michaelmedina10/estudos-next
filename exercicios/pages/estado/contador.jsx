import { useState } from "react";
import styles from "../../styles/Contador.module.css";
export default function contador() {
  const [numero, setNumero] = useState(0);

  const inc = () => setNumero(numero + 1);
  // const dec = () => setNumero(numero - 1);

  return (
    <div className={styles.contador}>
      <div>
        <h1>Contador</h1>
      </div>
      <span>Valor: {numero}</span>
      <button onClick={inc}>+</button>
      <button onClick={() => setNumero(numero - 1)}>-</button>
    </div>
  );
}
