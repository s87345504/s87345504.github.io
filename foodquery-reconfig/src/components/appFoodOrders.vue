

<script setup  name="appFoodOrders">
import { Cell, CellGroup,Highlight } from 'vant'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/appStore'
import appHighLight from './appHighLight.vue';
import { computed } from 'vue';
const appStore = useAppStore()

const { sortTypes } = storeToRefs(appStore)
const props = defineProps({
    foods: Array,
    sorts:{
      type:Object,
      default:{value:0,type:true}
    },
    keyword:{
      type:String,
      default:"."
    }
   
})



</script>


<template>
  
    <CellGroup class="order-list" inset >

      <Cell class="van-haptics-feedback" is-link :to="`/food/${food.id}`" v-for="(food,index) in foods"   :key="food.id">
        <template #title>
          <appHighLight  :keyword="keyword" :text="`${index+1}.${food.name}`" />
        </template>
        
        <template #value>
            <div class="value">
            <span>{{ food[sortTypes[sorts.value].alias] }}</span>
            <span style="margin-left: 4px"> {{ sortTypes[sorts.value].unit }} </span>
           </div>
        </template>
        <template v-if="food.alias!==null" #label>
            <appHighLight :keyword="keyword" :text="food.alias" />
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