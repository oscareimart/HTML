import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);
  const [operacion, setOperacion] = useState("sumar");
  const [show, setShow] = useState(false);

  let valor = 12;

  return (
    <div>
      <button></button>
      <h2>Resultado: {contador}</h2>
      <h1>Var: {valor}</h1>
      <button onClick={() => (valor = 33)}>asd</button>
      <h3>
        Operacion actual: <span>{operacion.toLocaleUpperCase()}</span>
      </h3>

      <button onClick={() => setOperacion("sumar")}>➕</button>
      <button onClick={() => setOperacion("restar")}>➖</button>

      <br />
      <br />
      <button
        onClick={() =>
          setContador(operacion === "sumar" ? contador + 1 : contador - 1)
        }
      >
        Calcular
      </button>

      <br />

      <button className="btnShow" onClick={() => setShow}>
        {show ? "🙈" : "🙈"}
      </button>

      <br />
      <br />

      <input type="password" />
    </div>
  );
}

export default Contador;
