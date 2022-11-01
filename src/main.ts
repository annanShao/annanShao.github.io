import { createApp } from 'vue'
import './main.css';
import App from './App.vue'
import Antd from 'ant-design-vue';
import { router } from "./routers";
import 'ant-design-vue/dist/antd.css';

createApp(App).use(Antd).use(router).mount('#app')
