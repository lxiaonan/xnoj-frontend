import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import router from "./router";
import pinia from "./store";
import "bytemd/dist/index.css";
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElementPlus).use(pinia).use(router).mount("#app");
