/*

Quantumult X 脚本

By LTribe：
PDF Expert 7 Download Link：http://t.cn/A6zQCfn6

[rewrite_local]
# PDF Expert 7 解锁内购年订阅
^https:\/\/license\.pdfexpert\.com\/api\/.*\/pdfexpert6\/subscription\/(check$|refresh$) url script-response-body PDFExpert7.js

[mitm]
hostname = license.pdfexpert.com,

*/

let obj = JSON.parse($response.body);

obj = {
  "isEligibleForIntroPeriod":true,
  "originalTransactionId":"730000355000000",
  "subscriptionExpirationDate":"01:01 01/01/2020",
  "subscriptionState":"active",
  "subscriptionReceiptId":"1559207500000",
  "isPDFExpert6User":true,
  "subscriptionAutoRenewStatus":"autoRenewOff",
  "isInGracePeriod":true
};

$done({body: JSON.stringify(obj)});
