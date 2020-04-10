/*



[rewrite_local]
# Xunjie Unlock annual subscriptions （by LTribe）
https\:\/\/app\.xunjiepdf\.com\/api\/v4\/memprofile url script-response-body yzw.js

[mitm]
hostname = app.xunjiepdf.com,

*/

let obj = JSON.parse($response.body);
obj.userinfo.uid = Tom
obj.userinfo.vip = [{
      "id": 00000001,
      "auth_type": 1,
      "auth_value": 4102469002
    }];

$done({body: JSON.stringify(obj)});
