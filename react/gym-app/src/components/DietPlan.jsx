function DietPlan({ plan }) {
  const diets = {
    Principiante: {
      objetivo: "Habitos saludables",
      comidas: [
        "Desayuno: Avena con Frutas",
        "Almuerzo: Pollo + Arroz + Verduras",
        "Merienda: Fruta o Yogurt",
        "Cena: Ensalada + proteina ligera",
      ],
    },
    Intermedio: {
      objetivo: "Habitos saludables",
      comidas: [
        "Desayuno: Avena con Frutas",
        "Almuerzo: Pollo + Arroz + Verduras",
        "Merienda: Fruta o Yogurt",
        "Cena: Ensalada + proteina ligera",
      ],
    },
    Avanzado: {
      objetivo: "Habitos saludables",
      comidas: [
        "Desayuno: Avena con Frutas",
        "Almuerzo: Pollo + Arroz + Verduras",
        "Merienda: Fruta o Yogurt",
        "Cena: Ensalada + proteina ligera",
      ],
    },
  };
  const diet = diets[plan];

  return (
    <div>
      <p>
        Objetivo: <strong>{diet.objetivo}</strong>
      </p>
      <ul>
        {diet.comidas.map((comida, index) => (
          <li key={index}>{comida}</li>
        ))}
      </ul>
    </div>
  );
}
