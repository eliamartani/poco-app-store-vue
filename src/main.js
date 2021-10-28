import { createApp } from "vue";

// utils
import { i18n } from "./i18n";
import { store } from "./store";

// components
import App from "./App.vue";

// scss
import "./styles/main.scss";

const app = createApp(App);

app.use(store);
app.use(i18n);

app.mount("#app");
