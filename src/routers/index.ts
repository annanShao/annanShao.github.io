import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';

const Home = () => import('@/components/pages/home/index.vue');
const About = () => import('@/components/pages/aboutMe/index.vue');
const Blog = () => import('@/components/pages/myBlog/index.vue');
const NotFound = () => import('@/components/pages/errorPage/index.vue');

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/about',
    component: About,
    name: 'About'
  },
  {
    path: '/blog',
    component: Blog,
    name: 'Blog'
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound
  }

]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as RouteRecordRaw[]
})
