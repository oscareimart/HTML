<script setup>
import GymCard from "./GymCard.vue";
import dietImg from "../assets/diet.jpg";

defineProps({
  diet: Object,
});
</script>

<template>
  <GymCard
    :title="diet.name"
    :image="dietImg"
    :description="diet.description"
  />
</template>