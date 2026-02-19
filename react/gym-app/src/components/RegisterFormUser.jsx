import { useState } from "react";

function RegisterFormUser({ users, setUsers }) {
  const [name, setName] = useState("");
  const [saldo, setSaldo] = useState(0);
  const [plan, setPlan] = useState("Principiante");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name,
      plan,
      saldo,
    };
    setUsers([...users, newUser]);
    setName("");
    setSaldo(saldo);
    setPlan("Principiante");
  };
  return (
    <form onSubmit={handleSubmit} className="forms">
      <h2>Registro de Usuario 🤵</h2>

      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Saldo"
        onChange={(e) => setSaldo(e.target.value)}
        required
      />
      <select
        name=""
        id=""
        value={plan}
        onChange={(e) => setPlan(e.target.value)}
      >
        <option value="Principiante">Principiante</option>
        <option value="Intermedio">Intermedio</option>
        <option value="Avanzado">Avanzado</option>
      </select>
      <button type="submit">Registrar</button>
    </form>
  );
}

export default RegisterFormUser;
