/*
同桌游戏（头号玩家）解锁vip及匹配次数
https\:\/\/api\.app\.z8dns\.com\/(normal_match\/left_count|vip\/status)
hostname = api.app.z8dns.com
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const pro = 'normal_match/left_count';
const vip = 'vip/status';
if (url.indexOf(pro) != -1) {
    obj.left_count = 99;
    body = JSON.stringify(obj);
} 

if (url.indexOf(vip) != -1) {
obj= {
  "expire_at": "2030年12月25日",
  "time_remaining": "999天"
}
body = JSON.stringify(obj);
};
$done({body});



