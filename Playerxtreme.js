/*

playerxtreme.js = requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/playerxtreme.js,script-update-interval=0,type=http-response,pattern=^https:\/\/secure\.istreamer\.com\/backend$

*/
var obj = JSON.parse($response.body);

obj=
{
  "res": "OK",
  "response": {
    "result": "0",
    "purchases": [{
      "productID": "com.pentaloop.playerx.addon.pro",
      "purchaseDate": "2019-12-14 21:31:16 Etc/GMT",
      "originalPurchaseDate": "2019-12-14 21:31:16 Etc/GMT",
      "type": "0",
      "isTrialPeriod": "false"
    }]
  }
};

$done({body: JSON.stringify(obj)});

// Descriptions
