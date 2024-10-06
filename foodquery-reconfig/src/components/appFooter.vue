<script setup  name="appFooter">
import {showConfirmDialog } from 'vant';
import { useRouter, useRoute} from 'vue-router'
import {useThemeStore} from '@/stores/themeStore'

import { onMounted,ref } from 'vue';
import { watch } from 'vue';



const theme = useThemeStore()

const router = useRouter()
const route = useRoute()



const about = ()=>{
  // showConfirmDialog({
  // title: '关于',
  // allowHtml:true,
  // message: `<span id='name' onclick='window.location.href="/#/rain"'>雨落无声胜有声<span> `
  // ,showCancelButton:false})
  router.push('/about')
}

// const VConsoleOpen = ()=>{
//   window.$vc.show()
// }
const home = ()=>{
  router.push('/')
}


</script>



<template>
  <footer>
    <ul>
        
        
        <li v-if="route.path!=='/'" ><a @click.prevent="home">首页</a></li>
        <li><a @click.prevent="theme.toggleTheme">主题</a></li>        
        <!-- <li><a @click.prevent="VConsoleOpen" >debug</a></li> -->
        <li v-if="route.path !=='/about'"><a @click.prevent="about" >雨落无声</a></li>
        <li v-if="route.path !=='/insuranceCalc'"><a @click.prevent="router.push('/insuranceCalc')">医保报销计算器</a></li>
       
        
    </ul>
  </footer>
</template>

<style scoped>
footer ul{
    display: flex;
    justify-content: center;
    font-size: var(--van-font-size-md);
    color: var(--van-text-color-2);
    gap: 12px;
    margin: 4px 0;
}

footer ul li:not(:last-child)::after{
    content: '|';
    position: relative;
    left:6px;
    color:var(--van-text-color-3)
}

footer ul li a{
    color: inherit;
    cursor: pointer;
}
.my-rolling-text {


    --van-rolling-text-item-width:9px;


}
</style>