<script setup name="classView">
import { watch } from 'vue'
import { useRoute,useRouter } from 'vue-router'
import { useAppStore } from '@/stores/appStore'
import appFoodOrders from '@/components/appFoodOrders.vue'
import appFoodSort from '@/components/appFoodSort.vue'
import { Empty } from 'vant'
import { computed, ref } from 'vue'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()
const ids = ref([])
watch(() => route.query.type, (newValue) => {
  if(typeof appStore.foodClass !== 'object') {
    
    router.push({ name: '404' })
    return
  }
  if (newValue in appStore.foodClass) {
    ids.value = appStore.foodClass[newValue]
    appStore.title = '分类 - ' + newValue
  } else {
    appStore.title = 'Error'
    ids.value = []
  }
}, { immediate: true })

const classResult = computed(() => {
  if (ids.value.length) {
    const filter = appStore.foods.filter(item => ids.value.includes(item.id))
    if (filter.length > 2) {
      //排序
      const key = appStore.sortTypes[appStore.sortInfo.value].alias
      return filter.sort((a, b) => appStore.sortInfo.type ? a[key] - b[key] : b[key] - a[key])
    } else {
      return filter
    }
  }
  return []
})
</script>

<template>
  <div v-if="ids.length">
    <appFoodSort :disabled="classResult.length < 3" style="position: sticky;top:0px;z-index:2000;"></appFoodSort>
  <!-- <appFoodCard :targetPart="appStore.sortTypes[appStore.sortInfo.value].alias" v-for="food in classResult" :key="food.id" :food="food"></appFoodCard> -->
  <appFoodOrders :foods="classResult" :sorts="appStore.sortInfo"></appFoodOrders>
  </div>
  <Empty v-else description="分类错误" />
</template>

<style scoped></style>