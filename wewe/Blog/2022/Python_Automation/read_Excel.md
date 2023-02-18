---
title: python 自动化
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

### 读取excel

```python
#导入模块
import xlrd,xlwt
#打开文件
wb = xlrd.open_workbook("../school/cava.xls")
#获取全部的表
sheets=wb.sheets(
wb.sheet_by_name()
#获取所有的行和列
rows=sheets.nrows
cols=sheets.ncols
#获取文件中的表格
#1.通过索引
sheet = wb.sheet_by_index(0)
#2.通过表格名
sheet=wb.sheet_by_name("marm")
#第一列所有的值
print(sheet.col_values(0))
#第一行所有的值
print(sheet.row_values(0))
#获取表格全部数据
for row in range(rows):
	for col in range(cols):
 		value = sheet.cell_value(row, col)
        print(value, end="\t")#调整格式，使得数据以在表格中的样式显示在打印台
    print()
#例子:向表格第一行添加数据
head_data=['name','sex','age']
pos=0
for in head_data:
    sheet.write(0,pos,i)#sheet.write(行，列，数据)
    pos+=1
wb.save("othername.xls") 

```

### 追加表格 

```py
#导入模块
import xlutils,xlrd
from faker import Faker
from xlutils.copy import copy
faker = Faker()
#打开表格
wb = xlrd.open_workbook("my.xls")
xwb = copy(wb)
#追加的表格
sheet = xwb.get_sheet("sheet1 ")
#获取每一行的数据
rows = sheet.get_rows()
#获取全部行数
print(len(rows))
for row in range(len(rows), len(rows) + 1000):
    for col in range(0, 6):
        sheet.write(row, col, faker.name())#写入追加的数据
xwb.save("cava1.xls") #需要新命名表格
```

###  os模块部分内容

```python
导入excel路径
方法一
path = "."  #当前路径,改变当前路径中的目录. 在data文件下
    suffix=["xls"] 适合大项目
    # print(list(os.walk(path)))
    path_list=[]
    # with open("data\\2022-10-客服部.xls","r",)
    for dirpath,dirnames,filenames in os.walk(path):
         for i in filenames:
             if i.split(".")[-1] in suffix:
                print(dirpath+"\\"+i)

```



### 方法二

![image-20221115175917897](../mywriter.assets/image-20221115175917897.png)

### 方法三

![image-20221115183649716](../mywriter.assets/image-20221115183649716.png)

### xls&xlsx

一、.xls中最多存入的数据条数：column(256),row(65536)

二、建立.xlsx文件案例步骤

```python
import xlxswriter
wb=xlsxwriter.Workbook("插入数据xlsxwriter.xlsx")
#可以直接定义文件名
data=["date","data1","data2"]
work_sheet1=wb.add_worksheet("代码操作记录")
#定义表格名称
work_sheet1.write_row("A1",data)
#从第一行第一列的第一格单元格输入数据
data2=[
    ["2022-{i}".format(i=i) for i in range(1,13)],
    [random.randint(1,101) for _ in range(12)],
    [random.randint(1,101) for _ in range(12)],
]
work_sheet1.write_column("A2",data2[0])#从第一行第一列的第二个单元格输入输入，以填充列的形式
work_sheet1.write_column("B2",data2[1])
work_sheet1.write_column("C2",data2[2])
#1.折线图定义
chart_col=wb.add_chart({"type":"line"})
#2.给图表设置格式且填充内容
#第一条数据data1
chart_col.add_series(
    {
        "name":"=代码操作记录!$B$1",#b1
        "categories":"=代码操作记录!$A$2:$A$7",
        "values":"=代码操作记录!$B$2:$B$7",
        "line":{
            "color":"blue",
        }
    }
)
#data2
chart_col.add_series(
    {
        "name":"=代码操作记录!$C$1",
        "categories":"=代码操作记录!$A$2:$A$7",
        "values":"=代码操作记录!$C$2:$C$7",
        "line":{
            "color":"red",
        }
    }
)
#3.设置图表插入在表格中的具体位置
chart_col.set_title({"name":"虚假数据折线图"})
chart_col.set_x_axis({"name":"横坐标"})
chart_col.set_y_axis({"name":"纵坐标"})
work_sheet1.insert_chart("D2",chart_col,{"x_offset":20,"y_offset":20})
wb.close()
```

