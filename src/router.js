import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import SearchPage from "./pages/SearchPage.vue";
import AppApartment from "./pages/AppApartment.vue";
import ApartmentDetails from "./pages/ApartmentDetails.vue";
import AppNotFound from "./pages/AppNotFound.vue";

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
      path: "/apartments",
      name: "apartments",
      component: AppApartment,
    },
    {
      path: "/apartments/:slug",
      name: "single-apartment",
      component: ApartmentDetails,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: AppNotFound,
    },
  ],
});

export { router };
