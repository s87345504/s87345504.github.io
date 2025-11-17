<script setup name="appLoading">
import { Popup, Loading  } from 'vant';

</script>

<template>
    <!-- <Overlay>
        <div class="wrapper">
            <div class="loading-contai">
                <Loading vertical>
                    食物数据加载中({{ appStore.DownloadProgress }}/100)
                    
                </Loading>
                 
                <Progress :percentage="appStore.DownloadProgress"  class="progress" />
            </div>
        </div>
    </Overlay> -->
    <Popup round class="loading-contai " >
        <template #default>
            <Loading vertical style="margin: 24px;">
                    食物数据加载中,请稍候...
                    
                </Loading>
                <!-- <Progress :show-pivot="false"  :percentage="appStore.DownloadProgress"  class="progress" /> -->
        </template>
    </Popup>
</template>

<style scoped>

.loading-contai {
    
   padding: 24px;
   
  
  
}
.progress{
    margin: 24px 0;

}
</style>