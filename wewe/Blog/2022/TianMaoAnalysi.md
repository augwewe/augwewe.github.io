---
title: TianMaoTop100
date: 2022-10-30 12:04:21
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

猫眼Top100榜网页分析--进阶：优化代码；解析网页操作（部分）

## 1.验证获取的URL是否已经请求

1.请求中（ing）

2.刚请求过（ed)

3.已经存在于asking_url_list中

### 1.1定义asking_url_list, 请求过的url存放于此列表中

``` python
def __init__(self,url,folder):
        self.url=url
        self.headers={
            "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
        }
        self.asking_url_list=[]
        self.folder_name=folder
```

### 1.2验证url

```python
def have_asked(self,asking):
	asked_lst_filename=[filename[2] for filename in os.walk("html")][0]
    if asking + ".html" in asked_lst_filename + self.asking_url_list:
        return False
    return True
```

## 2. 是否存在文件"html"

### 2.1代码

```python
def folder_exists(self,folder:str):
       if not os.path.exists(folder):
           os.mkdir("html")
```

## 3.解析url

### 3.1path

```python
 def generate_path(self,folder):
        if not os.path.exists(folder):
            return None
        path_list = []
        for dirpath, dirnames, filenames in os.walk(folder):
            for filename in filenames:
                path = dirpath + "/"+filename#join自动识别平台路径格式，window和Mac
                path_list.append(path)
```

### 3.2解析url

解析目的：获取电影名称，封面，上映时间，评分

解析方法：正则表达式

tips：对于评分的处理，因小数点前后的数字不同的css效果，先对源代码进行替换处理为了后续的提取便捷

``` python
def parse(self,content):
        # print(content)
        k_clean = re.sub('</i><i class="fraction">', "", content)#先替换，方便提取评分数据
        pattern='<dd>(?:\s+)<i class=.*?</i>(?:\s+)<a href.*?title="(.*?)".*?>(?:\s+)<img src.*?/>(?:\s+)<img data-src="(.*?)".*?/>*\s?.*?<p class="releasetime">(.*?)</p>.*?</div>(?:\s+).*?(?:\s+)<p class="score".*?"integer">(\d\.\d).*?</p>'
        data_lst=re.findall(pattern,k_clean,re.S)
        # print(data_lst)#存放链接信息的列表，列表元素是元组：电影名称，电影封面，上映日期，评分
        # print(k_clean)
        return  data_lst
```

## 4." 引擎"

```python
 def engine(self):
        self.folder_exists(self.folder_name)
        asking_filename = self.url_parse(self.url)  #
        if self.have_asked(asking_filename):
            #执行请求
            print(f'The url is requestsing: {self.url}')
            self.asking_url_list.append(self.url)
            html=self.req_fun(self.url)
            #定义
            self.save_html(content=html,filename=asking_filename,mkdir_r=self.folder_name)
        else:
            print(f"Requests url {self.url}已经请求过了")
```

## 5.捕获url,定义保存文件名格式

 捕获10个页面到文件”html"中，并设置捕获间隔时间，time.sleep(暂时处理)

```python
def main():
    folder="html"
    url = "https://www.maoyan.com/board/4?offset={page}"
    for i in range(0, 100, 10):
        time.sleep(1.5)#设定间隔时间
        maoyan = Maoyan(url.format(page=i), folder="html")
        maoyan.engine()
```







