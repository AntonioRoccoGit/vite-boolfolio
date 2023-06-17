import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import Project from './pages/project.vue';
import SingleProjectPage from './pages/SingleProjectPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,

        },
        {
            path: '/posts',
            name: 'posts',
            component: Project,
        },
        {
            path: '/posts/:slug',
            name: 'single-project',
            component: SingleProjectPage,
        },
    ],
});

export { router };