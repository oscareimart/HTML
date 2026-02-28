import { useState } from "react";

import {
  styleFill,
  styleForm,
  styleInput,
  styleRow,
  styleButton,
} from "../styles/formStyles";

function RegisterFormUser({ diets, setDiets, users = [] }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [fechaIni, setFechaIni] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [userSelected, setUserSelected] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userFound = users.find((e) => String(e.id) === userSelected);

    const newDiet = {
      id: `D${Date.now()}`,
      name,
      description,
      category,
      fechaIni,
      fechaFin,
      usuario: userFound,
    };
    setDiets([...diets, newDiet]);
    setName("");
    setDescription("");
    setCategory("");
    setFechaFin("");
    setFechaIni("");
    setUserSelected("");
  };
  return (
    <form onSubmit={handleSubmit} className="forms" style={styleForm}>
      <h2>Registro de Dieta 🥩</h2>
      <div style={{ padding: "15px" }}>
        <div style={styleRow}>
          <div style={styleFill}>
            <label htmlFor="name">Nombre</label>
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
            <label htmlFor="">Categoria</label>
            <select
              style={styleInput}
              name=""
              id=""
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Seleccione...</option>
              <option value="Volumen">Volumen</option>
              <option value="Definicion">Definicion</option>
              <option value="Nutricion">Nutricion</option>
            </select>
          </div>
        </div>

        <div style={styleRow}>
          <div style={styleFill}>
            <label>Fecha Inicio</label>
            <input
              id="fecha"
              style={styleInput}
              type="date"
              placeholder="10/10/2020"
              value={fechaIni}
              onChange={(e) => setFechaIni(e.target.value)}
              required
            />
          </div>
          <div style={styleFill}>
            <label>Fecha Fin</label>
            <input
              id="fecha"
              style={styleInput}
              type="date"
              placeholder="10/10/2020"
              value={fechaFin}
              onChange={(e) => setFechaFin(e.target.value)}
              required
            />
          </div>
        </div>

        <div style={styleFill}>
          <label>Usuario</label>
          <select
            name=""
            id=""
            style={styleInput}
            defaultValue={""}
            onChange={(e) => setUserSelected(e.target.value)}
            required
          >
            <option value="">Seleccione...</option>
            {users?.map((e, index) => (
              <option value={e.id} key={index}>
                {e.name}
              </option>
            ))}
          </select>
        </div>

        <div style={styleFill}>
          <label htmlFor="">Descripcion</label>
          <textarea
            style={{ ...styleInput, height: "60px" }}
            name=""
            id=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Aca describe la dieta"
          ></textarea>
        </div>

        <button style={styleButton} type="submit">
          Registrar
        </button>
      </div>
    </form>
  );
}

export default RegisterFormUser;
