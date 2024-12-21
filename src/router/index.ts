import { createMemoryHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: () => import("../pages/home.vue") },
  { path: "/about", component: () => import("../pages/about.vue") },
];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
