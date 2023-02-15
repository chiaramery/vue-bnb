import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        // {
        //     path: "/about-me",
        //     name: "about",
        //     component: AboutMe,
        // },
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