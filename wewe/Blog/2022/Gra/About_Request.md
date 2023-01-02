---
title: request
date: 2022-12-30 17:04:21
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

## 1.获取request 以文本形式

```python
url="https://ssr1.scrape.center/"
response=requests.get(url)
print(response.text)
```

### 1.1 文本保存

```python
url="https://ssr1.scrape.center/"
r=requests.get(url,params=data)
pattern1=re.compile("<h2.*?>(.*?)</h2>",re.S)
result=re.findall(pattern1,r.text)
print(result)
pprint(r.json())#r.text()
```

### 1.2 二进制文件（音频，图片）

```python
url="https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2016/10/16/20161016-024858_U3250_M207634_e515.jpg"
r=requests.get(url)
print(r.text)#乱码显示
print(r.content)#二进制目标
with open(f'img.{url.split(".")[-1]}','wb') as f:
    f.write(r.content)
```

### 2.测试工具：可以看到请求头等信息

```python
url="http://httpbin.org/get"
```





