<script setup  name="headerNoticeBar">
import {NoticeBar, Swipe, SwipeItem} from 'vant';
import { useAppStore } from '@/stores/appStore';


const appStore = useAppStore();

</script>

<template>
  <NoticeBar v-if="appStore.notice.length > 0" mode="closeable" left-icon="volume-o" :scrollable="false">
    <Swipe
    vertical
    class="notice-swipe"
    :autoplay="5000"
    :touchable="false"
    :show-indicators="false"
    >
    <SwipeItem v-for="notice in appStore.notice" >{{ notice }}</SwipeItem>
    </Swipe>

  </NoticeBar>
</template>

<style scoped>
.notice-swipe{
  height: 40px;
  line-height: 40px;
}
</style>