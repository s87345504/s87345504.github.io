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

// console.info(`我入红尘几经年;
// 是非总为情万千;
// 宋地闻秋悲哀雁;
// 雨打枯荷听管弦;
// 轩窗静里忆从前!
// `)


const ver= getBuildTime()
//版本更新后,清除缓存
if (localStorage.getItem('current-build') !== ver) {
  console.log('版本更新,清除缓存')
  const clsName=['sortTypes','sortInfo','food-class','food-data']
  clsName.forEach(item=>{
    localStorage.removeItem(item)
  })
  localStorage.setItem('current-build', ver)
  
}

// 获取构建时间
function getBuildTime() {
    // 开发环境处理
    if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
        try {
            window.$vc?.showSwitch?.();
            localStorage.setItem('wechat_fake', '1');
            return location.port === "5173" ? "dev" : "雨轩本机专用版";
        } catch (e) {
            console.error("开发环境处理出错:", e);
            return "开发版(错误)";
        }
    }

    // 生产环境处理
    try {
        const build = document.querySelector('meta[name="build-time"]');
        return build?.getAttribute('content') || '未知版本';
    } catch (e) {
        console.error("获取构建时间出错:", e);
        return '未知版本';
    }
}
