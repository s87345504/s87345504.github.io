const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');
const crc32 = require("buffer-crc32");
const { Buffer } = require('node:buffer');

function getFormattedDate() {  
    const now = new Date(); // 创建一个表示当前时间的Date对象  
    const year = now.getFullYear().toString().slice(-2); // 获取年份（2位数字）  
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份是从0开始的，所以加1，并使用padStart保证是两位数  
    const day = String(now.getDate()).padStart(2, '0'); // 获取当前月份的天数，并使用padStart保证是两位数  
    const flag =`${year}${month}${day}`
    
    return flag; // 返回格式化的日期字符串  
  } 
async function build() {
    const htmlPath=path.resolve(__dirname,"dist/index.html");
    const htmlContent=fs.readFileSync(htmlPath,"utf-8");
    
    const crc= crc32.unsigned(Buffer.from(htmlContent)).toString(36);
    const  b =`build-${getFormattedDate()}.${crc}`
    console.log("Build:"+b);
    const result=htmlContent.replace("{build-time}",b)
    fs.writeFileSync(htmlPath,result);
}

build();