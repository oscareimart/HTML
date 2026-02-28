import { Table } from "./Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPrint } from "@fortawesome/free-solid-svg-icons";

const headers = [
  { field: "id", displayName: "Codigo" },
  { field: "name", displayName: "Nombre" },
  { field: "description", displayName: "Descripcion" },
  { field: "category", displayName: "Categoria" },
  { field: "fechaIni", displayName: "Fecha Inicio" },
  { field: "fechaFin", displayName: "Fecha Fin" },
  { field: "usuario", displayName: "Usuario" },
];

const ButtonsActions = ({ id, setDiets }) => {
  const handleClickButton = (action) => {
    if (action === "delete") {
      setDiets((prev) => prev.filter((e) => e.id !== id));
    }
  };

  return (
    <div>
      <button
        style={{
          padding: "5px",
          marginRight: "5px",
          backgroundColor: "var(--bg-c)",
        }}
      >
        <FontAwesomeIcon
          size="1x"
          color="#F54927"
          icon={faTrash}
          onClick={() => handleClickButton("delete")}
        />
      </button>
      <button style={{ padding: "5px", backgroundColor: "var(--bg-c)" }}>
        <FontAwesomeIcon size="1x" color="#0F418C" icon={faPrint} />
      </button>
    </div>
  );
};

function DietList({ diets, setDiets }) {
  diets = diets.map((e) => ({ ...e, usuario: e.usuario?.name }));
  const dietsList = {
    Volumen: "Se caracteriza por ser hipercalórica (3000-3500+ kcal/día)",
    Definicion:
      "Es hipocalórica, buscando un déficit energético para quemar grasa pero protegiendo el músculo con alto consumo de proteínas",
    Nutricion: "Enfocada en mantener niveles altos de glucógeno",
  };

  return (
    <div>
      <h2>Dietas Registradas</h2>
      {diets?.length === 0 && <p>No hay Dietas aun</p>}

      {diets?.length > 0 && (
        <Table
          data={diets}
          headers={headers}
          actions={(row) => <ButtonsActions id={row.id} setDiets={setDiets} />}
        />
      )}
      {/* {diets?.map((diet) => (
        <div key={diet.id} className="item">
          <p>{diet.name}</p>
          <p>
            Dieta: {diet.name} {diet.category}{" "}
            <strong>
              {dietsList[diet.category]} {diet.description}
            </strong>
          </p>
        </div>
      ))} */}
    </div>
  );
}

export default DietList;
