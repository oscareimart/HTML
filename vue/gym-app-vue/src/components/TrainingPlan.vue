<script setup>
defineProps({
  plan: String,
});

const plans = {
  Principiante: "Cardio + Full Body 3xSemana",
  Intermedio: "Fuerza + Cardio 4xSemana",
  Avanzado: "Rutina dividida 6xSemana",
};
</script>

<template>
  <p>
    Plan: <strong>{{ plans[plan] }}</strong>
  </p>
</template>
