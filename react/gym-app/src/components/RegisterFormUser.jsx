import { useState } from "react";

const styleInput = {
  height: "25px",
  margin: "15px 15px 0px 15px",
  color: "var(--text)",
  background: "var(--bg-a)",
  borderRadius: "5px",
};

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
    <form
      onSubmit={handleSubmit}
      className="forms"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "15px",
        border: "1px solid",
        borderRadius: "15px",
        // maxWidth: "500px",
        justifySelf: "center",
        marginTop: "25px",
        marginBottom: "25px",
      }}
    >
      <h2>Registro de Usuario 🤵</h2>

      <input
        style={styleInput}
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        style={styleInput}
        type="number"
        placeholder="Saldo"
        onChange={(e) => setSaldo(e.target.value)}
        required
      />
      <select
        style={{ ...styleInput, height: "30px" }}
        name=""
        id=""
        value={plan}
        onChange={(e) => setPlan(e.target.value)}
      >
        <option value="Principiante">Principiante</option>
        <option value="Intermedio">Intermedio</option>
        <option value="Avanzado">Avanzado</option>
      </select>
      <button style={{ margin: "15px" }} type="submit">
        Registrar
      </button>
    </form>
  );
}

export default RegisterFormUser;
