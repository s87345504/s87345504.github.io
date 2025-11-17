import {showNotify } from 'vant'

export default function calc(values) {
    //六种组合模式
    const typeList = [3, 5, 9, 6, 10, 12];
    let flags = 0
    for (let i = 0; i < values.length; i++) {
        if (values[i].value >0) {
            flags += values[i].flag
            if (typeList.includes(flags)) {
                break
            }
        }
    }
    if(!typeList.includes(flags)){
        showNotify('最少需要输入两个项目或输入值无效');
        return false
    }
    if(flags === 3 && values[0].value < values[1].value){
        showNotify('医保消费金额不能小于统筹支付金额');
        return false
    }
    if(flags === 5 && values[0].value < values[2].value){
        showNotify('医保消费金额不能小于个人支付金额');
        return false
    }
    if(flags & 8 && values[3].value <0 || values[3].value > 100){
        showNotify('报销比例应在0-100之间');
        return false
    }
    if(flags===12 && values[3].value===100){
        showNotify('报销比例不能为100%');
        return false
    }
    switch (flags) {
        case 3:
            values[2].value=(values[0].value-values[1].value).toFixed(2)
            values[3].value=(100-values[2].value/values[0].value*100).toFixed(2)
            break
        case 5:
            values[1].value=(values[0].value-values[2].value).toFixed(2)
            values[3].value=(100-values[2].value/values[0].value*100).toFixed(2)
            break
        case 9:
            values[1].value=(values[3].value/100*values[0].value).toFixed(2)
            values[2].value=(values[0].value-values[1].value).toFixed(2)
            break
        case 6:
            values[0].value=(values[1].value+values[2].value).toFixed(2)
            values[3].value=(100-values[2].value/values[0].value*100).toFixed(2)
            break
        case 10:
            values[0].value=(values[1].value/(values[3].value/100)).toFixed(2)
            values[2].value=(values[0].value-values[1].value).toFixed(2)
            break
        case 12:
            values[0].value=(values[2].value/(1-values[3].value/100)).toFixed(2)
            values[1].value=(values[0].value-values[2].value).toFixed(2)
            break      
    }
    return true
}

