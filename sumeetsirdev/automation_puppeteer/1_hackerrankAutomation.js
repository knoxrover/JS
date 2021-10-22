// node 1_HackerrankAutomation.js --url=https://www.hackerrank.com --config=config.json 

// npm init -y
// npm install minimist
// npm install puppeteer 

let minimist = require("minimist");
let puppeteer = require("puppeteer");
let fs = require("fs");

let args = minimist(process.argv);

let configJSON = fs.readFileSync(args.config, "utf-8");
let configJSO = JSON.parse(configJSON);

async function run() {
    // start the browser
    let browser = await puppeteer.launch({
        headless: false,
        args: [
            '--start-maximized'
        ],
        defaultViewport: null
    });

    // get the tabs (there is only one tab)
    let pages = await browser.pages();
    let page = pages[0];

    // open the url
    await page.goto(args.url);

    // wait and then click on login on page1
    await page.waitForSelector("a[data-event-action='Login']");
    await page.click("a[data-event-action='Login']");

    // wait and then click on login on page2
    await page.waitForSelector("a[href='https://www.hackerrank.com/login']");
    await page.click("a[href='https://www.hackerrank.com/login']");

    // type userid
    await page.waitForSelector("input[name='username']");
    await page.type("input[name='username']", configJSO.userid, { delay: 20 });

    // type password
    await page.waitForSelector("input[name='password']");
    await page.type("input[name='password']", configJSO.password, { delay: 20 });

    await page.waitFor(3000);

    // press click on page3
    await page.waitForSelector("button[data-analytics='LoginPassword']");
    await page.click("button[data-analytics='LoginPassword']");

    // click on compete
    await page.waitForSelector("a[data-analytics='NavBarContests']");
    await page.click("a[data-analytics='NavBarContests']");

    // click on manage contests
    await page.waitForSelector("a[href='/administration/contests/']");
    await page.click("a[href='/administration/contests/']");


    // find number of pages
    await page.waitForSelector("a[data-attr1='Last']");
    let numPages = await page.$eval("a[data-attr1='Last']", function (atag) {
        let totPages = parseInt(atag.getAttribute("data-page"));
        return totPages;
    });

    for (let i = 1; i <= numPages; i++) {
        await handleAllContestsOfAPage(page, browser);

        if (i != numPages) {
            await page.waitForSelector("a[data-attr1='Right']");
            await page.click("a[data-attr1='Right']");
        }
    }
}

async function handleAllContestsOfAPage(page, browser) {
    // find all urls of same page
    await page.waitForSelector("a.backbone.block-center");
    let curls = await page.$$eval("a.backbone.block-center", function (atags) {
        let urls = [];

        for (let i = 0; i < atags.length; i++) {
            let url = atags[i].getAttribute("href");
            urls.push(url);
        }

        return urls;
    });

    for (let i = 0; i < curls.length; i++) {
        let ctab = await browser.newPage();
        await saveModeratorInContest(ctab, args.url + curls[i], configJSO.moderator);
        await ctab.close();
        await page.waitFor(3000);
    }
}

async function saveModeratorInContest(ctab, fullCurl, moderator) {
    await ctab.bringToFront();
    await ctab.goto(fullCurl);
    await ctab.waitFor(3000);

    // click on moderators tab
    await ctab.waitForSelector("li[data-tab='moderators']");
    await ctab.click("li[data-tab='moderators']");

    // type in moderator
    await ctab.waitForSelector("input#moderator");
    await ctab.type("input#moderator", moderator, { delay: 50 });

    // press enter
    await ctab.keyboard.press("Enter");
}



run();

