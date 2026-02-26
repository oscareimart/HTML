<script setup>
import { useGymStore } from "../stores/gymStore";
import TrainingForm from "../components/TrainingForm.vue";

const gym = useGymStore();
gym.loadTrainings();
</script>

<template>
  <h1>Admin Panel</h1>
  <TrainingForm />

  <ul>
    <li v-for="t in gym.trainings" :key="t.id">
      {{ t.name }}
      <button @click="gym.deleteTraining(t.id)">X</button>
    </li>
  </ul>
</template>
