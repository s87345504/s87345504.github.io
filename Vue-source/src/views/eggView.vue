<script setup  name="eggView">
import { useAppStore } from '@/stores/appStore';
import { Cell, CellGroup } from 'vant';
const appStore = useAppStore();
appStore.title= '隐藏角落';
 function show() {
  window.$vc.show();
 }
</script>

<template>
  <CellGroup title="隐藏角落">
    
    <Cell title="页面调试" is-link @click="show" />
    <Cell title="类型编辑" is-link to="/typeEdit" />
  </CellGroup>
</template>

<style scoped>

</style>