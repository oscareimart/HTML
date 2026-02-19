import { useState } from "react";

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
    <form onSubmit={handleSubmit} className="forms">
      <h2>Registro de Dieta 🥩</h2>

      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        name=""
        id=""
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Aca describe la dieta"
      ></textarea>
      <select
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
      <button type="submit">Registrar</button>
    </form>
  );
}

export default RegisterFormUser;
