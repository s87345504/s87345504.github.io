<script setup name="NoWechat">
import { Empty, showToast, Cell, CellGroup } from 'vant'
import { ref } from 'vue'

const count = ref(0)
const show = ref(sessionStorage.getItem("backdoor") || false)
function debug() {
    if (show.value) {
        return
    }
    count.value++
    if (count.value > 4) {
        showToast(`Click ${8 - count.value} more times to open the back door`)
    }
    if (count.value > 7) {
        sessionStorage.setItem("backdoor", true)
        show.value = true
        count.value = 0
    }
}

function openVconsole() {
    window.$vc.show()
}
function wechatFake() {
    localStorage.setItem("wechat_fake", true)
    //showToast("please refresh the page")
    location.reload()
}
function reset(e) {
    if (e.target.className === "no_wechat" || e.target.className === "van-empty") {
        console.log('reset back door count');
        count.value = 0
    }
}
</script>

<template>
    <div class="no_wechat" @click="reset">
        <Empty>
            <template #image>
                <div class="wechat_logo" @click="debug">
                    <svg t="1725432177815" class="icon" viewBox="0 0 1284 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="8993" width="128" height="128">
                        <path
                            d="M558.755355 679.972943c0 165.086809 162.777903 299.003382 362.498309 299.003382 48.487035 0 95.819617-8.081172 137.379932-21.934611 11.544532 5.772266 94.665163 77.348365 113.136415 64.64938 12.698985-10.390079-30.015784-87.738444-33.479143-101.591883 87.738444-54.259301 145.461105-141.997745 145.461105-240.126268 0-165.086809-162.777903-299.003382-362.498309-299.003383S558.755355 514.886133 558.755355 679.972943z m438.692221-105.055243c0-28.86133 23.089064-51.950395 51.950395-51.950394s51.950395 23.089064 51.950394 51.950394-23.089064 51.950395-51.950394 51.950395-51.950395-23.089064-51.950395-51.950395z m-255.13416 0c0-28.86133 23.089064-51.950395 51.950395-51.950394s51.950395 23.089064 51.950394 51.950394-23.089064 51.950395-51.950394 51.950395-51.950395-23.089064-51.950395-51.950395z"
                            p-id="8994" fill="#e6e6e6"></path>
                        <path
                            d="M526.430665 677.664036c0-180.094701 177.785795-325.555806 395.977452-325.555806 11.544532 0 23.089064 0 33.479143 1.154453C931.643743 154.696731 727.305524 0 479.098083 0 214.728298 0 0 176.631342 0 394.822999c0 129.29876 76.193912 244.744081 192.793687 316.32018-4.617813 17.316798-60.031567 120.063134-43.869223 133.916573 24.243517 16.162345 133.916573-78.502818 148.924465-85.429538 55.413754 18.471251 116.599775 28.86133 181.249154 28.861331 23.089064 0 46.178129-1.154453 69.267193-4.617813-13.853439-32.32469-21.934611-68.11274-21.934611-106.209696zM646.493799 184.712514c38.096956 0 69.267193 31.170237 69.267193 69.267193 1.154453 38.096956-30.015784 69.267193-69.267193 69.267193-38.096956 0-69.267193-31.170237-69.267192-69.267193s31.170237-69.267193 69.267192-69.267193zM310.547914 323.2469c-38.096956 0-69.267193-31.170237-69.267192-69.267193s31.170237-69.267193 69.267192-69.267193 69.267193 31.170237 69.267193 69.267193-31.170237 69.267193-69.267193 69.267193z"
                            p-id="8995" fill="#7ed143"></path>
                    </svg>
                </div>
            </template>
            <template #description>
                <h3>请使用微信客户端打开</h3>
            </template>
        </Empty>
        <CellGroup v-show="show" inset>
            <Cell @click="openVconsole" is-link title="vConsole" value="vconsole调试工具" />
            <Cell @click="wechatFake" is-link title="wechatFake" value="wechatfake" />
        </CellGroup>
    </div>
</template>

<style scoped>
.no_wechat {
    height: 100vh;
    background-color: #eff2f5;

}

.wechat_logo {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>