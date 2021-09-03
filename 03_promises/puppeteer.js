//npm i puppeteer

let puppeteer = require('puppeteer');
//creates headless browser
let browserStartPromise = puppeteer.launch({
    //visible
    headless:false,
    //type 1 sec
    // slowMo:1000,
    //port 
    defaultViewport:null,
    //settings: 
    args: ["--window-size=1920,1040","--disable-notifications"]
});

let page,browser,rTab;

//promise objects always needs to be consumed resolved or rjected
browserStartPromise.then(function(browserObj){
    console.log("Browser opened");
    browser = browserObj;
    let browserTabOpenPromise = browserObj.newPage();
    return browserTabOpenPromise;
}).then(function(newTab){
    page=newTab;
        console.log("New tab opened");
        let gPageOpenPromise = newTab.goto("https://www.google.com/");
        return gPageOpenPromise;
    }).then(function(){
        console.log("google page opened");
        //keyboard -?> data entry;
        let waitForTypingPromise = page.type("input[title='Search']","pepcoding");
        // need to do waiting in between to avoid code break
        return waitForTypingPromise;
    }).then(function (){
        //keyboard specific keys 
        let enterWillBeDonePromise = page.keyboard.press('Enter',{delay:100});
        return enterWillBeDonePromise;
    }).then(function(){
        //wait for element to be visible on the page
        let waitForElement =  page.waitForSelector(".LC20lb.DKV0Md",{visible: true});
        return waitForElement;
    }).then(function(){
        //mouse function
        let elemClickPromise = page.click(".LC20lb.DKV0Md");
        return elemClickPromise;
    }).then(function(){
        //page element -> cheerio
        let allLisPromise = page.$$(".site-nav-li");
        return allLisPromise;
    }).then(function (allElem){
        let elemWillBeClickedPromise = allElem[7].click({delay : 100});
        return elemWillBeClickedPromise;
    }).then(function () {
        let waitPromise = page.waitFor(2000);
        return waitPromise;
    }).then(function(){
        let listofOpenedTabs = browser.pages();
        return listofOpenedTabs;
    }).then(function(array){
        rTab = array[array.length-1];
        let waitForLevel1Prom = rTab.waitForSelector('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]',
        {visible:true});
        return waitForLevel1Prom;
    }).then(function(){
        let clickLevel1Promise = rTab.click('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]');
        return clickLevel1Promise;
    }).then(function(){
        console.log("Level 1 opened.");
    });



