---
title: 猫眼Top100榜单分析-保存（JSON)
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

### 1.解析url内容优化

将解析后的网页数据保存为字典格式，自定义数据标签为key，内容为value

```python
def parse(self,content):
        # print(content)
        k_clean = re.sub('</i><i class="fraction">', "", content)#先替换，方便提取评分数据
        pattern='<dd>(?:\s+)<i class=.*?</i>(?:\s+)<a href="(.*?)".*?title="(.*?)".*?>(?:\s+)<img src.*?/>(?:\s+)<img data-src="(.*?)".*?/>' \
                '*\s?.*?<p class="releasetime">(.*?)</p>.*?</div>(?:\s+).*?(?:\s+)<p class="score".*?"integer">(\d\.\d).*?</p>'
        data_lst=re.findall(pattern,k_clean,re.S)
        # print(data_lst)#存放链接信息的列表，列表元素是元组：电影名称，电影封面，上映日期，评分
        # print(k_clean)
        good_lst=[]
        if data_lst:
            for tup in data_lst:
                d={
                    "link":urllib.parse.urljoin(self.BASE_URL, tup[0]),
                    "title":tup[1],
                    "img":tup[2],
                    "relesstime":tup[3],
                    "score":tup[4]
                }
                good_lst.append(d)
        return  good_lst
```

### 2.将解析后的url内容存储为JSON格式

```python
def save_json(self,content_dict):
        with open("TopData","w",encoding="utf-8") as f:
        json.dump(content_dict,f)
```

### 3.运行解析

定义json文件的名称

```python
def run_parse(self,folder):
        #进行排序
        JSON_TXT={"MaoYanTop100":[]}
        # result_list=[]
        for path in sorted(self.generate_path(folder)):
            html_content = self.read_html(path)
            n=self.parse(html_content)
            # print(list(n))
            JSON_TXT["MaoYanTop100"].append(list(n))
            self.save_json(JSON_TXT)
        pprint(JSON_TXT)
```





