import { createApp } from 'vue'
import App from './App.vue'
import createRouter from './router.js'

const app = createApp(App).use(createRouter())
app.provide('bucket', "https://cedarriver.s3.us-west-2.amazonaws.com/")
app.mount("#app");
