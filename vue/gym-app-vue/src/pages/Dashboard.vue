<script setup>
import { useAuthStore } from "../stores/authStore";
import ProgressChart from "../components/charts/ProgressChart.vue";

const auth = useAuthStore();
</script>

<template>
  <h1>Dashboard</h1>
  <p>Bienvenido, {{ auth.user.displayName }}</p>

  <ProgressChart />

  <router-link v-if="auth.user.role === 'admin'" to="/admin">
    Ir al Panel Admin
  </router-link>

  <button @click="auth.logout">Cerrar sesión</button>
</template>
