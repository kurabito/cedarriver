import {
  createRouter,
  createWebHistory
} from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import News from './components/News/News.vue';
import NewsItems from './components/News/Items.vue';
import Bimy from './components/News/Bimy.vue';
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
      {
        path: '/news',
        name: 'News',
        component: News,
        children: [
          { path: '',
            component: NewsItems
          },
          { path: 'bimy',
            component: Bimy
          }
        ]
      },
      // {
      //   path: '/news/bimy',
      //   name: 'Bimy',
      //   component: Bimy
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
