---
title: 笔趣阁-盗墓笔记小说页面爬取
date: 2022-11-3 12:04:21
author: cava
isOriginal: true
category: 
    - notebook
    - VuePress
tag:
    - Vue
    - VuePress
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

## 遇到的问题并解决

### 写请求头的注意事项

1.header中的value不可以带有空格，否则会显示报错“python中报错requests.exceptions.InvalidHeader: Invalid return character or leading space in header: Acc”

错误格式：

```python
headers={
            "User-Agent":" Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
```

正确格式：

```
headers={
            "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
```



