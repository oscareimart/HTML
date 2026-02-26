import { defineStore } from "pinia";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { EmailAuthCredential } from "firebase/auth/web-extension";

export const useAuthStore = defineStore("auth", {
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
