import { createApp } from "vue";
import App from "./App.vue";
import PageHome from "@/components/PageHome";
import PageThreadShow from "@/components/PageThreadShow";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: PageHome,
  },
  {
    path: "/thread/${:id}",
    name: "ThreadShow",
    component: PageThreadShow,
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});
const forumApp = createApp(App);
forumApp.use(router);
forumApp.mount("#app");
