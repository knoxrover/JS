// npm i puppeteer;
let puppeteer = require("puppeteer");
// creates headless browser
let browserStartPromise = puppeteer.launch({
    // visible 
    headless: false,
    // type 1sec // slowMo: 1000,
    defaultViewport: null,
    // browser setting 
    args: ["--start-maximized", "--disable-notifications"]
});
let page, browser, rTab;
browserStartPromise
    .then(function (browserObj) {
        console.log("Browser opened");
        // new tab 
        browser = browserObj
        let browserTabOpenPromise = browserObj.newPage();
        return browserTabOpenPromise;
    }).then(function (newTab) {
        page = newTab
        console.log("new tab opened ")
        let gPageOpenPromise =
            newTab.goto("https://www.google.com/");
        return gPageOpenPromise;
    }).then(function () {
        console.log("Google home page opened");
        // keyboard -> data entry 
        let waitforTypingPromise = page.type("input[title='Search']", "pepcoding");
        return waitforTypingPromise;
    }).then(function () {
        // keyboard -> specific keys
        let enterWillBeDonePromise = page.keyboard.press('Enter', { delay: 100 });
        return enterWillBeDonePromise;
    }).then(function () {
        // next page 
        //wait for element to be visible on the page-> whenver you go to a new page 
        console.log("wait for element to be visible");
        let waitForElementPromise = waitAndClick(".LC20lb.DKV0Md",page);
        return waitForElementPromise;
    }).then(function(){
        let wcPromise = handleIfNotPresent("#lp_modal_close",page);
        console.log("wcPromise",wcPromise);
        return wcPromise;
    })
    // .then(function () {
    //     // 30 seconds 
    //     let waitForModalPromise = page.waitForSelector("#lp_modal_close", { visible: true });
    //     return waitForModalPromise;
    // })
    // .then(function () {
    //     let clickModal = page.click("#lp_modal_close", { delay: 100 });
    //     return clickModal;
    // })

    .then(function () {
        // page element -> cheerio 
        let allLisPromise = page.$$(".site-nav-li");
        return allLisPromise;
    }).then(function (allElem) {
        let elementWillBeclickedPromise = allElem[7].click({ delay: 100 });
        return elementWillBeclickedPromise;
    })
    // resources page is on next tab and next tab will take some time to open 
    .then(function () {
        let waitPromise = page.waitFor(2000);
        return waitPromise;
    })
    .then(function () {
        let listofOpenedTabsPromise = browser.pages();
        return listofOpenedTabsPromise;
    })
    .then(function (array) {
        rTab = array[array.length - 1];
        let waitforLevel1Promise = waitAndClick('h2[title="Data S   tructures and Algorithms in Java [Level 1 - Foundation]"]',rTab);
        return waitforLevel1Promise;
    })
    // .then(function () {
    //     let clickLevel1Promise = rTab.click('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]');
    //     return clickLevel1Promise;
    // })
    
    .then(function () {
        console.log("level 1 will be opened");
    })


    //user defined promise based function -> it will return promise which will later be resolved or rejected
    //resolved when the user has waited for element to appear as well as click it after appearing - both done in one polyfill
    //promise based function with a resolve and a reject function in cb 


    function waitAndClick(selector,cpage){
        return new Promise(function(resolve,reject){
            let waitForModalPromise = page.waitForSelector(selector, { visible: true });
            waitForModalPromise.then(function (){
                let clickModal = cpage.click(selector,{delay:100})
                return clickModal;
            }).then(function(){
                resolve();
            }).catch(function(err){
                reject(err);
            })
                })

    }


    // promise -> banner if not present -> resolve, clicks if present, reject -> code will run skipping close part

    function handleIfNotPresent(selector,cPage){
        return new Promise(function cb(resolve,reject){
            //wait click modal
            let waitAndClickPromise = waitAndClick(selector,cPage);
            waitAndClickPromise.then(function(){
                resolve();
            })
            waitAndClickPromise.catch(function(err){
                resolve();
            })
        })
    }