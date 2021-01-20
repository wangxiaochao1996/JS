/*
Unlocks by Cuttlefish 公众号：墨鱼手记

# > 064 予图阁 微信小程序 弹窗给出原图及1080图的URL（20210119） 
 https://3dd0be8a-54fe-43ff-a0e7-f670c4f20432.bspapp.com/.*get_wallpaper_detail url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/ytg.js 
 
hostname = 3dd0be8a-54fe-43ff-a0e7-f670c4f20432.bspapp.com

*/


var origin= $response.body.match(/"originalUrl":"[^"]*"/g);

var body= $response.body.match(/"download1080Url":"[^"]*"/g);

console.log(body);

$notify("墨鱼手记","", '\n'+origin[0]+'\n\n'+body[0]+'\n\n');


$done({ body });
