<script setup name="queryView">
import { useRoute } from 'vue-router'
import appFoodSort from '@/components/appFoodSort.vue'
import appFoodOrders from '@/components/appFoodOrders.vue'
import { useAppStore } from '@/stores/appStore'
import { computed, watch,onUnmounted } from 'vue'
import emptyImage from '@/assets/custom-empty-image.png'
import { Empty } from 'vant';
import { storeToRefs } from 'pinia'


const appStore = useAppStore();
const route = useRoute()

const {sortInfo,sortTypes} =storeToRefs(appStore)


watch(() => route.query.keyword, (newVal) => {
  appStore.keyword = newVal || '';
}, { immediate: true })

onUnmounted(() => {
  appStore.keyword = '';
})
const queryResult = computed(() => {
  //关键字搜索过滤
  if (route.query.keyword) {
    appStore.title=`搜索 - ${route.query.keyword}`
    const filter = appStore.foods.filter(({ name,alias }) => name.includes(route.query.keyword) || (alias && alias.includes(route.query.keyword)))
    if (filter.length> 2) {
      //排序
      const key = appStore.sortTypes[appStore.sortInfo.value].alias
      return filter.sort((a, b) => appStore.sortInfo.type? a[key] - b[key] : b[key] - a[key])
    }else{
      return filter
    }
  }
 
  return []
})
</script>

<template>
  <div v-if="queryResult.length">
    <appFoodSort :disabled="queryResult.length<3" style="position: sticky;top:0px;z-index:2000;"></appFoodSort>
    <appFoodOrders :keyword="appStore.keyword" :sorts="appStore.sortInfo"  :foods="queryResult" ></appFoodOrders>
    <!-- <appFoodCard  :targetPart="appStore.sortTypes[appStore.sortInfo.value].alias" v-for="food in queryResult" :food="food" :key="food.id" /> -->
  </div>
  <Empty v-else image-size="90" :image="emptyImage" :description="`没有搜索到'${route.query.keyword || 'null'}'食物`" />
</template>

<style scoped></style>