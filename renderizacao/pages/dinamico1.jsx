/*
 * SSR - SERVER SIDE RENDERING
 * REDERIZACAO DINAMICA, A CADA ATUALIZACAO DE PAGINA TODAS REQUISICOES DAQUELA PAGINA SAO FEITAS NOVAMENTE
 */

export function getServerSideProps() {
  return {
    props: { numero: Math.random() },
  };
}

export default function Dinamico1(props) {
  return (
    <div>
      <h1>Dinâmico #01</h1>
      <span>{props.numero}</span>
    </div>
  );
}
