import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import store from './store'
import 'codemirror/lib/codemirror.css'
import 'codemirror/keymap/sublime' //sublime编辑器效果
import "codemirror/theme/dracula.css"// 配置里面也需要theme设置为monokai
import "codemirror/mode/vue/vue.js" // 配置里面也需要mode设置为vue
import 'codemirror/addon/selection/active-line' //光标行背景高亮，配置里面也需要styleActiveLine设置为true

if (!process.env.IS_WEB) Vue. use(require('vue-electron'))
Vue.use(ElementUI);
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
