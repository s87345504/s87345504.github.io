<script setup>
import appDaugirdas from '@/components/appDaugirdas.vue';
import { Cell, CellGroup, Field, Button, showDialog, cellProps, showNotify } from 'vant'
import { onMounted, reactive } from 'vue';
import { useAppStore } from '@/stores/appStore'


const appStore = useAppStore()

onMounted(() => {
    appStore.title = "血透尿素清除指数(Kt/V)"
})
const inputs = reactive([
    {
        name: "透前尿素",
        unit: "mmol/L",
        value: null ,
        description: ""
    },
    {
        name: "透后尿素",
        unit: "mmol/L",
        value: null,
        description: ""
    },
    {
        name: "透前体重",
        unit: "kg",
        value: null,
        description: ""
    },
    {
        name: "透后体重(W)",
        unit: "kg",
        value: null,
        description: ""
    },
    {
        name: "透析时长(t)",
        unit: "h",
        value: 4,
        description: " "
    }
])
const c = () => {
    if (inputs.every(input => input.value != null && input.value > 0)) {
        let resultHTML = ""
        const R = inputs[1].value / inputs[0].value
        const URR =(1-R)*100
        const UF = inputs[2].value - inputs[3].value
        const W = inputs[3].value

        const term1 = -Math.log(R - 0.008 * inputs[4].value)
        const term2 = (4 - 3.5 * R) * (UF / W)
        
        console.log(term1, term2);

        const spKtV = term1 + term2
        if (spKtV) {
            resultHTML = `<div style="font-weight: bold; font-size: 16px; margin-top: 10px;;color:var(--van-text-color);display: flex; flex-direction: column; gap: 10px;">
         
         <div >URR: <span  style='color:var(--van-primary-color);font-weight:bold'>${URR.toFixed(0)}% </span></div>
         <div >Kt/V: <span  style='color:var(--van-primary-color);font-weight:bold'>${spKtV.toFixed(2)} </span></div>
          <div >血透充分性: <span  style='color:var(--van-primary-color);font-weight:bold'>${ URR>60 && spKtV>1.2 && spKtV<1.4 ? "达标" : "不达标"} </span></div>       
         </div>
        `
        } else {
            resultHTML = "计算异常，请检查输入数据"
        }



        showDialog({
            title: '计算结果',
            message: resultHTML,
            allowHtml: true,
            confirmButtonText: '确定'

        })
    } else {
        showNotify('请输入所有数据')
    }
    // showDialog({
    //     title:'计算结果',
    //     allowHtml:true,

    // })
}
</script>

<template>
    <div>
        <CellGroup inset title="血液透析尿素清除指数(Kt/V)">
            <Field v-for="input in inputs" v-model.number="input.value" :key="input.name" :label="input.name"
                type="number" :placeholder="input.description">
                <template #right-icon>
                    <span>{{ input.unit }}</span>
                </template>
            </Field>

            <Cell style="margin-top: 12px;">
                <Button @click="c" type="primary" block>计算</Button>
            </Cell>
        </CellGroup>
        <CellGroup inset title="计算公式">
            <appDaugirdas class="ktv" />
        </CellGroup>
        <CellGroup inset title="使用说明">
            <div class="van-cell">
                <ul class="">
                <li>Kt/V由尿素清除率（K）、透析时间（t）和尿素分布容积（V）组成，用于量化透析过程中尿素的清除效率。</li>
                
                <li>R=透析后BUN或尿素/透析前BUN或尿素</li>
                <li>URR=1-R</li>
                <li>超滤体积（UF）=透析前体重-透析后体重</li>
                <li>计算Kt/V是评估血透有效性的最常用方法。URR>60%且Kt/V>1.2~1.4表示血透有效。</li>
            </ul>
            </div>
        </CellGroup>
    </div>
</template>


<style scoped>
.ktv {
    margin: 12px;
}

li {
    list-style-type: decimal;
    margin: 6px 0;
}
</style>