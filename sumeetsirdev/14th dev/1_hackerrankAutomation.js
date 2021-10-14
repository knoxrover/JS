let minimist = require('minimist');
let fs = require('fs');
let puppeteer = require('puppeteer');


let args= minimist(process.argv);
let configJSON = fs.readFileSync(args.config,"utf-8");
let config=JSON.parse(configJSON);

async function run(){
    let browser = await puppeteer.launch({
        
        args:[
            '--start-maximized'
        ],
        headless:false,
        defaultViewport:{
            width:1920,
            height:1080,
            isMobile:false
        }
    });
    let pages = await browser.pages();
    let page=pages[0];
    await page.goto(args.url);

    await page.click("li#menu-item-2887");
    await page.waitForNavigation();
    

    await page.click("a.f1-button[href='www.hackerrank.com/login']");
    await page.waitForNavigation();

    await page.waitFor(5000);


    await page.click("div.cookie-btn-wrapper > button");

    //tab thrice

    for(let i=0;i<3;i++){
        await page.keyboard.press("Tab",{delay:300});
    }


    await page.keyboard.type(config.userid, {delay:100});
    await page.keyboard



}