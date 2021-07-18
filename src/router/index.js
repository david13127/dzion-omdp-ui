import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AgGrid from '../components/AgGrid.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/aggrid',
    name: 'aggrid',
    component: AgGrid
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //  import(/* webpackChunkName: "about" */ "../views/About.vue")
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
