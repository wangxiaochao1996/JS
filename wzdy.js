/**
^https?:\/\/api-gw\.zhuidianying\.com(\/user\/property\/info|\/user\/detail\/info|\/item\/search\/movie\/info)
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const pro = "/property/info";
const vip = "/user/detail/info";
const pri = "/item/search/movie/info";


if (url.indexOf(pro) != -1) {
    obj.data.coin = 99999;
    body = JSON.stringify(obj);
} 
if (url.indexOf(vip) != -1) {
    obj.data.userLevel = 8;
    obj.data.userExp = 99999;
    body = JSON.stringify(obj);
} 
if (url.indexOf(pri) != -1) {
    obj.data.given = true;
    obj.data.trials = false;
    obj.data.trialTime = -1;
    body = JSON.stringify(obj);
}

$done({body});
