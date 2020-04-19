/* Today_Flow  (Made by Meeta)

本脚本旨在获取机场流量使用详情
请在下方填入节点订阅链接和机场名（Ps：链接需支持Quantumult 显示流量使用情况）

使用建议：
每日自动获取显示 + 手动执行脚本
Surge配置文件示例(可能需要自己修改本地脚本路径)
# Today_Flow
Today_Flow.js = debug=1,script-path=Script/Today_Flow.js,cronexp="0 0 8,20 * * *",type=cron


TG频道:@meetashare
*/



const link1 = "此处填写节点订阅链接，该链接需支持Quantumult 显示流量使用情况";
const name1 = "此处填写机场名";
$httpClient.get(link1, function(error, response, data){
    if(error){
    console.log(error);
    $done();
  }else{
    var obj = response;
    var userinfo = obj["headers"]["subscription-userinfo"];
    //console.log(userinfo);
    var upload_k = Number(userinfo.match(/upload=\d+/g)[0].match(/\d+/g)[0]);
    var download_k = Number(userinfo.match(/download=\d+/g)[0].match(/\d+/g)[0]);
    var total_k = Number(userinfo.match(/total=\d+/g)[0].match(/\d+/g)[0]);
    var residue_m = (total_k/1048576-download_k/1048576-upload_k/1048576);
    var residue = residue_m.toFixed(2).toString();
    var dnow = new Date().getTime().toString();
    var utime = (dnow-$persistentStore.read("o_now"));
    var todayflow = $persistentStore.read("today_flow")-residue;
    $persistentStore.write(residue,"today_flow");
    $persistentStore.write(dnow,"o_now");
    var title = name1+" 剩余流量 ：" + (residue_m/1024).toFixed(2) + " G";
    console.log(title);
    var hutime = parseInt(utime/3600000);
    var mutime = (utime/60000)%60;
    if(hutime==0){var subtitle = "在过去的"+ mutime.toFixed(1) +"分钟内使用了：" + todayflow.toFixed(2) + " M流量";
    }else{var subtitle = "在过去的" + hutime +"时 "+ mutime.toFixed(1) +"分钟内使用了：" + todayflow.toFixed(2) + " M流量";};
    console.log(subtitle);
    var mation = "Total_Upload : " + (upload_k/1073741824).toFixed(2) + " G" + "\n" + "Total_Download : " + (download_k/1073741824).toFixed(2) + " G";
    console.log(mation);
    $notification.post(title, subtitle,mation );
    $done();
  };
}
);
