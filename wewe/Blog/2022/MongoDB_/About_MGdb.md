---
title: MongoDB教程 6.0版
date: 2023-1-3 13:04:21
author: cava
isOriginal: true
category: 
    - notebook
tag:
    - 爬虫技术
    - MongoDB
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

##  MongoDB-pymongo

导入库 import pymongo

### 1.连接数据库

```python
client=pymongo.MongoClient(host="localhost",port=27017)
client=pymongo.MongoClient('mongodb://localhost:27017/')
```

### 2.指定数据库

不存在该数据库会自动创建

```python
db=client.first
db=client['first']
```

### 3.指定集合（数据表）

```python
collections=db.info
collections=db['info']
```

### 4.插入数据

```python
info={
    'id':'123',
    'name':'xiaoyi',
    'birth':'1027',
     'sex':'girl'
}
result=collections.insert_one(info)
print(result)
```

#### 4.1批量插入数据(insert_one)

```python
 for num in range(1,501):
     info_second = {
         'name': faker.name(),
         'email': faker.email(),
         'post': faker.postcode(),
     }
     collections.insert_one(info_second)
```

#### 4.2批量插入数据(insert_many)

```python
result=collections.insert_many([info,info_student])

new_list=[]
for i in range(1,501):
     daylist = {
         'name': faker.name(),
         'email': faker.email(),
         'post': faker.postcode(),
     }
     new_list.append(daylist)
 collections.insert_many(new_list)
```

### 5.查询数据

```python
from bson.objectid import ObjectId

result=collections.find_one({"name":"wewe"})
#获取所有xiaoyi的信息
result2=collections.find({"name":"xiaoyi"})
#查询不存在的id会返回None
result3=collections.find_one({"_id":ObjectId("63b4dee4d36d58d5a24b4172")})
```

### 6.查询数据范围（int)

<img src="./About_MGdb.assets/image-20230105010554145.png" alt="image-20230105010554145" style="zoom: 50%;" />

```python
result=collections.find_one({"birth":{"$gt":8888}})
result=collections.find_one({"birth":{"$in":[8888,20000]}})
result=collections.find_one({"birth":{"$lt":10000}})
result=collections.find_one({"birth":{"$lte":8888}})
```





































