import { createApp } from 'vue'
import App from './App.vue'
import createRouter from './router.js'

// globalProperties.$bucket = "https://cedarriver.s3.us-west-2.amazonaws.com/"

// createApp(App).mount('#app')
// createApp(App).use(createRouter()).mount("#app");
const app = createApp(App).use(createRouter())
// app.config.globalProperties.$bucket = "https://cedarriver.s3.us-west-2.amazonaws.com/"
app.provide('bucket', "https://cedarriver.s3.us-west-2.amazonaws.com/")
app.mount("#app");
// console.log("hello")

// export const bucket = "https://cedarriver.s3.us-west-2.amazonaws.com/"