/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import Link from "next/link";

export default function nome() {
  const router = useRouter();
  const nome = router.query.nome;
  return (
    <div>
      <h1>Nome: {nome}</h1>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  );
}
