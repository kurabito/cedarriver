import {
  createRouter,
  createWebHistory
} from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import News from './components/News/News.vue';
import NewsItems from './components/News/Items.vue';
import Bimy from './components/News/Bimy.vue';
import Yamagata from './components/News/Yamagata.vue';
import SakeBunka from './components/News/SakeBunka.vue';
import Ibuki from './components/News/Ibuki.vue';
import Sake from './components/Sake/Sake.vue';
import Products from './components/Sake/Products.vue';
import Junmai from './components/Sake/Junmai.vue';
import Nama from './components/Sake/Nama.vue';
import Nigori from './components/Sake/Nigori.vue';
import Taru from './components/Sake/Taru.vue';

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
          },
          { path: 'yamagata',
            component: Yamagata
          },
          { path: 'sakebunka',
            component: SakeBunka
          },
          { path: 'ibuki',
            component: Ibuki
          }
        ]
      },
      {
        path: '/sake',
        name: 'Sake',
        component: Sake,
        children: [
          { path: '',
            component: Products
          },
          { path: 'junmai',
            component: Junmai
          },
          { path: 'nama',
            component: Nama
          },
          { path: 'nigori',
            component: Nigori
          },
          { path: 'taru',
            component: Taru
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
