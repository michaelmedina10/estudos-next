/* eslint-disable react-hooks/rules-of-hooks */
import styles from '../../../styles/Jogo.module.css'
import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import Link from "next/link"
import { useRouter } from "next/router"

export default function jogo(){
    // useRouter hook de rotas do NEXT
    const router = useRouter()
    const [portas, setPortas] = useState([]);
    const [valido, setValido] = useState(false);

    // executado sempre que uma dependencia for alterada
    useEffect(() => {
      const numeroPortas = +router?.query.portas
      const portaComPresente = +router?.query.temPresente
      setPortas(criarPortas(numeroPortas, portaComPresente))
    }, [router?.query])

    // acionado sempre que o valor da porta for alterado, vamos usar para validacao
    useEffect(() => {
      const numeroPortas = +router?.query.portas
      const portaComPresente = +router?.query.temPresente
      const qtdePortasValidas = numeroPortas >= 3 && numeroPortas <= 100
      const comPresenteValido = portaComPresente >= 1 && portaComPresente <= numeroPortas
      setValido(qtdePortasValidas && comPresenteValido)
    }, [portas])

    function renderizarPortas() {
      return portas.map((porta) => {
        return (
          <Porta
            key={porta.numero}
            value={porta}
            onChange={(novaPorta) =>
              setPortas(atualizarPortas(portas, novaPorta))
            }
          />
        );
      });
    }
    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                {valido ?
                  renderizarPortas() :
                  <h2>Valores Inválidos</h2>}
            </div>
            <div className={styles.botoes}>
                <Link href='/'>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>)
}