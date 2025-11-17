<script setup  name="defaultView">
import {Grid, GridItem ,Empty} from 'vant'
import { useAppStore } from '@/stores/appStore'
import { onUnmounted } from 'vue'

const appStore = useAppStore()
appStore.title='首页分类'
onUnmounted(()=>{
  console.log(appStore.foodClass);
})

</script>

<template>
  <Empty v-if="Object.keys(appStore.foodClass).length===0"  description="客户端更新,请刷新页面"/> 

  <Grid v-else gutter="10" clickable style="margin-top: 10px;">
  
    <GridItem 
    :to="{name:'class',query:{type}}" 
    v-for="type in Object.keys(appStore.foodClass)" 
    icon="cluster" 
    :text="type">
    </GridItem>
  </Grid>
  
</template>

<style scoped>

</style>