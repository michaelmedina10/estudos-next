function acao1() {
  console.log("ACAO1");
}

export default function botao() {
  function acao3(event) {
    console.log(event);
  }

  return (
    <div>
      <button onClick={acao1}>Click #01</button>
      <button onClick={() => console.log("ACAO2")}>Click #02</button>
      <button onClick={(e) => acao3(e)}>Click #03</button>
    </div>
  );
}
