// import './assets/main.css'

//----网站监控 site:https://perf.51.la/analytics/overview/17653
import { Monitor } from './assets/js-sdk-perf.esm.min.js';
new Monitor().init({
  id: "KP4ANyQaYlMLmSXZ",
  sendSuspicious: true,
  sendSpaPv: true,
});
//-----
import 'vant/lib/index.css';
import { createApp, ref } from 'vue'
import { createPinia } from 'pinia'

import VConsole from 'vconsole'
// const VConsole =import('vconsole/dist/vconsole.min.js')
import App from './App.vue'

import router from './router'

const app = createApp(App)
window.$vc = new VConsole({ theme: localStorage.getItem('theme') == 'dark' ? 'dark' : 'light', defaultPlugins: ['system', 'network', 'element', 'storage'] })
window.$vc.hideSwitch()

// app.use(new VConsole())
app.use(createPinia())
app.use(router)  //路由的引入，等会放开

app.mount('#app')

console.info(`我入红尘几经年;
是非总为情万千;
宋地闻秋悲哀雁;
雨打枯荷听管弦;
轩窗静里忆从前!
`)


const mainVersion = getBuildTime()
//版本更新后,清除缓存
if (localStorage.getItem('current-build') !== mainVersion) {
  localStorage.clear()
  // localStorage.setItem('sortTypes',`[{"text":"蛋白质","alias":"protein","unit":"克","value":2},{"text":"脂肪","alias":"fat","unit":"克","value":3},{"text":"钙","alias":"ca","unit":"毫克","value":4},{"text":"铁","alias":"fe","unit":"毫克","value":5}]`)
  localStorage.setItem('current-build', mainVersion)
}

function getBuildTime() {
  if (import.meta.env.PROD) {
    const build = document.querySelector('meta[name="build-time"]');
    return build ? build.getAttribute('content') : '未知版本';
  }
  return 'dev';
}
