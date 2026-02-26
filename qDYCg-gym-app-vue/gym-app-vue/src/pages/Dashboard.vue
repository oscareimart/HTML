<script setup>
import { useAuthStore } from "../stores/authStore";
import ProgressChart from "../components/charts/ProgressChart.vue";

const auth = useAuthStore();
</script>

<template>
  <h1>Dashboard</h1>
  <p>
    Bienvenido <strong>{{ auth.user.email }}</strong> <br />
    rol: {{ auth.user.role }}
  </p>

  <ProgressChart />

  <router-link v-if="auth.user.role === 'admin'" to="/admin">
    Ir al Panel admin
  </router-link>

  <button @click="auth.logout">Logout</button>
</template>
