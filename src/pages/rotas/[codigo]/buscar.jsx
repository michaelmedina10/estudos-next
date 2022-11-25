/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import Link from "next/link";

export default function buscar() {
  const router = useRouter();
  console.log(router);
  const codigo = router.query.codigo;

  return (
    <div>
      <h1>rotas / {codigo} / buscar</h1>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  );
}
