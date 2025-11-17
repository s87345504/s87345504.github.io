<script setup name="insuranceCalcView">
import { ref, onMounted, onBeforeUnmount} from 'vue'
import { Cell, CellGroup, Field, Button ,showDialog} from 'vant'
import calc from '@/hooks/calc'
import { useAppStore } from '@/stores/appStore'
import { useRoute } from 'vue-router'

const appStore = useAppStore()
const route = useRoute()


onMounted(() => {
  appStore.title='医保报销计算器'
  
})


const inputs = ref([
  {
    "name": "医保消费金额",
    "unit": "元",
    "value": "",
    "description": "医保总消费金额",
    "flag":1,
  },
  {
    "name": "统筹支付金额",
    "unit": "元",
    "value": "",
    "description": "由医保统筹基金支付的金额",
    "flag":2
  },
  {
    "name": "个人支付金额",
    "unit": "元",
    "value": "",
    "description": "患者个人需要支付的金额",
    "flag":4
  },
  {
    "name": "医保报销比例",
    "unit": "%",
    "value": "",
    "description": "医保能够报销的比例",
    "flag":8
  }
])
const c= ()=>{
calc(inputs.value)
}
const clear = () => {
  inputs.value.forEach(input => {
    input.value = ''
  })
}
</script>

<template>
  <div>
    <CellGroup inset :title="appStore.title">
    <Field v-for="input in inputs" v-model.number="input.value" :key="input.name" :label="input.name" 
      type="number"
      :placeholder="input.description">
      <template #right-icon>
        <span>{{ input.unit }}</span>
      </template>
    </Field>
    <div class="clear-data">
      <a @click="clear">清空数据</a>
    </div>
    <Cell style="margin-top: 24px;">
      <Button @click="c" type="primary" block>计算</Button>
    </Cell>
  </CellGroup>
  <CellGroup inset title="使用说明">
            
                <ul class="van-cell" style="list-style-type: decimal">
                    <li>用于计算医保报销比例,输入其中任意两种数值即可计算出结果.</li>

                 
                    </ul>
            
        </CellGroup>
  </div>

</template>

<style scoped>
.clear-data {
  font-size: 15px;
  text-align: right;
  margin: 10px 0;
}

.clear-data a {
  color: var(--van-primary-color);
  text-decoration: none;
  padding-right: 24px;
}
</style>
