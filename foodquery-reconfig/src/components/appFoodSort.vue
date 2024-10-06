<script setup  name="appFoodSort">
import { DropdownMenu, DropdownItem  } from 'vant'
import { useAppStore } from '@/stores/appStore';
const appStore = useAppStore()
const props = defineProps({
  disabled:Boolean,
 
})

const orders=[
  { text: '从低到高', value: true },
  { text: '从高到低', value: false }]
</script>

<template>
 
  <DropdownMenu>
    <DropdownItem  v-model="appStore.sortInfo.value" :options="appStore.sortTypes" />
    <DropdownItem :disabled="disabled" v-model="appStore.sortInfo.type" :options="orders" />
  </DropdownMenu>
</template>

<style scoped>

</style>