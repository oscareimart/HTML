<script setup>
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import router from "../router";

const login = async () => {
  await signInWithPopup(auth, provider);
  router.push("/");
};
</script>

<template>
  <h1>Login</h1>
  <button @click="login">Login con Google</button>
</template>
