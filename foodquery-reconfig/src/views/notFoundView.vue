<script setup  name="notFoundView">
import {Empty } from 'vant'
import { useAppStore } from '@/stores/appStore'
const appStore = useAppStore()
appStore.title='找不到该页面'
</script>

<template>
  <Empty image="error" description="404 not found"/> 
</template>

<style scoped>

</style>