
// ==UserScript==
// @Appname           AutoCAD
// @Hostname          app.autocad360.com
// @Author            墨鱼
// @RewriteURL        https://app.autocad360.com/main/users/login/v2$ url script-response-body autocad.js
// @CreatedTime       2020.06.08
// ==/UserScript==

let obj=JSON.parse($response.body);
obj.userInfo.subscriptionsInfo=
{
   "appId": 0,
   "level": 10,
   "expiration": 1975866787000,
   "type": "ADSK_GRANTED_USERS_AUTODESK_EDUCATION_BUNDLE",
   "subscribed": true,
   "start_timestamp": 1581192387,
   "expiry_timestamp": 1975866787
 };
$done({body: JSON.stringify(obj)});
