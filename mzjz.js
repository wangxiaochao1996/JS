/*
#萌猪记账
https://xrckeji.com/itally/app/user/query url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/mzjz.js
Unlocks by Cuttlefish 公众号：墨鱼手记
*/
var body = $response.body.replace(/vipStatus":0/g, 'vipStatus":1').replace(/vipType":0/g, 'vipType":1').replace(/vipFlag":0/g, 'vipFlag":1');
$done({ body });
