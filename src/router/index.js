import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home', // URL 
      component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
      path: '/store1',
      name: 'Store1', // URL 
      component: () => import( /* webpackChunkName: "about" */ '../views/Store1.vue')
    },
    {
      path: '/store2',
      name: 'Store2', // URL 
      component: () => import( /* webpackChunkName: "about" */ '../views/Store2.vue')
    },
    {
      path: '/store2_menu',
      name: 'Store2_Menu', // URL 
      component: () => import( /* webpackChunkName: "about" */ '../views/Store2_Menu.vue')
    },
  ]
})