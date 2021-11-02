import {
  createRouter,
  createWebHistory
} from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
// import ABVfromSGandBrix from './components/ABVfromSGandBrix.vue';
// import StrikeWater from './components/StrikeWater.vue';

export default () =>
  createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
      // {
      //   path: '/abvogfg',
      //   name: 'ABV from OG and SG',
      //   component: ABVfromOGandFG
      // },
      // {
      //   path: '/abvsgbrix',
      //   name: 'ABV from SG and Brix',
      //   component: ABVfromSGandBrix
      // },
      // {
      //   path: '/strikewater',
      //   name: '/Strike Water Temperature',
      //   component: StrikeWater
      // }
    ]
  });
