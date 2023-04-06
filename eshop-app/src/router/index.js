import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import DetailsView from '../views/DetailsView.vue'
import TitleView from '../views/TitleView.vue'
import ErrorView from '../views/ErrorView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/product',
    component: ProductView
  },
  {
    path: '/detail/:id',
    component: DetailsView
  },
  {
    path: '/purchase/:title',
    component: TitleView
  },
  {
    path: '**',
    component: ErrorView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
