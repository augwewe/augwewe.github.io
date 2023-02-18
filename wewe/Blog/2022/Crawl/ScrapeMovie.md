---
title: 猫眼Top100榜单分析-进阶
date: 2022-10-30 12:04:21
author: cava
isOriginal: true
category: 
    - notebook
tag:
    - 爬虫技术 猫眼电影
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

```python
# -*- coding: utf-8 -*-
# @Time    : 2022/11/26 12:06
# @Author  :augwewe
# @FileName: Ask_URL.py
# @Software: PyCharm
import json
import re,requests,os,time,sqlite3
from pprint import pprint

from Parse import Parse
class Maoyan(object):
    def __init__(self,url,folder):
        self.url=url
        self.headers={
            "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
        }
        self.asking_url_list=[]
        self.folder_name=folder
#请求网站
#遵守PEP8原则编写规范

#1.response.status_code返回状态码，查看网页是否请求成功(200)
#2.response.text返回响应的内容以文本形式编码
#3.保存前，判断文件是否存在，不存在就要创建文件
#解析url
#保存;提取offset=后的数字为文件名保存
    def req_fun(self,url):
        response=requests.get(url,headers=self.headers)
        if response.status_code == 200:
           return response.text
        return None
#print(response.status_code)
#查看获取到的url是否请求过
#判断1：文件目录下已经保存的，存在的
#判断2：过程中正在请求的，请求一个结束后就会保存到目录文件中；动态加载
#url的解析器，
    def url_parse(self,url:str):
        url_lst=url.split("/")
        if url_lst:
            return url_lst[-1]
        return "No Parse Parameter"
    def have_asked(self,asking):
    #验证链接是否是已经请求过的的；即判断1
        asked_lst_filename=[filename[2] for filename in os.walk("html")]
        if asking + ".html" in asked_lst_filename + self.asking_url_list:
            return False
        return True
    #保存前要判断“html"是否存在
    def folder_exists(self,folder:str):
        if not os.path.exists(folder):
            os.mkdir(f'{folder}')#创建文件名
    def save_html(self,content,filename,mkdir_r):
        with open(f"{mkdir_r}/{filename}.html","w",encoding="utf-8") as f:
            f.write(content)
            f.close()
    def read_json(self,filename,read_type="json"):
        conn = sqlite3.connect('D:\SQLite\data\cava.db')
        conn.execute('''
                            CREATE TABLE MAOYAN2
                            (
                              ID  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                              LINK VARCHAR NOT NULL,
                              IMG VARCHAR NOT NULL,
                              TITLE VARCHAR NOT NULL,
                              SCORE VARCHAR NOT NULL);
                    ''')
        print("successfully")
        target_suffix=['json','txt','xls']
        if read_type not in target_suffix:
            return None
        with open(filename,"r",encoding="utf-8") as f:
            if read_type == 'json':
                data=json.load(f)
                for line in data["Scrape100"]:
                    # print(line)
                    for i in line:
                        print("测试",i)
                        sql = "insert into maoyan2(id,link,img,title,score) values (null,'%s','%s','%s','%s')" % (i['link'], i['img'], i['title'], i['score'])
                        conn.execute(sql)
                        conn.commit()
            elif read_type == 'txt':
                data=f.read()
        return data


#“引擎”作用
    def engine(self):
        self.folder_exists(self.folder_name)
        asking_filename = self.url_parse(self.url)#
        if self.have_asked(asking_filename):
            #执行请求
            # print(f'The url is requestsing: {self.url}')
            self.asking_url_list.append(self.url)
            html=self.req_fun(self.url)
            #定义
            self.save_html(content=html,filename=asking_filename,mkdir_r=self.folder_name)
        else:
            print(f"Requests url {self.url}已经请求过了")
        # self.parse(self.folder_name)


def main():
    global maoyan
    folder="html"
    url = "https://ssr1.scrape.center/page/{page}"
    # 捕获10个网页到文件”html"中
    for i in range(1,11):
        time.sleep(1.5)
        maoyan = Maoyan(url.format(page=i), folder="Index_Html")
        maoyan.engine()
    #读取json
    details_link_lst=[]
    data_json=maoyan.read_json("movie.json")
    for details in data_json["Scrape100"]:
        for i in details:
            details_url=i["link"]
            details_link_lst.append(details_url)
    # print("详情链接1~100：",details_link_lst)
    for i in details_link_lst:
        movie_detail = Maoyan(i,folder="Detail_Html")
        movie_detail.engine()

if __name__ == '__main__':
   main()
```

```python
# -*- coding: utf-8 -*-
# @Time    : 2022/11/29 14:41
# @Author  :augwewe
# @FileName: Parse.py
# @Software: PyCharm
import os, requests, re, xlwt, xlrd, urllib.parse, pprint, json
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
        self.BASE_URL = "https://ssr1.scrape.center/"


    def generate_path(self, folder):
        if not os.path.exists(folder):
            return None
        path_list = []
        for dirpath,filename, filenames in os.walk(folder):
            for i in filenames:
                path = dirpath + "/" + i  # join自动识别平台路径格式，window和Mac
                path_list.append(path)
            return path_list

    def read_html(self, path: str):
        with open(path, "r", encoding="utf-8") as f:
            return f.read()

    # 解析html文件
    def parse(self, content):
        # print(content)
        # 先替换，方便提取评分数据

        pattern_index = '<div.*?class="el-card.*?<a.*?href="(.*?)"' \
                  '.*?<img.*?src="(.*?)".*?</a>' \
                  '.*?<h2.*?class="m-b-sm">(.*?)\s-.*?</h2>' \
                  '.*?<p.*?score.*?>\s+(.*?)</p>'
        data_lst = re.findall(pattern_index, content, re.S)
        # print(data_lst)  # 存放链接信息的列表，列表元素是元组：电影名称，电影封面，上映日期，评分
        good_lst = []
        if data_lst:
            for tup in data_lst:
                d = {
                    "link": urllib.parse.urljoin(self.BASE_URL, tup[0]),
                    "img": tup[1],
                    "title": tup[2],
                    "score": tup[3],
                }
                good_lst.append(d)
        return good_lst

    def save_json(self, filename, content_dict):
        with open(filename + '.json', "w", encoding="utf-8") as f:
            json.dump(content_dict, f, ensure_ascii=False)


    def run_parse(self, folder):
        # 进行排序
        JSON_TXT = {"Scrape100": []}
        json_filename = "movie"
        path_list=[]
        for k in self.generate_path(folder):
            path_list.append(k)#将所有.html汇总成一个列表，下面会对其进行排序
            # print(path_list)
        path_list.sort(key=lambda x:int(x[5:-5]))#这样处理1.html到10.html从1.html~10.html排序，如果只用sort，会显示1.html,10.html~9.html
        # print(path_list)
        for path in path_list:
            html_content = self.read_html(path)
            #print("内容测试",html_content)
            n = self.parse(html_content)
            JSON_TXT["Scrape100"].append(list(n))
            # self.save_json(JSON_TXT)
            self.save_json(json_filename,JSON_TXT)

        # pprint(JSON_TXT)
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
        #
def main():
    ps = Parse()
    ps.run_parse("Index_Html")

if __name__ == '__main__':
    main()

```

``` python
'<div.*?id="detail"\s+class="m-t">*\s?.*?<h2.*?class="m-b-sm">(.*?)</h2></a>' \
                        # '.*?<button.*?剧情</span>.*?<button.*?<span>(.*?)</span>' \
                        # '.*?<div.*?63864230.*?<h3.*?</h3>\s+<p.*?>\s+(.*?)\s+</p></div>' \
                        # '.*?<div.*?class="el-row">.*?<p.*?class="name.*?>(.*?)</p></div>' \
                        # '.*?tabindex="0">(.*?)</p>'
```

