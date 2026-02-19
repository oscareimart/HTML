function TrainingPlan({ plan }) {
  const plans = {
    Principiante: "Cardio + Full Body 3xSemana",
    Intermedio: "Fuerza + Cardio 4xSemana",
    Avanzado: "Rutina dividida 6xSemana",
  };

  return (
    <p>
      Plan: <strong>{plans[plan]}</strong>
    </p>
  );
}

export default TrainingPlan;
