/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import Link from "next/link";

// Acessa query string da mesma forma
export default function params() {
  const router = useRouter();
  console.log(router);
  const nome = router.query.nome;
  const id = router.query.id;
  return (
    <div>
      <h1>
        rotas / params?nome={nome}&id={id}
      </h1>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  );
}
