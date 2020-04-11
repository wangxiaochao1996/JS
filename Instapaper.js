/* [rewrite_local]
^https://www\.instapaper\.com/api/subscription_status url script-response-body instapaper.js
[mitm]
hostname = www.instapaper.com,
*/

var body = $response.body;
function re(reg, str) {
  body = body.replace(reg, str);
}
var reg1 = /ipsubexp=/g;
var reg2 = /ipsub=\d/g;
re(reg1, 'ipsubexp=1646033923');
re(reg2, 'ipsub=1');
$done(body);
