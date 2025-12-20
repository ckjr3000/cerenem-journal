import { createRouter, createWebHistory } from "vue-router";
import "../global.css";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/contributors",
      name: "contributors",
      component: () => import("../views/ContributorsView.vue"),
    },
    {
      path: "/scorecomposition",
      name: "score composition",
      component: () => import("../views/ScoreCompositionView.vue"),
    },
    {
      path: "/soundinstallation",
      name: "sound installion",
      component: () => import("../views/SoundInstallationView.vue"),
    },
    {
      path: "/improvisation",
      name: "improvisation",
      component: () => import("../views/ImprovisationView.vue"),
    },
  ],
});

export default router;
