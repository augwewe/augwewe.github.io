---
title: PyQuery 解析
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

## PyQuery

### 1.1返回li标签

```python
import  pyquery,requests,os
from pyquery import PyQuery as pq
html=""" 
<div class="wrap">
    <div id="container">
        <ul class="list">
            <li class="item-0"><span>sss</span>first item</li>
            <li class="item-1"><a href="link2,html">second item</a></li>
            <li class="item-0 active"><a href="link3.html"><span class="blod">third item</span></a></li>
            <li class="item-1 active"><a href="link4.html">fourth item</a></li>
            <li class="item-0"><a href="link5.html">fifth item</a></li>
            <ol><li class="item-100"><a href="link51.html">100 item</a></li></ol>
        </ul>
    </div>
</div>
"""
#1.1返回所有li标签
doc = pq(html)
print(doc("li"))
------------------------------------------------------------------输出
<li class="item-0"><span>sss</span>first item</li>
            <li class="item-1"><a href="link2,html">second item</a></li>
            <li class="item-0 active"><a href="link3.html"><span class="blod">third item</span></a></li>
            <li class="item-1 active"><a href="link4.html">fourth item</a></li>
            <li class="item-0"><a href="link5.html">fifth item</a></li>
            <li class="item-100"><a href="link51.html">100 item</a></li>
```

### [#](https://augwewe.cn/Blog/2022/Crawl/foundation/AskUrl_Temp.html#_1-2-返回网页-title)1.2 返回网页”title"

```python
doc=pq(url="https://ssr1.scrape.center/")
print(doc("title"))
----------------------------------------
<title>Scrape | Movie</title>
```

### [#](https://augwewe.cn/Blog/2022/Crawl/foundation/AskUrl_Temp.html#_1-3-获取本地html)1.3 获取本地html

```python
doc=pq(filename="1.html")
print(doc)
```

### [#](https://augwewe.cn/Blog/2022/Crawl/foundation/AskUrl_Temp.html#_1-4选择器-提取li标签-提取文本-text-查看输出type)1.4选择器,提取li标签/提取文本(text.())/查看输出type

```python
doc=pq(html)
print(type(doc("#container .list li.item-0 a")))
-----------------------------------------
<class 'pyquery.pyquery.PyQuery'>
```

### [#](https://augwewe.cn/Blog/2022/Crawl/foundation/AskUrl_Temp.html#_1-5遍历li-并获取其中的文本)1.5遍历li,并获取其中的文本

```python
the_li=doc("#container .list li").items()
for i in the_li:
    print(i.text())
-----------------------------------
sssfirst item
second item
third item
fourth item
fifth item
100 item
```

### [#](https://augwewe.cn/Blog/2022/Crawl/foundation/AskUrl_Temp.html#获取电影名)获取电影名

之前采用正则表达式；这里打开之前已经保存的html文件

```python
name_list=[]
for i in range(1, 11):
    with open(r"D:\afterschool\PythonCrawl\Request\html\{}.html".format(i), "r", encoding="utf-8") as f:
        content = f.read()
        result = pq(content)
        # print(result)
        tag=result("#app #index .el-col .el-card .el-card__body .el-row h2.m-b-sm").text()
        # print(tag)
        name_list.append(tag)
print(name_list)
-----------------------------------------
得到100个电影名的列表
```

### [#](https://augwewe.cn/Blog/2022/Crawl/foundation/AskUrl_Temp.html#_1-6-find-children)1.6 find&children

find会返回list下的所有li标签;children返回下一层级所有，包括”ol“; children(”li“)只返回下一层级的li;children(".active")

```python
doc=pq(html)
items=doc(".list")
the_all_li=items.find("li")
print(the_all_li)
-------------------------------
<li class="item-0"><span>sss</span>first item</li>
            <li class="item-1"><a href="link2,html">second item</a></li>
            <li class="item-0 active"><a href="link3.html"><span class="blod">third item</span></a></li>
            <li class="item-1 active"><a href="link4.html">fourth item</a></li>
            <li class="item-0"><a href="link5.html">fifth item</a></li>
            <li class="item-100"><a href="link51.html">100 item</a></li>
---------------------------------------------
the_children_li=items.children("li")
print(the_children_li)
-------------------------------------------------
<li class="item-0"><span>sss</span>first item</li>
            <li class="item-1"><a href="link2,html">second item</a></li>
            <li class="item-0 active"><a href="link3.html"><span class="blod">third item</span></a></li>
            <li class="item-1 active"><a href="link4.html">fourth item</a></li>
            <li class="item-0"><a href="link5.html">fifth item</a></li>
```

### [#](https://augwewe.cn/Blog/2022/Crawl/foundation/AskUrl_Temp.html#_1-6-1-parent-parents)1.6.1 parent & parents

parent;会显示.list上一级标签

parents("") 指定获取哪个祖先节点的名字，不指定会返回两个结果

```python
container=items.parent()
print(container)
-------------------------
<div id="container">
        <ul class="list">
            <li class="item-0"><span>sss</span>first item</li>
            <li class="item-1"><a href="link2,html">second item</a></li>
            <li class="item-0 active"><a href="link3.html"><span class="blod">third item</span></a></li>
            <li class="item-1 active"><a href="link4.html">fourth item</a></li>
            <li class="item-0"><a href="link5.html">fifth item</a></li>
            <ol><li class="item-100"><a href="link51.html">100 item</a></li></ol>
        </ul>
    </div>
container=items.parent(".wrap")
print(container)
------------------------------------------
<div class="wrap">
    <div id="container">
        <ul class="list">
            <li class="item-0"><span>sss</span>first item</li>
            <li class="item-1"><a href="link2,html">second item</a></li>
            <li class="item-0 active"><a href="link3.html"><span class="blod">third item</span></a></li>
            <li class="item-1 active"><a href="link4.html">fourth item</a></li>
            <li class="item-0"><a href="link5.html">fifth item</a></li>
            <ol><li class="item-100"><a href="link51.html">100 item</a></li></ol>
        </ul>
    </div>
</div>
```

### [#](https://augwewe.cn/Blog/2022/Crawl/foundation/AskUrl_Temp.html#_1-6-2-siblings-兄弟节点)1.6.2 siblings 兄弟节点

上下级标签，不包括他本身

```python
doc=pq(html)
the_li=doc(".item-1.active")
print(the_li.siblings())
---------------------------------、
<li class="item-0 active"><a href="link3.html"><span class="blod">third item</span></a></li>
            <li class="item-1"><a href="link2,html">second item</a></li>
            <li class="item-0"><span>sss</span>first item</li>
            <li class="item-0"><a href="link5.html">fifth item</a></li>
            <ol><li class="item-100"><a href="link51.html">100 item</a></li></ol>
```

### [#](https://augwewe.cn/Blog/2022/Crawl/foundation/AskUrl_Temp.html#_1-6-3-items-遍历获取li标签)1.6.3 items 遍历获取li标签

```python
doc=pq(html)
the_li=doc(".list li")
for i in the_li.items():
    print(i)
---------------------------------
<li class="item-0"><span>sss</span>first item</li>        
<li class="item-1"><a href="link2,html">second item</a></li>          
<li class="item-0 active"><a href="link3.html"><span class="blod">third item</span></a></li>            
<li class="item-1 active"><a href="link4.html">fourth item</a></li>      
<li class="item-0"><a href="link5.html">fifth item</a></li>           
<li class="item-100"><a href="link51.html">100 item</a></li>
```

### [#](https://augwewe.cn/Blog/2022/Crawl/foundation/AskUrl_Temp.html#_1-6-4-attr-获取href-首个-遍历获取所有)1.6.4 attr 获取href 首个/遍历获取所有

```python
the_li=doc("li a")
print(the_li.attr.href)
--------------------------------
link2,html
-----------------------------
for i in the_li.items():
    print(i.attr("href"))
---------------------------------
link2,html
link3.html
link4.html
link5.html
link51.html
```

### [#](https://augwewe.cn/Blog/2022/Crawl/foundation/AskUrl_Temp.html#_1-6-5获取标签中的纯文字文本-html文本-text-html)1.6.5获取标签中的纯文字文本 ，html文本；text(),html()

```python
the_li=doc("li ")
for i in the_li.items():
    print(i.text())
    print(i.html())
----------------------------------
sssfirst item
second item
third item
fourth item
fifth item
100 item
---------------------------------------
<span>sss</span>first item
<a href="link2,html">second item</a>
<a href="link3.html"><span class="blod">third item</span></a>
<a href="link4.html">fourth item</a>
<a href="link5.html">fifth item</a>
<a href="link51.html">100 item</a>
```

### [#](https://augwewe.cn/Blog/2022/Crawl/foundation/AskUrl_Temp.html#_1-6-6-添加-删除节点-remove-class-add-class)1.6.6 添加/删除节点 remove_class/add_class

```python
doc=pq(html)
the_li=doc(".item-1.active")
print(the_li)
print(the_li.remove_class("active"))
----------------------------------------
<li class="item-1 active"><a href="link4.html">fourth item</a></li>
<li class="item-1"><a href="link4.html">fourth item</a></li>
#添加节点
print(the_li.add_class("xiaoyi"))
<li class="item-1 xiaoyi"><a href="link4.html">fourth item</a></li>
```

### [#](https://augwewe.cn/Blog/2022/Crawl/foundation/AskUrl_Temp.html#_1-6-7-attr-添加属性-text-改变节点纯文字内容-html-改变html文本内容)1.6.7 attr 添加属性,text()改变节点纯文字内容，html()改变html文本内容

```python
doc=pq(html)
the_li=doc(".item-1.active")
print(the_li)
print(the_li.attr("name","link"))
---------------------------------------------------------------------------------
<li class="item-1 active"><a href="link4.html">fourth item</a></li>            
<li class="item-1 active" name="link"><a href="link4.html">fourth item</a></li>
#text()
print(the_li.text("xiaoyi"))
-----------------------------------------------------
<li class="item-1 active" name="link">xiaoyi</li>
#html()
print(the_li.html("<span>hahaha</span>"))
<li class="item-1 active" name="link"><span>hahaha</span></li>
```

### [#](https://augwewe.cn/Blog/2022/Crawl/foundation/AskUrl_Temp.html#_1-7-remove)1.7 remove

```python
html1="""
<div class="wrap">
    Hello,World
    <p>This is a paragraph.</p>  
</div>
"""
doc = pq(html1)
content=doc(".wrap")
print(content.remove("p").text())
----------------------------------------
Hello,World
```

### [#](https://augwewe.cn/Blog/2022/Crawl/foundation/AskUrl_Temp.html#_1-8-类选择器)1.8 类选择器

```python
html2 = '''
<div class="wrap">
    <div id="container">
        <ul class="list">
             <li class="item-0">first item</li>
             <li class="item-1">< a href=" ">second item</ a></li>
             <li class="item-0 active">< a href="link3.html"><span class="bold">third item</span></ a></li>
             <li class="item-1 active">< a href="link4.html">fourth item</ a></li>
             <li class="item-0">< a href="link5.html">fifth item</ a></li>
         </ul>
     </div>
 </div>
'''
doc = pq(html2)
li = doc('li:first-child')
print(li)
li = doc('li:last-child')
print(li)
li = doc('li:nth-child(2)')
print(li)
li = doc('li:gt(2)')
print(li)
li = doc('li:nth-child(2n)')
print(li)
li = doc('li:contains(second)')
print(li)
```

























