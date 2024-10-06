const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');


function getFormattedDate() {  
    const now = new Date(); // 创建一个表示当前时间的Date对象  
    const year = now.getFullYear(); // 获取完整的年份（4位数字）  
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份是从0开始的，所以加1，并使用padStart保证是两位数  
    const day = String(now.getDate()).padStart(2, '0'); // 获取当前月份的天数，并使用padStart保证是两位数  
    
    return `${year}-${month}-${day}`; // 返回格式化的日期字符串  
  } 
async function build() {
    const htmlPath=path.resolve(__dirname,"dist/index.html");
    const htmlContent=fs.readFileSync(htmlPath,"utf-8") ;
    const $ = cheerio.load(htmlContent);
    $('head').append(`<meta name="build-time" content="${getFormattedDate()}">`)
    fs.writeFileSync(htmlPath,$.html());
}

build();