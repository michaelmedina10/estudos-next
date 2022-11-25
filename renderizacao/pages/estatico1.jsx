import { useEffect, useState } from "react";

export default function estatico1() {
  //   const [num, setNum] = useState(0);

  //   useEffect(() => {
  //     setNum(Math.random());
  //   }, []);

  /**
   * Sem o UseEffetc e o useState a forma de renderizacao é statica, quando adiciono o UseEffect com o Math.random() virou SSR
   * E o conteudo será recarregado a cada requisição para o servidor
   * */
  return (
    <div>
      <h1>Estatico #01</h1>
      {/* <h2>{num}</h2> */}
    </div>
  );
}
