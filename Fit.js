var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = "/getMessageNumber";
const pro = "/getUserBaseInfo";

if (url.indexOf(vip) != -1) {
	obj.entRet.isVip = 1;
	obj.entRet.endTime = 1906952319;
	body = JSON.stringify(obj);
}

if (url.indexOf(pro) != -1) {
      obj.entRet.entUserBaseInfo.isVip = 1;
      body = JSON.stringify(obj);
}

$done({body});
