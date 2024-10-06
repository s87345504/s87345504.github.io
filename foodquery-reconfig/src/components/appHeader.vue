<script setup name="appHeader">
import { NavBar, ActionSheet, Search,showNotify ,Icon  } from 'vant';
import headerNoticeBar from './headerNoticeBar.vue'
import { ref } from 'vue'
import { useRouter,useRoute } from 'vue-router'
import { useAppStore } from '@/stores/appStore';


const appStore = useAppStore();
const props = defineProps({
  title: String,

})

const router = useRouter()
const route = useRoute()

const searchFood = () => {
  if(!appStore.keyword.trim().length){
    showNotify('请输入食物关键字再搜索')
    return
  }
  if(appStore.keyword.toLowerCase()==='debug'){
    window.$vc.show()
    return
  }
  if(appStore.keyword.toLowerCase()==='typeedit'){
   router.push({
     name:'typeEdit'
   })
    return
  }
  router.push({
    name: `query`,
    query: {
      keyword: appStore.keyword
    }
  })
}
const actionSheetShow = ref(false)


const actions = [
  {
    name: '高钾食物排行榜',
    icon: 'warning-o',
    query: {
      index:0,
      sort:'true'
    }
  },
  {
    name: '高磷食物排行榜',
    icon: 'warning-o',
    query: {
      index:1,
      sort:'true'
    }
  },
  {
    name: '低钾食物排行榜',
    icon: 'passed',
    query: {
      index:0,
      sort:'false'
    }
  },
  {
    name: '低磷食物排行榜',
    icon: 'passed',
    query: {
      index:1,
      sort:'false'
    }
  }
]
const onSelect = (item) => {
  router.push({
    name:'order',
    query:item.query
  })
}

const back = () => {
  
 if(window.history.state.back){
   router.back()
 }else{
   router.replace({
     name:'home'
   })
 }
 
}

</script>

<template>
  <header>
    <NavBar :title="title" left-text="返回" left-arrow @click-left="back()" @click-right="actionSheetShow = true">
      <template #right>
        <Icon name="weapp-nav" size="36" />
      </template>
    </NavBar>
    <!-- <NoticeBar  mode="closeable" left-icon="volume-o" v-if="appStore.notice" :text="appStore.notice"></NoticeBar> -->
    <headerNoticeBar></headerNoticeBar>
    <Search v-if="route.name!=='insuranceCalc'" v-model="appStore.keyword" @search="searchFood" placeholder="请输入欲查询食物的关键字" input-align="center" />
  </header>
  <ActionSheet  title="含量排行榜前100名" :closeable="false" @select="onSelect" v-model:show="actionSheetShow" close-on-click-action cancel-text="取消" :actions="actions" teleport="body">
  </ActionSheet>
</template>

<style scoped>
header {
  flex-shrink: 0;
}
</style>