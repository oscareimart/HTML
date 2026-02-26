<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "./stores/authStore";

const authStore = useAuthStore();

onMounted(() => {
  authStore.init();
});
</script>

<template>
  <div v-if="authStore.loading">Cargando...</div>

  <router-view v-else />
</template>
