<script setup name="eggView">
import { useAppStore } from '@/stores/appStore';
import { Cell, CellGroup, showToast } from 'vant';
import { ref } from 'vue';
const appStore = useAppStore();
appStore.title = '雨落无声胜有声';
function show() {
  window.$vc.show();
}
function openGithub() {
  window.open('https://github.com/s87345504/s87345504.github.io');
}
const ver = ref(localStorage.getItem('current-build') || 'unknown')


function alipay() {
  navigator.clipboard.writeText('O:/EnszSAT94Om');
  showToast('已复制到剪切板')
}

</script>

<template>
  <div>
   
    <cell-group title="关于" inset>
      <Cell title="作者" value="宋雨轩" />
      <Cell title="微信" value="songyuxuan0226" />
      <Cell title="版本" :value="ver" />


    </cell-group>
    <CellGroup title="入口" inset>
      <Cell title="支付宝大额红包" value="点击复制口令" label="打开支付宝搜索口令领取" is-link @click="alipay" />
      <Cell title="页面调试" value="vConsole" is-link @click="show" />
      <Cell title="类型编辑" value="editTypes" is-link to="/typeEdit" />
      <Cell title="GitHub" value="openSource" is-link @click="openGithub" />
    </CellGroup>


  </div>
</template>

<style scoped></style>