import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
createApp(App)
  .use(router as any)
  .mount("#app");
