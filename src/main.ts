import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './main.css'
import App from './App.vue'
import { router } from './routers'
import { vReveal } from './directives/reveal'

const app = createApp(App)

app.use(Antd)
app.use(router)
app.directive('reveal', vReveal)

app.mount('#app')
