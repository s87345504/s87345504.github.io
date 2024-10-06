const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

async function htmlInline() {
    const htmlPath=path.resolve(__dirname,"dist/index.html");
    const htmlContent=fs.readFileSync(htmlPath,"utf-8") ;
    const $ = cheerio.load(htmlContent);

    const jsPath=path.resolve(__dirname,"dist/assets/index.js");
    const cssPath=path.resolve(__dirname,"dist/assets/index.css");

    const jsContent=fs.readFileSync(jsPath,"utf-8");
    const cssContent=fs.readFileSync(cssPath,"utf-8");

    $('script,link[rel="stylesheet"]').remove();

    $("head").append(`<script type="module">\r\n${jsContent}\r\n</script>\r\n`);
    $("head").append(`<style>\r\n${cssContent}</style>\r\n`);
   
    fs.writeFileSync(htmlPath,$.html()+"\r\n"+'<!--last compilation time：'+new Date().toLocaleString()+'-->',{encoding:"utf-8"});
    console.log(`> inline success`);
}
htmlInline();