import { useState } from "react";

const styleInput = {
  height: "25px",
  margin: "15px 15px 0px 15px",
  color: "var(--text)",
  background: "var(--bg-a)",
  borderRadius: "5px",
};

function RegisterFormUser({ diets, setDiet }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDiet = {
      id: Date.now(),
      name,
      description,
      category,
    };
    setDiet([...diets, newDiet]);
    setName("");
    setDescription("");
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
      <h2>Registro de Dieta 🥩</h2>

      <input
        style={styleInput}
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        style={styleInput}
        name=""
        id=""
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Aca describe la dieta"
      ></textarea>
      <select
        style={{ ...styleInput, height: "30px" }}
        name=""
        id=""
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="Volumen">Volumen</option>
        <option value="Definicion">Definicion</option>
        <option value="Nutricion">Nutricion</option>
      </select>
      <button style={{ margin: "15px" }} type="submit">
        Registrar
      </button>
    </form>
  );
}

export default RegisterFormUser;
