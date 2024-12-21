import { createMemoryHistory, createRouter, RouteRecordRaw } from "vue-router";

import Home from "../pages/home.vue";
import About from "../pages/about.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
