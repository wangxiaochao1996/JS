/*

氧气听书 = type=http-response,pattern=https:\/\/api\.o2ting\.com\/api\/V2\/user\/GetUserInfo\.json,requires-body=1,max-size=0,script-path= https://github.com/wangxiaochao1996/JS/raw/master/yqts.js


*/
let obj = JSON.parse($response.body);
obj.userInfo.isMember = true;
obj.userInfo.startDate = "2019-09-17 12:30:45";
obj.userInfo.endDate = "2099-09-09 12:19:19";
$done({body: JSON.stringify(obj)});
