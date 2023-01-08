---
title:  Python 之站在高层框架下的 SQLAIchemy 操作 MySQL
date: 2023-1-7 23:36:21
author: cava
isOriginal: true
category: 
    - notebook
tag:
    - 爬虫技术
    - 数据库
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

## Python 之站在高层框架下的 SQLAIchemy 操作 MySQL（关系型数据库)

### 定义

MySql是关系型数据库管理系统。

Flask:Python Web 开发界主力——Flask。使用 SQLAlchemy 进行数据库开发。使用 ORM 是大势所趋。

ORM框架:对数据库的映射;该框架建立在数据库 API 之上，使用关系对象映射进行数据库操作，简言之便是：将对象转换成 SQL，然后使用数据 API 执行 SQL 并获取执行结果。

### 数据库命令

1.登录数据库

mysql  -u root -p

2.查看所有数据库

show databases;

<img src="./About_pymysql.assets/image-20230108094126393.png" alt="image-20230108094126393" style="zoom: 80%;" />

3.创建新的数据库

create databases   数据库名;

4.使用数据库 

use 数据库名；

5.查看当前数据库中的数据表

show tables;

### sqlalchemy

安装命令：**pip install sqlalchemy pymysql**

<img src="./About_pymysql.assets/image-20230108095853904.png" alt="image-20230108095853904" style="zoom:50%;" />

**调用数据库API的操作:**

'数据库类型+数据库驱动名称://用户名:口令@机器地址:端口号/数据库名'

```
mysql+pymysql://<username>:<password>@<host>|<dbname>[?<options>]
mysql+mysqldb://<user>:<password>@<host>[:<port>]/<dbname>
```

```
mysql+pymysql://:@/[?]
# mysql+pymysql://<username>:<password>@<host>|<dbname>[?<options>]
mysql+mysqldb://:@[:]/
# mysql+mysqldb://<user>:<password>@<host>[:<port>]/<dbname>
```

**连接数据库：**

```python
from sqlalchemy import  create_engine

enging = create_engine(
    "mysql+pymysql://root:admin@127.0.0.1:3306/test",
     max_overflow=5,
     pool_size=10,
     echo=True
)
```

**创建数据表**

```python
from  sqlalchemy import Table,Column
from sqlalchemy import String,Boolean,Integer,MetaData
from datetime import datetime
#导入各种数据类型
#metadata 获得元数据库，描述数据表
metadata = MetaData()
test=Table("info",metadata,
           Column("id",Integer(),primary_key=True,autoincreament=True),
           Column("name",String(666)),
           Column("data",DateTime(),default=datetime.now,onupdate=datetime.now),
           Column("main",Boolean(),defalut=False)
           )
metadata.create_all(enging)
```

**显示数据表结构**

desc 数据表名;

<img src="./About_pymysql.assets/image-20230108112032180.png" alt="image-20230108112032180" style="zoom:67%;" />

### 事务

事务是必须满足 4 个条件（ACID）： 原子性，一致性，隔离性，持久性。

定义：我们每执行一个操作的时候的 **会话（session）**也就是我到ATM那里插卡存钱到退卡这就是一个Session。

案例：在银行存一百块钱

\- 原子性：我们的每一个事务，都是插入一条数据，都是很小的一个事件。
\- 一致性：类似我们存进去钱或者取出来钱，或者是中间有上面更改，都可以完完全全的展现在我的表上。（不会是，我存进去一百元而这个表没有任何的变动）也就是说，**改动是一致的**。
\- 隔离性：比方说两个不同的人，我存一百和你存一百是两个不同的事物，我取钱不会影响到你的资产变动，这就是我们所说的隔离性。
\- 持久性：持久性就是我们数据就一直在哪了，你没有操作的话，它就不会改变了。

事务用 **BEGIN、ROLLBACK、COMMIT** 来实现：

| BEGIN        | 开始一个事物         |
| ------------ | -------------------- |
| **ROLLBACK** | **事物回滚**         |
| **COMMIT**   | **事物确认（提交）** |

```python
#1.连接事务
conn=enging.connect()
#2.开始事务
the_start=conn.begin()
try:
    conn.execute(test.insert(),{"name":"lol3"})
    print(1 / 0)
    the_start.commit()
except:
    the_start.rollback()
#回滚会撤销刚刚所作出来的修改（或者说操作回退，就是类似于没有执行。譬如：文本操作中的 Control + Z）的操作

```

### 数据类型

| 名称         | 关键词                                           |
| ------------ | ------------------------------------------------ |
| **字段**     | Column、string、integer 都是字段                 |
| **MetaData** | 是表结构的额外信息                               |
| **索引**     | Index                                            |
| **表**       | Table                                            |
| **操作方法** | execute ,update, insert, select, delete, join 等 |

### 索引

| 第一     | 通过创建唯一的索引，可以确保数据库表中每一行数据的唯一性；   |
| -------- | ------------------------------------------------------------ |
| **第二** | **可以大大加快数据的检索速度，这也使创建索引的最主要原因；** |
| **第三** | **可以加速表和表之间的连接， 特别是在实现数据的参考完整性方面特别有意义；** |
| **第四** | **在使用分组和排序子句进行数据检索时，同样可以显示著的减少查询中查询中分组和排序的时间** |
| **第五** | **通过使用索引，可以在查询的过程中，使用优化隐藏器，提高系统的性能。** |

### 数据增删改查













