/*
[rewrite_local]
^https://(flipped|s3)\.binfenyingyu\.com(/flipped/subverter/info|/binfen/programitem/.+) url script-response-body lanren.js
[mitm]
hostname = *.binfenyingyu.com,
*/

if ($request.url.indexOf("/flipped/subverter/info") != -1) {
  re('"vipDeadline":\\d+@"subverterIdentityTitle":"\\w+"@"subverterLevelTitle":"\\w+"@"userIdentityType":\\d@"userLevel":\\d+@"vipFlag":\\d', '"vipDeadline":1617921867000@"subverterIdentityTitle":"VIP"@"subverterLevelTitle":"年会员"@"userIdentityType":1@"userLevel":3@"vipFlag":1')
}

if ($request.url.indexOf("/binfen/programitem/") != -1) {
  re('"need_pay":\\d', '"need_pay":0')
}


function re() {
  var body = $response.body;
  if (arguments[0].includes("@")) {
   var regs = arguments[0].split("@");
   var strs = arguments[1].split("@");
   for (i = 0;
   i < regs.length;
   i++) {
    var reg = new RegExp(regs[i],"g");
    body = body.replace(reg, strs[i]);
  }
 }
  else {
   var reg = new RegExp(arguments[0],"g");
   body = body.replace(reg, arguments[1]);
 }
  $done(body);
}
