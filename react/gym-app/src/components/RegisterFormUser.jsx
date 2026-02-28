import { useState } from "react";
import {
  styleFill,
  styleForm,
  styleInput,
  styleRow,
  styleButton,
} from "../styles/formStyles";

function RegisterFormUser({ users, setUsers, setPayments }) {
  const [name, setName] = useState("");
  const [saldo, setSaldo] = useState(0);
  const [plan, setPlan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name,
      plan,
      saldo,
    };
    setUsers([...users, newUser]);
    setPayments((prev) => [
      ...prev,
      {
        id: `P${Date.now()}`,
        monto: saldo,
        fecha: new Date().toISOString().split("T")[0], //toLocaleDateString("es-BO"),
        estado: "Pagado",
        usuario: newUser,
        concepto: "Primer Pago de Inscripcion",
      },
    ]);
    setName("");
    setSaldo(saldo);
    setPlan("Principiante");
  };
  return (
    <form onSubmit={handleSubmit} className="forms" style={styleForm}>
      <h2>Registro de Usuario 🤵</h2>
      <div style={{ padding: "15px" }}>
        <div style={styleRow}>
          <div style={styleFill}>
            <label htmlFor="">Nombre</label>
            <input
              style={styleInput}
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div style={styleFill}>
            <label htmlFor="">Saldo Inicial</label>
            <input
              style={styleInput}
              type="number"
              placeholder="Saldo"
              onChange={(e) => setSaldo(e.target.value)}
              required
            />
          </div>
        </div>

        <div style={styleFill}>
          <label htmlFor="">Plan</label>
          <select
            style={{ ...styleInput, height: "30px" }}
            name=""
            id=""
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            required
          >
            <option value="">Seleccione...</option>
            <option value="Principiante">Principiante</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </div>

        <button style={styleButton} type="submit">
          Registrar
        </button>
      </div>
    </form>
  );
}

export default RegisterFormUser;
