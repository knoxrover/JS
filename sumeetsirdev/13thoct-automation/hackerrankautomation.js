let minimist = require("minimist");
let fs = require('fs');
let puppeteer = require('puppeteer');




let args = minimist(process.argv);

let configJSON = fs.readFileSync(args.config,"utf-8");
let config = JSON.parse(configJSON);


//await only written in async functions! cant do on its own

let browserKaPromise = puppeteer.launch({headless:false});

// browserKaPromise.then(function(browser){
// let pageKaPromise = browser.newPage();
//     pageKaPromise.then(function(page){
//         let urlOpenKaPromise = page.goto(args.url);
//         urlOpenKaPromise.then(function(){
//             let browserCloseKaPromise = browser.close();
//             browserCloseKaPromise.then(function(){
//                 console.log("Browser is closed");
//             })
//         })
//     })
// });


browserKaPromise.then(function(browser){
    let pagesKaPromise = browser.pages();
    pagesKaPromise.then(function(pages){
        let pageOpenKaPromise = pages[0].goto(args.url);
        pageOpenKaPromise.then(function(){
            let browserCloseKaPromise = browser.close();
            browserCloseKaPromise.then(function(){
                console.log("Browser closed!");
            })
        })
    })
})



async function init(){
    let browser = await puppeteer.launch({headless:false});
    let pages = await browser.pages();
    await pages[0].goto(args.url);
    await browser.close();
    console.log("browser closed");
}

init(); //func called
