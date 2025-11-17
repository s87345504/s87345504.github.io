<script setup name="App">

import { ConfigProvider, BackTop, showConfirmDialog,Watermark } from 'vant'
import appHeader from './components/appHeader.vue';
import appLoading from './components/appLoading.vue';
import NoWechat from './components/NoWechat.vue';
import { ref, onMounted, reactive } from 'vue';
import appFooter from './components/appFooter.vue';
import { useThemeStore } from './stores/themeStore'
import { useAppStore } from '@/stores/appStore'




const themeStore = useThemeStore()
const appStrore = useAppStore()

const is_wechat = ref(localStorage.getItem('wechat_fake') == true || import.meta.env.DEV)

const watermark =ref("雨落无声")

if (typeof WeixinJSBridge !== 'object') {
  document.addEventListener('WeixinJSBridgeReady', () => {
    if (typeof WeixinJSBridge === 'object') {
      weixin()
    }
  }, false)
} else {
  weixin()
}

function weixin() {
  is_wechat.value = true
  // WeixinJSBridge.call('hideOptionMenu');
  // WeixinJSBridge.call(`hideToolbar`); //隐藏右下面工具栏

}

// import {getThemeCSS} from './hooks/newYearRedTheme'

// console.log(getThemeCSS());

// const themeCSS =reactive(getThemeCSS())

</script>

<template>
  <NoWechat v-if="!is_wechat" />
  <ConfigProvider v-else :theme='themeStore.theme'  class="container" 
   >
    <appHeader :title='appStrore.title' />
    <article id="client">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">

          <component :is="Component" />

        </transition>

      </router-view>

      <BackTop target="#client" />
    </article>

    <appFooter></appFooter>
    <!-- appStrore.foods.length===0 -->
    <appLoading :show="appStrore.foods.length === 0"></appLoading>
    <Watermark :width="200" :rotate="-18" :gap-x="50" :gap-y="100" :opacity="0.04" >
       <template #content>
        <div class="watermark">{{ watermark }}</div>
  </template>
    </Watermark>

  </ConfigProvider>

</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#client {
  flex: 1;
  overflow-y: auto;
  background-color: var(--van-background);
  color: var(--van-text-color);
  position: relative;
  user-select: none;
}

footer {
  background-color: var(--van-background-2);
}


.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
  transform-origin: center top;


}



.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);


}
</style>