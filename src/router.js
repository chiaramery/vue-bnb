import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import SearchPage from "./pages/SearchPage.vue";

import ApartmentDetails from "./pages/ApartmentDetails.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/search",
      name: "search",
      component: SearchPage,
    },
    {
      path: "/apartmentDetails",
      name: "apartmentDetails",
      component: ApartmentDetails,
    },
    // {
    //     path: "/projects",
    //     name: "projects",
    //     component: ProjectsList,
    // },
    // {
    //     path: "/projects/:slug",
    //     name: "project-details",
    //     component: ProjectDetails,
    // },
    // {
    //     path: "/:pathMatch(.*)*",
    //     name: "not-found",
    //     component: NotFound,
    // },
  ],
});

export { router };
