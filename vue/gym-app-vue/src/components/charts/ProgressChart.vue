<script setup>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

const canvas = ref(null);

onMounted(() => {
  new Chart(canvas.value, {
    type: "line",
    data: {
      labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
      datasets: [
        {
          label: "Progreso de Entrenamiento",
          data: [80, 79, 78, 77],
        },
      ],
    },
  });
});
</script>

<template>
  <h2>Progreso de Entrenamiento</h2>
  <canvas ref="canvas"></canvas>
</template>
