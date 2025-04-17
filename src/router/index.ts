import { createMemoryHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: () => import("../pages/home.vue") },
  { path: "/cv", component: () => import("../pages/cv.vue") },
  { path: "/game2048", component: () => import("../pages/game2048.vue") },
];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
