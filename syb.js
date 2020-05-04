/* Quantumult X 脚本:水印吧vip （By 凉意） 水印吧下载链接 : https://apps.apple.com/cn/app/%E6%B0%B4%E5%8D%B0%E5%90%A7-%E5%8E%BB%E6%B0%B4%E5%8D%B0-%E5%8A%A0%E6%B0%B4%E5%8D%B0%E6%9C%89%E6%88%91%E5%B0%B1%E5%A4%9F%E4%BA%86/id1224144396
TG频道:https://t.me/liangyiA
[rewrite_local]
#水印吧VIP  (by 凉意）
^https:\/\/wx\.520gyh\.com\/Markingbar\/User\/vipInfo url script-response-body syb.js
hostname = wx.520gyh.com
*/
let obj = JSON.parse($response.body);
obj.vipInfo.vip_exp = 1; 
obj.vipInfo.can_free_vip = 1;
obj.vipInfo.out_time = "5200-13-14 00:00:00";
$done({body: JSON.stringify(obj)});
