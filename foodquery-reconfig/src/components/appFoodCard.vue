<script setup name="appFoodCard">
import { Cell, CellGroup,Tag } from 'vant'
import { useAppStore } from '@/stores/appStore'
import { computed } from 'vue';

const appStore = useAppStore()
const props = defineProps({
  food: Object,
  targetPart:String
})
/* const contentLevel=computed(()=>{
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
}) */


const contentLevel = computed(() => {
  const getLevelInfo = (value, ranges) => {
    const { danger, warning, success } = ranges;
    if (value > danger) return { type: 'danger', text: '超高' };
    if (value > warning) return { type: 'warning', text: '高' };
    if (value > success) return { type: 'success', text: '中' };
    return { type: 'primary', text: '低' };
  };
  const kRanges = { danger: 450, warning: 300, success: 150 };
  const pRanges = { danger: 300, warning: 200, success: 100 };
  return {
    k: getLevelInfo(props.food.k, kRanges),
    p: getLevelInfo(props.food.p, pRanges)
  };
});
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
      <Cell  v-for="part in appStore.sortTypes" :key="part.alias" :title="part.text">
          <template #value>
           <div v-if="food[part.alias]" class="value">
            <Tag style="margin-right: 12px;" v-if="part.alias in contentLevel" size="medium" :type="contentLevel[part.alias]?.type">{{ contentLevel[part.alias]?.text }}</Tag>
            <span  style="color:var(--van-text-color);font-weight: 550;">{{ food[part.alias] }}</span>
            <span id="unit" style="margin-left: 4px"> {{ part.unit }} </span>

           </div>
           <div class="value null" v-else> - </div>
          </template>
          <!-- <template #label>
            <Tag style="margin-right: 12px;" v-if="part.alias in contentLevel" size="medium" :type="contentLevel[part.alias]?.type">{{ contentLevel[part.alias]?.text }}</Tag>

          </template> -->
      </Cell>
      
    </CellGroup>
  </section>
</template>

<style scoped>
.van-tag--warning{
  --van-tag-warning-color:#FF6600;
}
.food-name {
  color: var(--van-primary-color);
  margin: 0;
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
  text-overflow: ellipsis;
  overflow: hidden;
}



 div.null{
  color:var(--van-text-color);
}
</style>