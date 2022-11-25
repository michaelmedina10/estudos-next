export default function repeticao1() {
  const listaAprovados = ["Joao", "Maria", "Ana", "Josefina", "Fe"];

  return (
    <ul>
      {listaAprovados.map((nome, index) => (
        <li key={index}>{nome}</li>
      ))}
    </ul>
  );
}
