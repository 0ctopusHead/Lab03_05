import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: (route) => ({page: parseInt(route.query?.page as string || '1')})
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    }
  ]
})

export default router
