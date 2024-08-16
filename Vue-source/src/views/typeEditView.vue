<script setup name="typeEditView">
import axios from 'axios';
import { ref, computed, onBeforeUnmount } from 'vue';
import typesData from '@/assets/types.json'
import { Cell, CellGroup, Checkbox } from 'vant'
import { useAppStore } from '@/stores/appStore'
import { showToast } from 'vant';


const appStore = useAppStore()



appStore.title = 'type selection'
const types = ref(localStorage.getItem('types') ? JSON.parse(localStorage.getItem('types')) : [])

if (types.value.length == 0) {
  if (import.meta.env.MODE == 'development') {
    types.value = typesData
  } else {
    axios.get('./assets/types.json').then(res => {
      types.value = res.data
      localStorage.setItem('types', JSON.stringify(types.value))
    })
  }

}

const checkTypes = computed(() => {

  const temp = types.value.filter(item => item.checked)
  temp.map((item, index) => {
    delete item.checked
    item.value = index +2
  })
  return temp
})
onBeforeUnmount(() => {
  localStorage.setItem('types', JSON.stringify(types.value))
  localStorage.setItem('sortTypes', JSON.stringify(checkTypes.value))
  //重写排序，排序ID可能失效！删除排序信息
  localStorage.removeItem('sortInfo')
  showToast( '已保存,刷新页面后生效')
}
)

</script>

<template>
  <CellGroup title="选择需要显示的类型">
    <Cell v-for="item in types" :value="item.unit" :label="`Alias:${item.alias}`">
      <template #title>
        <Checkbox v-model="item.checked">{{ item.text }}</Checkbox>
      </template>
    </Cell>
  </CellGroup>

</template>

<style scoped></style>