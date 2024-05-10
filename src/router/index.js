import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'users',
    component: function () {
      return import('../views/UsersView.vue')
    }
  },
  /* {
    path: '/navbar',
    name: 'navbar',
    component: function () {
      return import('../components/NavBar.vue')
    }
  }, */
  {
    path: '/user/:id',
    name: 'userDetailsView',
    component: () => import('../views/UserDetail.vue')
  },
 /*  {
    path: '/add users',
    name: 'add users',
    component: () => import('../views/UserDetail.vue')
  }, */
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
