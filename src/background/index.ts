console.log('This is background page!');



chrome.webRequest.onBeforeSendHeaders.addListener(detail => {
    console.log('onBeforeSendHeaders', detail)
    // @ts-ignore
    window.queryPriceRequestInfo = detail
}, {urls: ["https://rds-buy.aliyun.com/buy/queryPrice.json?**"]}, ["blocking"])


export default null;
