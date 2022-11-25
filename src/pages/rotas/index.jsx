/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useRouter } from "next/router";

export default function rotas() {
  const router = useRouter();

  function navegacaoComParams() {
    router.push({
      pathname: "/rotas/params",
      query: {
        id: 25,
        nome: "Michael",
      },
    });
  }

  return (
    <div>
      <h1>Rotas Index</h1>
      <ul>
        <Link href="/rotas/params?nome=michael&id=25">
          <li>Params:</li>
        </Link>
        <Link href="/rotas/123/buscar">
          <li>Buscar</li>
        </Link>
        <Link href="/rotas/123/Mic">
          <li>Nome</li>
        </Link>
        <li onClick={() => router.push("/rotas/123/buscar")}>Usando Router</li>
        <li onClick={navegacaoComParams}>Usando Params com Router</li>
      </ul>
    </div>
  );
}
