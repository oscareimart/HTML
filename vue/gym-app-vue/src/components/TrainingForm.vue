<script setup>
import { ref } from "vue";
import { useGymStore } from "../stores/gymStore";

const gym = useGymStore();
const name = ref("");

const description = ref("");

const submit = () => {
  gym.addTraining({ name: name.value, description: description.value });
  name.value = "";
  description.value = "";
};
</script>

<template>
  <h2>Agregar nuevo entrenamiento</h2>

  <input v-model="name" placeholder="Nombre" />
  <textarea v-model="description" placeholder="Descripción"></textarea>
  <button type="submit" @click="submit">Agregar</button>
</template>
