// SSG - Posso passar mais configuracões para recarregar esse componente a cada x minutos por exemplo
// Metodo executado sempre no lado do servidor
export async function getStaticProps() {
  const resp = await fetch("http://localhost:3000/api/produtos");
  const produtos = await resp.json();

  return {
    props: {
      produtos,
    },
  };
}

export default function estatico4(props) {
  return (
    <div>
      <h1>Estatico #04</h1>
      <ul>
        {props.produtos.map((produto) => (
          <li key={produto.name}>{produto.name}</li>
        ))}
      </ul>
    </div>
  );
}
