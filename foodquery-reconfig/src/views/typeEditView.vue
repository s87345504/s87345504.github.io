<script setup name="typeEditView">
import { ref, computed, onBeforeUnmount } from 'vue';
import { Cell, CellGroup, Checkbox } from 'vant'
import { useAppStore } from '@/stores/appStore'



const appStore = useAppStore()




appStore.title = '功能暂时关闭'








</script>

<template>
  <div style="">
    此功能暂时关闭
    <!-- <CellGroup>
      <template #title>

        <Checkbox v-model="allchecked">全选</Checkbox>

      </template>
      <Cell v-for="item in appStore.types" :value="item.alias">
        <template #title>
          <Checkbox v-model="item.checked">{{ item.text }}</Checkbox>
        </template>
      </Cell>
    </CellGroup> -->
  </div>

</template>

<style scoped></style>