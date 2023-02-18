---
title: 存储网页所有图片
date: 2023-1-5 23:35:21
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

###  爬虫技术-存储网页所有图片

```python
import re, requests,cchardet,urllib.parse,traceback
from urllib.parse import urlparse
from urllib.parse import urljoin
from requests.exceptions import RequestException,ProxyError,SSLError

class IMGSAVE(object):
    def __init__(self,url):
        self.url = url

    def ask_url(self,url,headers=None,timeout=10,binary=False,debug=False):
        if "https" not in url:
            url = "https://"+url
        global status,html,redirected_url
        the_headers = {
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
    }
        if headers:
            the_headers = headers
        try:
            response=requests.get(url,headers=the_headers,timeout=timeout)
            if response.status_code == 200:
                if binary:
                    html = response.content
                else:
                    encoding = cchardet.detect(response.content)['encoding']
                    html = response.content.decode(encoding)
                status = response.status_code
                redirected_url = response.url

        except(RequestException,ProxyError,SSLError)as e:
            print(e)
            if debug:
                traceback.print_exc()
            msg = 'Failed downled:{}'.format(url)
            print(msg)
            if binary:
                html = b''
            else:
                html = ''
            status=0
        return status,html,redirected_url

    def regex(self,html):
        pattern = re.compile('<img.*?src="(.*?)".*?>',re.S)
        result = re.findall(pattern,html)
        print(result)
        return result

    def save_img(self,filename,content):
        with open(filename,"wb")as fb:
            fb.write(content)

    def suffix(self,path):
        suffix=[".png",".jpg",".jpge"] #可以添加任意后缀到列表中
        for i in suffix:
            if i not in path.lower():
                continue
            return  i
    def start(self,url):
        status, html, redirected_url = self.ask_url(url=url, debug=True)
        template = "{scheme}://{netloc}" 
        the_parse = urlparse(redirected_url)
        url = template.format(scheme=the_parse.scheme, netloc=the_parse.netloc)  # 指定
        print(url)
        r_u = self.regex(html)  # 同下方解析中的path
        if not r_u:
            pass
        img_urls = [urljoin(url, img) for img in r_u]
        # print(img_urls)
        for index, url in enumerate(img_urls):
            postffix = self.suffix(url)
            filename = f'{index}{postffix}'
            content = self.ask_url(url, debug=True, binary=True)[1]
            self.save_img(filename, content)
def main():
    url="www.bbiquge.net"
    work=IMGSAVE(url)
    work.start(url)
if __name__ == '__main__':
    main()

```

### urllib.parse

```python
import urllib.parse

url="https://www.bbiquge.net"
test=urllib.parse.urlparse(url)
print(test)
输出-----------------------
ParseResult(scheme='https', netloc='bornforthis.cn', path='/1v1/17-R/01.html', params='', query='', fragment='')
```

###  处理图片链接模板

```python
url="https://bornforthis.cn/assets/image-20230104195900212-3876c2ce.pngxxxxxx"
def suffix(path):
    suffix=[".png",".jpg",".jpge"] #可以添加任意后缀到列表中
    for i in suffix:
        if i not in path:
            continue
        pos=path.find(i)
        print(path[pos:pos+len(i)])
suffix(url)
输出------------------------------------
.png
```









