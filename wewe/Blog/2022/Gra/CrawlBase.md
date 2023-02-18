---
title: 爬虫数据获取至SQLite
date: 2023-1-1 12:04:21
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

###  数据存储至SQLite中

1.连接数据库

2.读取json文件

3.不知如何将数据形式为列表的存入sqlite中，例如电影剧情分类有武侠，剧情，人物。

```python
    def read_json(self,filename,read_type="json"):
        conn = sqlite3.connect('D:\SQLite\data\cava.db')
        conn.execute('''
                            CREATE TABLE MOVIE_DETAIL
                            (
                              Id  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                              Title  VARCHAR NOT NULL,
                              Introduction VARCHAR NOT NULL,
                              Director VARCHAR NOT NULL,
                              Actor VARCHAR NOT NULL);    
                    ''')
        print("successfully")
        target_suffix=['json','txt','xls']
        if read_type not in target_suffix:
            return None
        with open(filename,"r",encoding="utf-8") as f:
            if read_type == 'json':
                data=json.load(f)
                for line in data["Scrape_detail"]:
                    for i in line:
                        sql = "insert into movie_detail(id,title,introduction,director,actor) values (null,'%s','%s','%s','%s')" % (i['title'],i['introduction'], i['director'], i['actor'])
                        conn.execute(sql)
                        conn.commit()
            elif read_type == 'txt':
                data=f.read()
        return data
```





