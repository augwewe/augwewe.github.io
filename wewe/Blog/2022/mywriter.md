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

## xls&xlsx

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

