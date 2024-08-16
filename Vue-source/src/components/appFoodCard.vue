<script setup name="appFoodCard">
import { Cell, CellGroup,Tag } from 'vant'
import { useAppStore } from '@/stores/appStore'
import { computed } from 'vue';

const appStore = useAppStore()
const props = defineProps({
  food: Object,
  targetPart:String
})
const contentLevel=computed(()=>{
    let k ={}
    let p ={}
    if(props.food.k>450){
      k.type = 'danger'
      k.text='超高'
     
    }else if(props.food.k>300){
      k.type = 'warning'
      k.text='高'
    }else if(props.food.k>150){
      k.type = 'success'
      k.text='中'
    
    }else{
      k.type = 'primary'
      k.text='低'
    }

    if(props.food.p>300){
      p.type = 'danger'
      p.text='超高'
     
    }else if(props.food.p>200){
      p.type = 'warning'
      p.text='高'
    
    }else if(props.food.p>100){
      p.type = 'success'
      p.text='中'
    
    }else{
      p.type = 'primary'
      p.text='低'
    }


    
  return{k,p}
})

</script>

<template>
  <section role="food-card">
    <CellGroup inset >
      <template #title>
            <h6 class="food-name" >
              {{ food.name }} 
           
             
             </h6>
             <small v-if="food.alias" :title="food.alias" class="alias"> {{ food.alias }}</small>
             
      </template>
      <Cell :class="{'cell-select': part.alias ===targetPart}" v-for="part in appStore.sortTypes" :key="part.alias" :title="part.text">
          <template #value>
           <div class="value">
            <Tag style="margin-right: 12px;" v-if="part.alias in contentLevel" size="medium" :type="contentLevel[part.alias]?.type">{{ contentLevel[part.alias]?.text }}</Tag>
            <span style="color:inherit">{{ food[part.alias]  }}</span>
            <span style="margin-left: 4px"> {{ part.unit }} </span>
           </div>
          </template>
          <!-- <template #label>
            <Tag style="margin-right: 12px;" v-if="part.alias in contentLevel" size="medium" :type="contentLevel[part.alias]?.type">{{ contentLevel[part.alias]?.text }}</Tag>

          </template> -->
      </Cell>
      
    </CellGroup>
  </section>
</template>

<style scoped>
.food-name {
  color: var(--van-primary-color);
  margin: 0;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
}
 .alias {
  color:var(--van-cell-label-color);
  font-size: 12px;
  display: block;
  width: 100%;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.cell-select{
  color:var(--van-primary-color);
  background-color: var(--van-active-color);
}
.cell-select .value{
  color:var(--van-primary-color);
}
</style>