<script setup>
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";

const login = async () => {
  await signInWithPopup(auth, googleProvider);
};
</script>

<template>
  <h1>Login</h1>
  <button @click="login">Iniciar sesión con Google</button>
</template>
