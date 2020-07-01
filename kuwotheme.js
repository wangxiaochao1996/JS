/*
themekuwo.js = requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/themekuwo.js,type=http-response,pattern=^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/theme)
*/
var obj = JSON.parse($response.body);
 obj.data.vipTheme.type="free";
 obj.data.needBieds=null;
$done({body: JSON.stringify(obj)});
//
