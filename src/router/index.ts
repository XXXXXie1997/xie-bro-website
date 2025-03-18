import { createMemoryHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: () => import("../pages/home.vue") },
  { path: "/cv", component: () => import("../pages/cv.vue") },
];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
