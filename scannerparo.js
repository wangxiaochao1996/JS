/*
Unlocks by Cuttlefish 公众号：墨鱼手记

# > Scanner Pro 一次性解锁 （公众号墨鱼手记 20201218）
https://license.pdfexpert.com/api/2.0/scanner/subscription/refresh url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/sp.js
[mitm]
hostname = license.pdfexpert.com

*/
let body= $response.body; 
var obj = JSON.parse(body); 
obj={
  "receiptStatus": "ok",
  "isEligibleForIntroPeriod": true,
  "subscriptionState": "notActive",
  "receiptId": 1607615220000,
  "isScanner7User": true,
  "inAppStates": [{
    "type": "custom purchase",
    "productId": "scannerpro7-user",
    "entitlements": []
  }],
  "chargingPlatform": "iOS AppStore",
  "bundleId": "com.readdle.Scanner"
}
$done({body: JSON.stringify(obj)});
