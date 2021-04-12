import {createWebHistory, createRouter} from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "Home",
            component: Home
        },
        {
            path: '/about',
            name: "About",
            component: About
        }
    ]
});

export default router;