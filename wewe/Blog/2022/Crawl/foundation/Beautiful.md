---
title: Beautiful Soup 解析
date: 2022-10-30 12:04:21
author: cava
isOriginal: true
category: 
    - notebook
tag:
    - 爬虫技术
    - 网页源代码解析方式
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

## Beautiful Soup

### 安装库,导入包

```
pip install lxml
pip install BeautifulSoup
from bs4 import BeautifulSoup
```

### 四大种类对象

\*  Tag
\*  NavigableString
\*  BeautifulSoup
\*  Comment

### prettify()

```python
url = "https://www.xbiquge.so/book/54523/"
header = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'}
req = requests.get(url, headers = header)
soup = BeautifulSoup(req.text, 'lxml')
print(soup.prettify())
输出----------------------------------------------
将网页源代码结构化显示在打印台，便于查看

```

### Comment

Comment 对象是一个特殊类型的 NavigableString 对象，但是当它出现在 HTML 文档中时，如果不对 Comment 对象进行处理，那么我们在后续的处理中可能会出现问题。**HTML 中可以用来添加一段暂不通过网页渲染出来的内容**。

```python
url = "https://www.xbiquge.so/book/54523/"
header = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'}
req = requests.get(url, headers = header)
soup = BeautifulSoup(req.text, 'lxml')
print(soup.a)
print('-'*10)
print(soup.a.string)
print(type(soup.a.string))
输出:
<a href="https://www.xbiquge.so">笔趣阁</a>
----------
笔趣阁
<class 'bs4.element.NavigableString'>
```

### Css选择器

```python
def ask_url(url,headers=None,timeout=10):
    # global status,html,redirected_url
    the_headers={
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
    }
    if headers:
        the_headers=headers
    try:
        response=requests.get(url,headers=the_headers,timeout=timeout)
        if response.status_code == 200:
            encoding=cchardet.detect(response.content)['encoding']
            html=response.content.decode(encoding)
            return html
    except(RequestException,ProxyError,SSLError)as e:
        print(e)

def parse_url(html content):
    soup = BeautifulSoup(htmlcontent, 'lxml')
    # print(soup.prettify())#结构化输出
    catalog=soup.select('.box_con #list dl dd')
    # print(catalog)
    for i in catal 1
        if not middle:
            continue
        href=i.a.get('href')
        print(href)
        #t='<dd></dd>'
        # if str(i) == t:
        #     continue
        # title=i.string
        # href=i.a.get('href')
        # # print(i.a.get('href'))
        # yield {
        #     "title":title,
        #     "link":href
        # }


def main():
    url = "https://www.xbiquge.so/book/54523/"
    htmlcontent=ask_url(url=url)
    # print(htmlcontent)
    if not htmlcontent:
        pass
    mongodb = MongoDB("DBTest", "TestBea")
    for content in parse_url(htmlcontent):
        mongodb.insert(content)
if __name__ == '__main__':
    main()
```





















### 





