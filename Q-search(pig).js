# From 🐩️哥 (https://raw.githubusercontent.com/Neurogram-R/Surge/master/module/Q-Search.sgmodule)
# Safari 内输入 命令 + 空格 + 关键词 快速指定搜索引擎搜索
# 注：先进入设置更改 Safari 默认搜索为 DuckDuckGO
# 注：若非要用 Alook 浏览器使用该脚本，先进行更改：Alook - 设置 - 搜索引擎 - 默认搜索引擎 - DuckDuckGo。其余浏览器同理。
# zZPiglet 自用，可提建议，但不一定会加入。建议自行修改使用，或使用 nzw9314 的合集（https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Q-Search_All_in_one.conf）
hostname = duckduckgo.com

# wiki xxx (Wikipedia)
^https:\/\/duckduckgo.com\/\?q=wiki(\+|%20)([^&]+).+ url 302 https://wikipedia.org/wiki/$2

# wk xxx (Wikipedia 中文)
^https:\/\/duckduckgo.com\/\?q=wk(\+|%20)([^&]+).+ url 302 https://zh.wikipedia.org/wiki/$2

# mg xxx (Magi)
^https:\/\/duckduckgo.com\/\?q=mg(\+|%20)([^&]+).+ url 302 https://magi.com/search?q=$2

# bd xxx (百度)
^https:\/\/duckduckgo.com\/\?q=bd(\+|%20)([^&]+).+ url 302 https://www.baidu.com/s?wd=$2

# gh xxx (GitHub)
^https:\/\/duckduckgo.com\/\?q=gh(\+|%20)([^&]+).+ url 302 https://github.com/search?q=$2

# tf xxx (Google 搜索 TestFlight)
^https:\/\/duckduckgo.com\/\?q=tf(\+|%20)([^&]+).+ url 302 https://www.google.com/search?as_q=$2&as_sitesearch=testflight.apple.com

# gi xxx (Google 图片)
^https:\/\/duckduckgo.com\/\?q=gi(\+|%20)([^&]+).+ url 302 https://www.google.com/search?&tbm=isch&q=$2

# yd xxx (有道词典)
^https:\/\/duckduckgo.com\/\?q=yd(\+|%20)([^&]+).+ url 302 https://dict.youdao.com/search?q=$2

# trc xxx (Google 译至中)
^https:\/\/duckduckgo.com\/\?q=trc(\+|%20)([^&]+).+ url 302 https://translate.google.com/#view=home&op=translate&sl=auto&tl=zh-CN&text=$2

# tre xxx (Google 译至英)
^https:\/\/duckduckgo.com\/\?q=tre(\+|%20)([^&]+).+ url 302 https://translate.google.com/#view=home&op=translate&sl=auto&tl=en&text=$2

# trj xxx (Google 译至日)
^https:\/\/duckduckgo.com\/\?q=trj(\+|%20)([^&]+).+ url 302 https://translate.google.com/#view=home&op=translate&sl=auto&tl=ja&text=$2

# sspai xxx (少数派站内搜索)
^https:\/\/duckduckgo.com\/\?q=sspai(\+|%20)([^&]+).+ url 302 https://sspai.com/search/post/$2

# ssp xxx (Google 搜索少数派)
^https:\/\/duckduckgo.com\/\?q=ssp(\+|%20)([^&]+).+ url 302 https://www.google.com/search?as_q=$2&as_sitesearch=sspai.com

# ytb xxx (YouTube)
^https:\/\/duckduckgo.com\/\?q=ytb(\+|%20)([^&]+).+ url 302 https://www.youtube.com/results?search_query=$2

# so xxx (Stack Overflow)
^https:\/\/duckduckgo.com\/\?q=so(\+|%20)([^&]+).+ url 302 https://stackoverflow.com/search?q=$2

# se xxx (StackExchange)
^https:\/\/duckduckgo.com\/\?q=se(\+|%20)([^&]+).+ url 302 https://stackexchange.com/search?q=$2

# wa xxx (WolframAlpha)
^https:\/\/duckduckgo.com\/\?q=wa(\+|%20)([^&]+).+ url 302 https://www.wolframalpha.com/input/?i=$2

# db xxx (豆瓣)
^https:\/\/duckduckgo.com\/\?q=db(\+|%20)([^&]+).+ url 302 https://www.douban.com/search?q=$2

# zh xxx (知乎)
^https:\/\/duckduckgo.com\/\?q=zh(\+|%20)([^&]+).+ url 302 https://www.zhihu.com/search?q=$2

# wb xxx (微博)
^https:\/\/duckduckgo.com\/\?q=wb(\+|%20)([^&]+).+ url 302 https://s.weibo.com/weibo/$2

# rd xxx (Reddit)
^https:\/\/duckduckgo.com\/\?q=rd(\+|%20)([^&]+).+ url 302 https://www.reddit.com/search?q=$2

# tw xxx (Twitter)
^https:\/\/duckduckgo.com\/\?q=tw(\+|%20)([^&]+).+ url 302 https://twitter.com/search?q=$2

# gd xxx (Google 搜索 Google Drive 资源)
^https:\/\/duckduckgo.com\/\?q=gd(\+|%20)([^&]+).+ url 302 https://www.google.com/search?q=%22Google+Drive%22+$2

# tgd xxx (t.me/gdurl 搜索 Google Drive 资源)
^https:\/\/duckduckgo.com\/\?q=tgd(\+|%20)([^&]+).+ url 302 https://t.me/s/gdurl?q=$2

# t4k xxx (t.me/Remux_2160P 搜索 Google Drive 资源)
^https:\/\/duckduckgo.com\/\?q=t4k(\+|%20)([^&]+).+ url 302 https://t.me/s/Remux_2160P?q=$2

# xxx （无指令默认为 Google）
^https:\/\/duckduckgo.com\/\?q=([^&]+).+ url 302 https://www.google.com/search?q=$1
