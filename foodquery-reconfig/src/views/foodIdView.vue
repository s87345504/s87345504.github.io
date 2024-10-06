<script setup  name="foodIdView">
import appFoodCard from '@/components/appFoodCard.vue';
import { Empty } from 'vant';
import { useAppStore } from '@/stores/appStore'
import { useRoute } from 'vue-router';
import { watch,ref } from 'vue';
import { storeToRefs } from 'pinia';

const route = useRoute()
const appStore = useAppStore()




appStore.title='食物详情'
const  food=ref(null)
watch(() => route.params.id, (newId) => {
  appStore.foods.find((item) => {
    if (item.id == newId) {
      food.value = item
      appStore.title=`食物详情 - ${food.value.name}`
    }
  })
}, { immediate: true })
</script>

<template>
  <appFoodCard v-if="food" :food="food" :unit="0"></appFoodCard>
  <Empty v-else image="error" description="食物信息不存在"/> 
</template>

<style scoped>

</style>