// SSG - Posso passar mais configuracões para recarregar esse componente a cada x minutos por exemplo
export function getStaticProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}

export default function estatico2(props) {
  return (
    <div>
      <h1>Estatico #02</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}
