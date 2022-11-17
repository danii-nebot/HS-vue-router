import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/HomePage.vue')
const YesNoPage = () => import('../views/YesNoPage.vue')
const About = () => import('../views/AboutPage.vue')
const NotFound = () => import('../views/NotFound.vue')
const Suspense = () => import('../views/SuspensePage.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/yesno',
    name: 'yesno',
    component: YesNoPage
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/suspense-example',
    name: 'suspense',
    component: Suspense
  },
  { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router