import { defineStore } from "pinia";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const userAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loading: true,
  }),

  actions: {
    init() {
      onAuthStateChanged(auth, (u) => {
        this.user = u ? { uid: u.uid, email: u.email, role: "admin" } : null;
        this.loading = false;
      });
    },
    logout() {
      signOut(auth);
    },
  },
});
