import Cartao from "../components/Cartao";
import styles from "../styles/Formulario.module.css";
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)


  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="Qtde Portas?"
            value={qtdePortas}
            onChange={novaQuantidade => setQtdePortas(novaQuantidade)}/>
        </Cartao>
      </div>
      <div>
        <Cartao>
        <EntradaNumerica
            text="Porta com Presente"
            value={comPresente}
            onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}/>
        </Cartao>
        <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
          <Cartao bgColor="#28a085">
            <h2 className={styles.link}>Iniciar</h2>
          </Cartao>
        </Link>
      </div>
    </div>
  );
}
