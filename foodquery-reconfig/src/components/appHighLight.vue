<template>
  <div class="highlight-text">
    <div v-if="highlightedNodes.length > 0">
      <span v-for="(node, index) in highlightedNodes" :key="index" :style="node.match ? highlightStyle : {}">
        {{ node.text }}
      </span>
    </div>
    <div v-else>
      {{ text }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  keyword: {
    type: String,
    default: ''
  },
  highlightColor: {
    type: String,
    default: 'inherit'
  },
  highlightTextColor: {
    type: String,
    default: 'var(--van-primary-color)'
  }
});

const highlightedNodes = computed(() => {
  if (!props.keyword.trim()) {
    return [{ text: props.text, match: false }];
  }

  const regex = new RegExp(props.keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  const matches = [...props.text.matchAll(regex)];
  
  if (matches.length === 0) {
    return [{ text: props.text, match: false }];
  }

  const nodes = [];
  let lastIndex = 0;

  matches.forEach(match => {
    // 添加非匹配部分
    if (match.index > lastIndex) {
      nodes.push({
        text: props.text.substring(lastIndex, match.index),
        match: false
      });
    }
    
    // 添加匹配部分
    nodes.push({
      text: match[0],
      match: true
    });
    
    lastIndex = match.index + match[0].length;
  });

  // 添加剩余部分
  if (lastIndex < props.text.length) {
    nodes.push({
      text: props.text.substring(lastIndex),
      match: false
    });
  }

  return nodes;
});

const highlightStyle = computed(() => ({
  backgroundColor: props.highlightColor,
  color: props.highlightTextColor,
  padding: '0px',
  borderRadius: '0px'
}));
</script>

<style scoped>
.highlight-text {
  word-break: break-word;
  line-height: 1.5;
}
</style>
