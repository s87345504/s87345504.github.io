

<script setup  name="appFoodOrders">
import { Cell, CellGroup } from 'vant'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/appStore'
import { computed } from 'vue';
const appStore = useAppStore()

const { sortTypes } = storeToRefs(appStore)
const props = defineProps({
    foods: Array,
    sorts:{
      type:Object,
      default:{value:0,type:true}
    }
   
})



</script>


<template>
  
    <CellGroup class="order-list" inset >

      <Cell class="van-haptics-feedback" is-link :to="`/food/${food.id}`" v-for="(food,index) in foods" :title="index+1+'.'+food.name"  :key="food.id">
        <template #value>
            <div class="value">
            <span>{{ food[sortTypes[sorts.value].alias] }}</span>
            <span style="margin-left: 4px"> {{ sortTypes[sorts.value].unit }} </span>
           </div>
        </template>
      </Cell>
    </CellGroup>
</template>

<style scoped>
.order-list{
    margin: 12px 16px;
}
.value{
  color:var(--van-primary-color);
}
</style>