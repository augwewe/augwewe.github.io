---
title: 延迟插件
date: 2023-1-7 23:36:21
author: cava
isOriginal: true
category: 
    - notebook
tag:
    - 爬虫技术
icon: vue
sticky: false
star: false
password: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: False
backToTop: true
toc: true
---

### 延迟插件

使用目的：请求访问频繁，作非正常浏览判别会被封禁Ip

```python
from urllib import parse
from datetime import datetime
import time,requests  #睡眠req爬虫库

class DelayWait(object):
    def __init__(self,delay=3):
        self.delay=delay
        self.urls=dict()#字典存储各种 url,域名：time

    def wait(self,url):
        netloc=parse.urlparse(url).netloc
        #1. 解析url,比较每次是否访问同一个主站，是同一个就用延迟插件，不是就不需要；因为只有短时间内访问同一个网站才会被封禁。
        lastOne=self.urls.get(netloc)
        #? 使用dic[key] 没有key对应的值会返回KeyError;get返回None
        if lastOne and self.delay > 0:
            timeWait=self.delay-(datetime.now()-lastOne).seconds #2. 当前时间和之前的域名(时间)作差,并转化成秒
            if timeWait > 0:
                time.sleep(timeWait) #将差值时间作为休眠时间
        self.urls[netloc]=datetime.now()

if __name__ == '__main__':
    urls=["https://ssr1.scrape.center/"] *5
    d=DelayWait()
    for url in urls:
        html=requests.get(url)
        d.wait(url)
        print(html.status_code)

```





