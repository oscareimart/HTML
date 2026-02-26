<script setup>
defineProps({
  users: Array,
});
</script>

<template>
  <table>
    <tr>
      <th>Email</th>
      <th>Rol</th>
    </tr>
    <tr v-for="u in users" :key="u.id">
      <td>{{ u.email }}</td>
      <td>{{ u.role }}</td>
    </tr>
  </table>
</template>