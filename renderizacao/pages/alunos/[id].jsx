export function getStaticPaths() {
  return {
    // fallback false indica que os IDs aceitos sao os 3 listados a baixo, caso tente acessar outro retorna um 404
    fallback: false,
    paths: [
      { params: { id: "107" } },
      { params: { id: "203" } },
      { params: { id: "13445" } },
    ],
  };
}

export async function getStaticProps(context) {
  const resp = await fetch(
    `http://localhost:3000/api/alunos/${context.params.id}`
  );
  const aluno = await resp.json();
  return {
    props: { aluno },
  };
}

export default function AlunoPorId(props) {
  const { aluno } = props;
  return (
    <div>
      <h1>Detalhes do Aluno</h1>
      <ul>
        <li>{aluno.id}</li>
        <li>{aluno.nome}</li>
        <li>{aluno.email}</li>
      </ul>
    </div>
  );
}
