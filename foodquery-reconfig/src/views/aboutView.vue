<script setup name="eggView">
import { useAppStore } from '@/stores/appStore';
import { Cell, CellGroup, showToast, Popup, TextEllipsis } from 'vant';
import { ref } from 'vue';
const appStore = useAppStore();
appStore.title = 'About';

const ver = ref(localStorage.getItem('current-build') || 'unknown')

const aboutList = ref([
  {
    title: '作者',
    value: '宋雨轩',
    icon: 'user'
  },
  {
    title: '微信',
    value: 'songyuxuan0226',
    icon: 'wechat'
  },
  {
    title: '版本',
    value: ver,
    icon: 'info'
  }
])

const talks=ref([
  {
    title: '《行香子·与诸病友共勉》',
    value: `银管连躯，血流循线。
任寒温、几度循环。
浮生暂寄，病骨偏安。
但影作朋，光作伴，药为鞍。

涤残未惧，重生何畏？
纵千针、笑对阑干。
命由心造，境自禅观。
但身同铁，志同岳，气同磐。`,
  }
])

function copyAbout(title, value) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(value).then(() => {
      showToast(`${title}复制成功`)
    }).catch(err => {
      console.error('复制失败', err);
    })
  }else{
    showToast('复制失败')
  }
}
</script>

<template>
  <div>

    <CellGroup title="关于" inset>

      <Cell v-for="item in aboutList" :key="item.value" :icon="item.icon" :title="item.title" :clickable="true"
        :is-link="false" @click="copyAbout(item.title, item.value)" :value="item.value" />


    </CellGroup>
    <CellGroup title="辅助工具" inset>
      <Cell icon="gold-coin" title="医保报销比例计算器" is-link to="/insuranceCalc" />
      <Cell icon="discount" title="血透尿素清除指数(Kt/V)" is-link to="/ktvCalc" />
      <!-- <Cell icon="description" title="营养类型选择编辑器" is-link to="/typeEdit" /> -->
      <!-- <Cell icon="setting" title="页面调试"  is-link @click="show" /> -->
    </CellGroup>
    <CellGroup title=" " inset>
      <div class="van-cell talk">
        <div>{{talks[0].title}}</div>
        <pre>{{ talks[0].value }}</pre>
        <i>此词为AI创作</i>
      </div>

    </CellGroup>
    
  </div>
</template>

<style scoped>
.talk {
  display: flex;
  flex-direction: column;
  color: var(--van-primary-color);
  font-size: 1rem; /* 使用rem代替em更可控 */
  user-select: text;
  text-align: center;
}

.talk pre,
.talk div {
  color: inherit;
  font-size: inherit;
  line-height: 1.5;
  margin-bottom: 0.625rem; /* 10px转换为rem单位 */
  font-family: inherit;
}

.talk div {
  font-weight: 550; /* 介于500-600之间的字体粗细 */
  color: var(--van-text-color);
}

.talk i {
  font-style: normal;
  font-size: 0.8rem;
  color: var(--van-text-color-2);
  opacity: 0.4;
  user-select: none;
  transform: translateY(0.75rem); /* 12px转换为rem */
}

</style>
