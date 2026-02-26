<script setup>
defineProps({
  title: String,
  image: String,
  description: String,
});
</script>

<template>
  <div class="card">
    <img: scr="image"/>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.card {
  width: 280px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px #0002;
}
img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}
</style>
