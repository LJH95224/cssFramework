/*
 * @Description:
 * @Date: 2021-09-07 20:13:46
 * @FilePath: \cssFramework\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/toast/style'
import '@/mock' // mock数据
createApp(App).use(store).use(router).mount('#app')
