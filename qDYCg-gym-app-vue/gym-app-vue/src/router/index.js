import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/authStore";
import Dashboard from "../pages/Dashboard.vue";
import Admin from "../pages/Admin.vue";
import Login from "../pages/Login.vue";
import { auth } from "../firebase";

const routes = [
  { path: "/", component: Dashboard, meta: { auth: true } },
  { path: "/admin", component: Admin, meta: { auth: true, admin: true } },
  { path: "/login", component: Login },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const auth = useAuthStore();

  if (to.meta.auth && !auth.user) return "/login";
  if (to.meta.admin && auth.user.role !== "admin") return "/";
});

export default router;
