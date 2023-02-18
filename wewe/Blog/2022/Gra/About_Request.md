---
title: request
date: 2022-12-30 17:04:21
author: cava
isOriginal: true
category: 
    - notebook
tag:
    - 爬虫技术
icon: vue
sticky: false
star: false
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

### 请求头函数

```python
def ask_url(url,headers=None,timeout=10,binary=False,debug=False):
    global status,html,redirected_url
    the_headers={
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
    }
    if headers:
        the_headers=headers
    try:
        response=requests.get(url,headers=the_headers,timeout=timeout)#设定超时时间，在10秒内如果目标网站没有成功就会报错，并不是无限制地去等待，提高了请求效率，
        if response.status_code == 200:#如果请求的目标url成功响应的话，会返回状态码为200
            if binary:
                html=response.content
            else:
                encoding=cchardet.detect(response.content)['encoding']
                html=response.content.decode(encoding)
            status=response.status_code
            redirected_url=response.url#真实请求的url,重定向

    except(RequestException,ProxyError,SSLError)as e:
        print(e)
        if debug:
            traceback.print_exc()#如果报错，就将错误信息输出
        msg='Failed downled:{}'.format(url)#将错误信息显示在打印台上，写一个字符串以说明没有成功下载的url
        print(msg)
        if binary: #这个判断的原因：在解析网页内容的时候需要进入函数中，如果不指定空字符串和空二进制文件，若没有数据则会返回None这个报错信息，若是空则是不需要进行处理。
            html=b''
        else:
            html=''
        status=0#如果出现报错，则会返回状态码为0
    return status,html,redirected_url#返回状态码，网页内容和重定向url

```

cchardet 是为什么，一个网页后缀html?后的参数即使去掉也可以重新访问



