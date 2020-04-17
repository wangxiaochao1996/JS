修改教程
用qx修改：

[rewrite_local]
# 王者农药修改定位
# 经纬度查询网址（保留小数点后六位！）：
# http://www.gpsspg.com/maps.htm
^https?:\/\/apis\.map\.qq\.com\/ws\/geocoder\/v\d\?\&location\=.*?\&key url 302 https://apis.map.qq.com/ws/geocoder/v1?&location=28.119416,87.152149&key

[mitm]
hostname = apis.map.qq.com,
