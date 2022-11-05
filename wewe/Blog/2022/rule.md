---
title: 正则表达式
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

## 正则表达式

### 模式

![n1](./rule.assets/n1.png)

![n2](./rule.assets/n2.png)

### 常规匹配

### atttention:

re.match(pattern,string,flag=0)

从字符的起始位置匹配一个模式，如果不是起始位置匹配成功,match()返回none

\w只能匹配到一个数字/字母

```python
import re
content="Hello 123 4567 Word_This is a Regex Demo"
pattern="^Hello\s\d\d\d\s\d{4}\s\w+\s.*Demo$"
result=re.match(pattern,content)
print(result)
print(result.group())#获取到匹配的对象
#输出
<re.Match object; span=(0, 40), match='Hello 123 4567 Word_This is a Regex Demo'>
Hello 123 4567 Word_This is a Regex Demo
-------------------------------------------------------
content = "Ethanol, Ethyl Alcohol Absolute 200 1L"
pattern="^Ethanol\S\s\w+\s.*1L$"
result=re.match(pattern,content)
print(result)
print(result.group())
```

### 泛匹配

```py
content="Hello 123 4567 Word_This is a Regex Demo"
pattern="^H.*o$"#"^H.+o$"
result=re.match(pattern,content)
print(result)
print(result.group())

```

### 匹配特定目标

```py
content="Hello 123 4567 Word_This is a Regex Demo"
pattern="^H.*\s(\d{3})\s.*Demo$"#
result=re.match(pattern,content)
print(result)
print(result.group())
print(result.group(1))#1,2获取两个内容
---------------------------------------
a = "Beakers, Plastic, Polypropylene, 2000mL"
pattern="^Beakers\S\s(\w+)\S\s\w+\S\s(\w+)$"
result=re.match(pattern,a)
print(result)
print(result.group())
print(result.group(1,2))
-------------------------------------------
content="Filter, Vacuum System, PES Membrane, 0.2"
pattern="^Filter\S\s(\w{5})\w+\s\w+\S\s(\w+)\s\w+\S\s(\d\S\d)$"
result=re.match(pattern,content)
print(result)
print(result.group())
print(result.group(1,2,3))
--------------------------------------------

```

### 贪婪匹配

```python
content="Hello 123 4567 Word_This is a Regex Demo"
pattern="^H.*(\d{3})\s.*Demo$"  #输出567
#\d+会输出7,至少保留一个；\d* 没有输出
#*控制输出数字，

result=re.match(pattern,content)
print(result)
print(result.group())
print(result.group(1))
```

