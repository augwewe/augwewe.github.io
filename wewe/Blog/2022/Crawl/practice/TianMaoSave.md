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

猫眼Top100榜网页分析--进阶：优化代码；解析网页操作;新增内容：保存解析内容为json格式

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

将top榜10个页面的内容都定义为json格式，定义json文件的名称

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

### 4.完整代码（进度至保存为json格式）

```python
import re,requests,os,time
from Parse import Parse
class Maoyan(object):
    def __init__(self,url,folder):
        self.url=url
        self.headers={
            "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
        }
        self.asking_url_list=[]
        self.folder_name=folder
    def req_fun(self,url):
        response=requests.get(url,headers=self.headers)
        if response.status_code==200:
           return response.text
        return None
    def url_parse(self,url:str):
        url_lst=url.split("=")
        if url_lst:
            return url_lst[-1]
        return "No Parse Parameter"
    def have_asked(self,asking):
        asked_lst_filename=[filename[2] for filename in os.walk("html")][0]
        if asking + ".html" in asked_lst_filename + self.asking_url_list:
            return False
        return True
    def folder_exists(self,folder:str):
        if not os.path.exists(folder):
            os.mkdir("html")#创建文件名
    def save_html(self,content,filename,mkdir_r="html"):
        with open(f"{mkdir_r}/{filename}.html","w",encoding="utf-8") as f:
            f.write(content)
            f.close()
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
        # self.parse(self.folder_name)


def main():
    folder="html"
    url = "https://www.maoyan.com/board/4?offset={page}"
    # 捕获10个网页到文件”html"中
    for i in range(0, 100, 10):
        time.sleep(1.5)
        maoyan = Maoyan(url.format(page=i), folder="html")
        maoyan.engine()


if __name__ == '__main__':
   main()
```

```python
import  os,requests,re,xlwt,xlrd,urllib.parse,pprint,json
from xlutils.copy import copy
from pprint import pprint
# wb = xlwt.Workbook()
# sheet1 = wb.add_sheet("sheet1")
# head_data = ["电影名称", "电影封面", "上映日期", "评分"]
# pos = 0
# for i in head_data:
#     sheet1.write(0, pos, i)
#     pos += 1
# wb.save("猫眼Top.xls")

class Parse(object):

    def __init__(self):
        self.BASE_URL = "https://www.maoyan.com/"


    def generate_path(self,folder):
        if not os.path.exists(folder):
            return None
        path_list = []
        for dirpath, dirnames, filenames in os.walk(folder):
            for filename in filenames:
                path = dirpath + "/"+filename#join自动识别平台路径格式，window和Mac
                path_list.append(path)

            return path_list
    def read_html(self,path:str):
        with open(path,"r",encoding="utf-8")as f:
            return f.read()
    #解析html文件
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
    def save_json(self,content_dict):
        with open("TopData","w",encoding="utf-8") as f:
            json.dump(content_dict,f)

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
        # print("所有页数的列表信息",result_list)
        # print(result_list)
        # name_lst=[i[0] for i in result_list]#电影名称
        # # print(name_lst)
        # img_lst=[i[1] for i in result_list]#图片
        # time_lst = [i[2] for i in result_list]#上映时间
        # score_lst = [i[3] for i in result_list]#评分
        # wb2=xlrd.open_workbook("猫眼Top.xls")
        # sheet_odd= wb2.sheet_by_index(0)
        # xwb=copy(wb2)
        # sheet=xwb.get_sheet("sheet1")
        # # 2.写入爬取的url解析后的信息
        # # print(result_list)
        # pos1 = pos2=pos3=pos4= 1
        # for i in name_lst:
        #     sheet.write(pos1,0,i)
        #     pos1+=1
        # for i in img_lst:
        #     sheet.write(pos2,1,i)
        #     pos2+=1
        # for i in time_lst:
        #     sheet.write(pos3,2,i)
        #     pos3+=1
        # for i in score_lst:
        #     sheet.write(pos4,3,i)
        #     pos4+=1
        # xwb.save("猫眼.xls")
 
if __name__ == '__main__':
    ps = Parse()
    ps.run_parse("html")


```

## 补充：JSON在线工具







