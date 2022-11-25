// SSG - Posso passar mais configuracões para recarregar esse componente a cada x minutos por exemplo
export function getStaticProps() {
  return {
    revalidate: 7, // Avisa o React para recarregar o conteudo vindo do servidor a cada 7 segundos
    props: {
      numero: Math.random(),
    },
  };
}

export default function estatico3(props) {
  return (
    <div>
      <h1>Estatico #03</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}
