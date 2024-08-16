<script setup  name="defaultView">
import {Grid, GridItem ,Empty} from 'vant'
import { useAppStore } from '@/stores/appStore'

const appStore = useAppStore()
appStore.title='肾友食物钾磷含量查询'
</script>

<template>
  <Empty v-if="typeof appStore.foodClass !=='object'" image="error" description="暂无数据"/> 
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