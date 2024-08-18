<script setup name="App">

import { ConfigProvider, BackTop, showConfirmDialog, showSuccessToast,Empty  } from 'vant'
import appHeader from './components/appHeader.vue';
import appLoading from './components/appLoading.vue';
import appFooter from './components/appFooter.vue';
import { useThemeStore } from './stores/themeStore'
import { useAppStore } from '@/stores/appStore'
import { onMounted,ref } from 'vue'

const themeStore = useThemeStore()
const appStrore = useAppStore()

function copyText(text) {
  const input = document.createElement("input")
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand("Copy")
  document.body.removeChild(input)
  showSuccessToast("复制成功")
  //非安全环境不能使用ClipboardAPI,采用原生组件方式
  // navigator.clipboard.writeText(span.value).then(() => {
  //   console.log('短语已复制到剪贴板');
  // }).catch(err => {
  //   console.log("复制出错:"+err)
  // })

}


// onMounted(() => {

 
  
//   if (window.location.hash.includes('local')) {

//     showConfirmDialog({
//       allowHtml: true,
//       title: '友情提示',
//       message: '网站已更换服务器,请保存\n<span style="color:var(--van-primary-color)">https://s87345504.github.io/</span>',
//       confirmButtonText: '复制地址',
//       cancelButtonText: '关闭',
//     }).then(() => {
//       copyText('https://s87345504.github.io/')
     
//     }).catch(() => { })
//   }
// })

// const is_wechat=ref(navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1 )



</script>

<template>
  <ConfigProvider  style="user-select: none;" :theme="themeStore.theme" class="container">
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
    <!-- <Watermark content="RAIN" :full-page="true" :opacity="0.2"/> -->

  </ConfigProvider>
  <!-- <Empty v-else description="请在微信环境中打开" image="error" image-size="100"
    class="container" style="user-select: none;"></Empty> -->
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
}

footer {
  background-color: var(--van-background-2);
}


.fade-enter-active,
.fade-leave-active{
  transition: all 0.3s ease;
  transform-origin: center top;


}



.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);

  
}
</style>