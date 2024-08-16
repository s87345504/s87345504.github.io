import { defineStore } from 'pinia'
import { ref, reactive, watch } from 'vue'
import axios from 'axios'
import foodClassList from '@/assets/food-class.json'
import foodList from '@/assets/data.json'
export const useAppStore = defineStore('appStore', () => {
    //搜索框关联响应式
    const keyword = ref('')
    const title = ref('肾友钾磷含量查询')


    watch(() => title.value, (newValue) => {
        document.title =`肾友钾磷含量查询 - ${newValue}`
    })
    //排序组件的信息
    const sortInfo = reactive(localStorage.getItem('sortInfo')
        ? JSON.parse(localStorage.getItem('sortInfo')) :
        {
            type: true,
            value: 0,
        })
    watch(() => sortInfo, (newValue) => {
       
        localStorage.setItem('sortInfo', JSON.stringify(newValue))
    }, { deep: true })


    const sortTypes = reactive([
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
        ...JSON.parse(localStorage.getItem('sortTypes')) || [],
    ])
    const DownloadProgress=ref(0)
    const foods = ref(localStorage.getItem('food-data') ? JSON.parse(localStorage.getItem('food-data')) : [])
    if(import.meta.env.MODE==='development'){
        foods.value= foodList
    }else if (!foods.value.length) {
        // axios.get('/foodquery/assets/data.json').then(res=>{
        //     foods.value=res.data
        //   localStorage.setItem('food-data',JSON.stringify(res.data))
        // })
        axios({ 
            method: 'GET', 
            url: './assets/data.json',
            onDownloadProgress: progressEvent => {
                    DownloadProgress.value =parseInt(progressEvent.loaded / progressEvent.total * 100)
                    console.log(DownloadProgress.value);
            }
        
        }).then(res=>{
            foods.value=res.data
            localStorage.setItem('food-data',JSON.stringify(res.data))
        })
    }

    const foodClass=ref(localStorage.getItem('food-class') ? JSON.parse(localStorage.getItem('food-class')) : {})
    if(import.meta.env.MODE==='development'){
        foodClass.value= foodClassList
    }else if (!Object.keys(foodClass.value).length){
        axios.get('./assets/food-class.json').then(res=>{
            foodClass.value=res.data
            // axios.get('/foodquery/addCounter.php')
            localStorage.setItem('food-class',JSON.stringify(res.data))
        })
    }
const notice = ref('')
if(import.meta.env.PROD){
    axios.get('./assets/notice.json').then(res=>{
        notice.value=res.data?.msg
    })
}else{
    notice.value='development'
}


    return { keyword, foods, sortTypes, sortInfo, title,DownloadProgress,notice,foodClass }
})
