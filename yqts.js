/*

https:\/\/api\.o2ting\.com\/api\/V2\/user


*/
let obj = JSON.parse($response.body);
obj.userInfo.isMember = true;
obj.userInfo.startDate = 2019-09-17 12:30:45
obj.userInfo.endDate = 2099-09-09 12:19:19;
$done({body: JSON.stringify(obj)});
