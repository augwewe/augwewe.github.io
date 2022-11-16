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

### 换行输出

```python
content='''Hello 1234567 Word_This
is a Regex Demo
'''
pattern="^h.*\s(\d+)\s.*Demo$"#
result=re.match(pattern,content,re.S|re.I)#re.S可以匹配到换行,若开始字母是小写，且没有加re.I,就不会有输出，re.S是忽略大小写（不论开始字母是大写或小写都可以输出）
print(result)
print(result.group())
print(result.group(1))
```

### groups()返回所有

```python
#groups()返回元组
content="Hello 123 4567 Word_This is a Regex Demo"
pattern="^H.*\s(\d+)\s.*Demo$"#
result=re.match(pattern,content)
print(result)
print(result.groups())
```

### 转义 - 原样输出特殊符号

``` python
#转义
import  re
content="hello$6.66"
result=re.match("hello\$6.66",content)#$默认结束，加上\转义后原样输出,.原样输出也需要转义
print(result)
```

### search方法

```python
#search方法,不会因原字符开头和结尾不符合匹配而影响到结果
content='''Hello 1234567 Word_This
is a Regex Demo
'''
pattern="^h.*\s(\d+)\s.*Demo$"#
result=re.search(pattern,content,re.S|re.I)#re.S可以匹配到换行,若开始字母是小写，且没有加re.I,就不会有输出，re.S是忽略大小写（不论开始字母是大写或小写都可以输出）
print(result)
#最好不要加^ $开始和结束符号
```

```python
content="Extra strings Hello 1234567 Word_This is a 666 Regex Demo Extra strings"
pattern="\d+"
result=re.search(pattern,content)
# result=re.search(pattern,content)输出1234567
# result=re.match(pattern,content)#None
print(result)
```

