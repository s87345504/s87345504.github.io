<script setup name="orderView">
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/appStore'

import appFoodOrders from '@/components/appFoodOrders.vue'
import { computed, watch, ref, onMounted, onBeforeUnmount } from 'vue';
import { Empty } from 'vant';
import { storeToRefs } from 'pinia';



const appStore = useAppStore()
const route = useRoute()
const {sortTypes}=storeToRefs(appStore)

const sortInfo = ref({ })
const key = ref('')
appStore.keyword = ''

const checkQuery = computed(() => {
  return ('type' in sortInfo.value) && ('value' in sortInfo.value)
})


watch(() => route.query, (query) => {
  if('index' in query && 'sort' in query) {
    if(+query.index >=0 && +query.index < appStore.sortTypes.length) {
        sortInfo.value.value=+query.index
        appStore.title=`${query.sort==='true'?'高':'低'}${appStore.sortTypes[+query.index].text}食物 - Top100`
    }
    // if(query.sort === 'true' || query.sort === 'false') {
    //   sortInfo.value.type=query.sort==='true'
    // }
    sortInfo.value.type=query.sort==='true' || query.sort==='1'
  } 
  
 
}, { immediate: true })


const orderResult = computed(() => {
  if(checkQuery.value){
    key.value= sortTypes.value[sortInfo.value.value].alias
    return appStore.foods.sort((a, b) => {
      if (!sortInfo.value.type) {
        return a[key.value] - b[key.value]
      } else {
        return b[key.value] - a[key.value]
      }
    }).filter(item => item[key.value]).slice(0, 100)
  }
})


</script>

<template>
  <!-- <Divider style="margin-bottom: 0;">{{ route.query.sort? '高':'低' }}{{text}}食物排行前100名</Divider> -->
  <!-- <appFoodCard  v-if="checkQuery" :targetPart="key" v-for="food in orderResult" :food="food" :key="food.id" ></appFoodCard> -->
  <appFoodOrders v-if="checkQuery && orderResult.length"   :sorts="sortInfo" :foods="orderResult"></appFoodOrders>
  <Empty v-else description="查询参数错误" />
</template>

<style scoped></style>