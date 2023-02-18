---
title: 异常捕获Try..exception 
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

## 异常捕获

### try........exception

1.一个try一个except ,except中可以捕获多种异常类型，try子句中若遇到执行有错误的语句1号，其余下的语句都将被忽略，捕获1号语句中的异常

2.异常类型可以放在一个元组中

3.非系统型异常可以用Except统一捕获

4.finally中的语句表示，无论如何都是会被执行的

```python
while True:
    try:
        the_num=input("please enter here:")
        num1=int(the_num.split(",")[0].strip())
        num2=int(the_num.split(",")[1].strip())
        the_result=num1+num2
        print(the_result)
        test = {[1, 2]: "haha"}
        break
    #写法1
    # except ValueError as err:
    #     print("Value Err is {}".format(err))
    # except TypeError as err:
    #     print("Type Err is {}".format(err))
    #写法2
    except(ValueError,TypeError) as err:
        print("The Err is {}".format(err))
    # finally:
    #     print("这里是无论是否异常，都将执行的内容")
print("continue")
------------------------------------
#输出
please enter here:1 , 2
3
The Err is unhashable type: 'list'
please enter here:
-------------------------------------
please enter here: 1 , ss
The Err is invalid literal for int() with base 10: 'ss'
please enter here:
#因为TypeError的try子句顺序在ValueError之后，当ValueError执行捕获异常时，TypeError就不会被执行
```







