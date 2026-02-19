function DietList({ diets }) {
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

      {diets?.map((diet) => (
        <div key={diet.id} className="item">
          <p>{diet.name}</p>
          <p>
            Dieta: {diet.name} {diet.category}{" "}
            <strong>
              {dietsList[diet.category]} {diet.description}
            </strong>
          </p>
        </div>
      ))}
    </div>
  );
}

export default DietList;
