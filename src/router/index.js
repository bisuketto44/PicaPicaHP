import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router)

export const routes = [{
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
    path: '/store1_menu',
    name: 'Store1_Menu', // URL 
    component: () => import( /* webpackChunkName: "about" */ '../views/Store1_Menu.vue')
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
  {
    path: '/store2_info',
    name: 'Store2_Info', // URL 
    component: () => import( /* webpackChunkName: "about" */ '../views/Store2_StoreInfo.vue')
  },
  {
    path: '/recruit',
    name: 'Recruit', // URL 
    component: () => import( /* webpackChunkName: "about" */ '../views/Recruit.vue')
  },
]

export default new Router({

  base: '/PicaPicaHP/',
  // 遷移を記述します
  routes,

  // デフォだと同じコンポーネント内では同じスクロール位置を返すので、通常通りの動きになる処理を加えておく
  scrollBehavior(to, from, savePosition) {
    console.log("to", to);
    console.log("from", from);
    console.log("savePosition", savePosition);
    if (savePosition) {
      return savePosition;
    }

    if (to.hash) {
      return {
        selector: "#next-user",
        offset: {
          x: 0,
          y: 100
        }
      }
    }

    return {
      x: 0,
      y: 0
    };
  },

})