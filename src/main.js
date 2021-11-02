import { createApp } from 'vue'
import App from './App.vue'
import createRouter from './router.js'

// createApp(App).mount('#app')
createApp(App).use(createRouter()).mount("#app");
// console.log("hello")
