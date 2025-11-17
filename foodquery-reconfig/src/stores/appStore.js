import { defineStore } from 'pinia'
import { ref, reactive, watch } from 'vue'
import axios from 'axios'

function loadLocalStorage(key, defaultValue) {
    if (typeof defaultValue !== 'function') {
        throw new Error('defaultValue must be a function')
    }
    console.debug(`loadLocalStorage==> ${key}`);
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : defaultValue()
}

async function getData(key) {
    if (typeof key !== 'string') {
        throw new Error('key must be a string')
    }
    const dataMap = {
        'food-data': 'food-data.json',
        'food-class': 'food-class.json',
        'food-types': 'food-types.json',
        'notice': 'notice.json',
    }
    if (!dataMap[key]) {
        throw new Error(`key ${key} not found in dataMap`)
    }
    if (key != 'notice' && localStorage.getItem(key)) {
        try {
            const data = JSON.parse(localStorage.getItem(key))
            console.log(`getData==> key:'${key}'  from==> localStorage`)
            return data
        } catch (e) {
            console.error('Failed to parse cached data:', e);
        }
    }

    const response = await fetch(`./data/${dataMap[key]}`);
    console.log(`getData==> key:'${key}'  from==> fetch`)
    return response.json();
}



export const useAppStore = defineStore('appStore', () => {
    const BASE_FOOD_TYPES = [
        {
            "text": "钾",
            "alias": "k",
            "unit": "毫克",
            "value": 0
        },
        {
            "text": "磷",
            "alias": "p",
            "unit": "毫克",
            "value": 1
        },

    ]
    const keyword = ref('')
    const title = ref('食物钾磷含量查询')
    // 可选排序的类型(食物元素)
    const sortTypes = reactive(BASE_FOOD_TYPES)
    getData('food-types').then(res => {
        Object.assign(sortTypes, res)
        localStorage.setItem('food-types', JSON.stringify(res))
    })
    // 排序组件的存储信息
    const sortInfo = reactive(loadLocalStorage('sortInfo', () => ({ type: true, value: 0 })))
    const foods = ref([])
    getData('food-data').then(res => {
        foods.value = res
        localStorage.setItem('food-data', JSON.stringify(res))
    })
    const foodClass = ref({})
    getData('food-class').then(res => {
        foodClass.value = res
        localStorage.setItem('food-class', JSON.stringify(res))
    })
    const notice = ref(['当前处于开发调试中....'])
    if (import.meta.env.PROD) {
        getData('notice').then(res => {
            notice.value = res?.msg
        })
    }

    watch(() => title.value, (newValue) => {
        document.title = `食物钾磷含量查询 - ${newValue}`
    }, { immediate: true })
    watch(() => sortInfo, (newValue) => {
        
        localStorage.setItem('sortInfo', JSON.stringify(newValue))
    }, { deep: true })
    
   
    return { keyword, foods, title, sortTypes, sortInfo, title, notice, foodClass }
})
