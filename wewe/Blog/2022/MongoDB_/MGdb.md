---
title: MongoDB教程 6.0版
date: 2023-1-3 13:04:21
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

##  MongoDB 6.0教程

### 1.1下载MongoDB

https://www.mongodb.com/try/download/community

![image-20230103134748417](./MGdb.assets/image-20230103134748417.png)

下载对应的版本

![image-20230103134838473](./MGdb.assets/image-20230103134838473.png)

选custom可自定义安装路径，complete默认路径

后续点击next,，选择不勾选(*Install MongoDB Compass*),直至install，勾选后下载安装速度会较慢些。

### 1.2环境变量配置

安装完成后进行环境变量的配置

进入高级系统设置

<img src="./MGdb.assets/image-20230103135338042.png" alt="image-20230103135338042" style="zoom: 67%;" />

<img src="./MGdb.assets/image-20230103135908912.png" alt="image-20230103135908912" style="zoom:50%;" />

添加路径为MongoDB安装的路径" .............\bin"

<img src="./MGdb.assets/image-20230103144010900.png" alt="image-20230103144010900" style="zoom:67%;" />

### 1.3 下载MongoDB.Shell

进入https://www.mongodb.com/try/download/shell

<img src="./MGdb.assets/image-20230103143423296.png" alt="image-20230103143423296" style="zoom:50%;" />

下载完成后，打开其bin文件夹

<img src="./MGdb.assets/image-20230103143532938.png" alt="image-20230103143532938" style="zoom: 67%;" />

<img src="./MGdb.assets/image-20230103143609407.png" alt="image-20230103143609407" style="zoom: 67%;" />

复制以上两个文件至MongoDB的bin文件中

<img src="./MGdb.assets/image-20230103143923066.png" alt="image-20230103143923066" style="zoom:67%;" />

复制完成后，打开cmd,首先输入mongod

<img src="./MGdb.assets/image-20230103144432017.png" alt="image-20230103144432017" style="zoom:67%;" />

再输入mongosh

<img src="./MGdb.assets/image-20230103144530485.png" alt="image-20230103144530485" style="zoom:67%;" />

输入 show dbs(查询所有库)

![image-20230103144654299](./MGdb.assets/image-20230103144654299.png)

admin，config,local为自带的三个库，first为自定义的库

### 1.4 启动MongoDB 服务

以管理员权限进入cmd 

输入 net start MongoDB 

<img src="./MGdb.assets/image-20230103185954154.png" alt="image-20230103185954154" style="zoom:67%;" />









