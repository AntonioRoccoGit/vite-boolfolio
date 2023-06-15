import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import Posts from './pages/Posts.vue';

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
            component: Posts,
        }
    ],
});

export {router};