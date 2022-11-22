---
title:  PythonCrawl
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

# 网络爬虫

定义：当今最大的网络是互联网，最大的爬虫是各类搜索引擎：谷歌，百度。网路爬虫按照一定的规则爬取所需要的信息的程序，通过URl的请求来实现。在包含广泛信息时，我们就需要一些聚焦于某一方面的信息的爬虫来提供服务，例如某一类型的书。

### 1. 网络爬虫类型



![image-20221119171231536](./PythonCrawl.assets/image-20221119171231536.png)

<img src="./PythonCrawl.assets/image-20221119171113993.png" alt="image-20221119171113993" style="zoom: 67%;" />

<img src="./PythonCrawl.assets/image-20221119171549635.png" alt="image-20221119171549635" style="zoom: 67%;" />

**查看User-Agent方式，右键-检查-NetWork**



全网爬虫：谷歌百度搜索引擎

主题爬虫：某一类型信息的，比如新闻类

增量式爬虫：对已下载的页面采取增量式更新的爬虫，只爬取新产生的或者发生的网页，在一定程度上保证 爬取的页面是最新的，减少了空间的浪费。

为什么要用采用增量式爬虫爬取实时热搜的新闻？优点体现在？

前提环境：第一次抓取微博热搜榜的全部新闻可能需要的工作量是24小时，如重复此工作量去操作达到需求，后果是效率低，且会有重复的数据。

解决策略：增量式爬虫，如何处理新数据？

​					将新旧数据进行比较 ，如python列表知识中的语法点：#value in xx , 类似来进行判断，来保证数据的唯一性（达到了数据不重复的目的）

<img src="./PythonCrawl.assets/image-20221119171753590.png" alt="image-20221119171753590" style="zoom:50%;" />

1.URL 通过value in xx来比较查看

2.内容（哈希）

```python
#哈希解析
test="cava"
print(hash(test))
```

存储介质？

例如将爬取到的url作为MySQl中的主键，定义为Id,查看主键对应的内容，比如第一条值为xiaoyi想去迪士尼，第二条为xiaoyi想去环球影视城，数据已经有更新。

内容的判断？

``` python 
print(hash(text1)==hash(text2))
#返回True则表示存在重复内容
```

### Redis数据库

tips:内存爆满问题，注意要及时备份

**广度优先算法**

每一层都取完再取下一层

<img src="./PythonCrawl.assets/image-20221119221146502.png" alt="image-20221119221146502" style="zoom:50%;" />

**深度优先算法**

从开始取到最后一个节点

<img src="./PythonCrawl.assets/image-20221119221250774.png" alt="image-20221119221250774" style="zoom:50%;" />

### ajax

百度搜索图片<img src="./PythonCrawl.assets/image-20221120181835251.png" alt="image-20221120181835251" style="zoom:50%;" />

往下滑动的同时，会看到左边数据有增加，但是页面并不会改变

### 字体反爬虫

实习僧网页：

<img src="./PythonCrawl.assets/image-20221120182927938.png" alt="image-20221120182927938" style="zoom:50%;" />

由于对方设置了css文件规则，我们爬取到的数据内容只会显示，xx天xx周

规则？本地电脑：11-a  对方电脑: 11-B

## HTTP

**1.URL和URI**，基本相等

豆瓣有自己的图标，指向唯一访问模式

查看图标方式：网址+favicon.ico

如下图所示

<img src="./PythonCrawl.assets/image-20221120183346849.png" alt="image-20221120183346849" style="zoom:50%;" />

 **2.超文本**

检查-Elements当前渲染后

源代码-没有经过渲染的，一些css内容。。。。

## HTTP&HTTPS

HTTPS 的安全基础是 SSL，因此通过它传输的内容都是经过 SSL 加密的，它的主要作用可以分为两种：

1.建立一个信息安全通道，来保证数据传输的安全。

2.确认网站的真实性，凡是使用了 HTTPS 的网站，都可以通过点击浏览器地址栏的锁头标志来查看网站认证之后的真实信息，也可以通过 CA 机构颁发的安全签章来查询。

HTTPS 的安全基础是 SSL，因此通过它传输的内容都是经过 SSL 加密的，它的主要作用可以分为两种：

1.建立一个信息安全通道，来保证数据传输的安全。

2.确认网站的真实性，凡是使用了 HTTPS 的网站，都可以通过点击浏览器地址栏的锁头标志来查看网站认证之后的真实信息，也可以通过 CA 机构颁发的安全签章来查询。 

不通过SSL加密，通过浏览器访问网站时就会出现“该网站不安全”的提示，失去客户访问流量

### HTTP请求过程

<img src="./PythonCrawl.assets/image-20221120205744260.png" alt="image-20221120205744260" style="zoom:50%;" />

<img src="./PythonCrawl.assets/image-20221120205815329.png" alt="image-20221120205815329"  />

第一列 Name：请求的名称，一般会将 URL 的最后一部分内容当作名称。

第二列 Status：响应的状态码，这里显示为 200，代表响应是正常的。通过状态码，我们可以判断发送了请求之后是否得到了正常的响应。

第三列 Type：请求的文档类型。这里为 document，代表我们这次请求的是一个 HTML 文档，内容就是一些 HTML 代码。

第四列 Initiator：请求源。用来标记请求是由哪个对象或进程发起的。

第五列 Size：从服务器下载的文件和请求的资源大小。如果是从缓存中取得的资源，则该列会显示 from cache。

第六列 Time：发起请求到获取响应所用的总时间。

第七列 Waterfall：网络请求的可视化瀑布流。

### post和get区别是什么？

都是获得数据，get是下载，得到内容。用户登陆是使用post,因为get会显示登陆的密码信息，不安全

<img src="./PythonCrawl.assets/image-20221120213922697.png" alt="image-20221120213922697" style="zoom: 50%;" />

### 请求头

Accept：请求报头域，用于指定客户端可接受哪些类型的信息。

Accept-Language：指定客户端可接受的语言类型。

Accept-Encoding：指定客户端可接受的内容编码。

Host：用于指定请求资源的主机 IP 和端口号，其内容为请求 URL 的原始服务器或网关的位置。从 HTTP 1.1 版本开始，请求必须包含此内容。

Cookie：也常用复数形式 Cookies，这是网站为了辨别用户进行会话跟踪而存储在用户本地的数据。它的主要功能是维持当前访问会话。例如，我们输入用户名和密码成功登录某个网站后，服务器会用会话保存登录状态信息，后面我们每次刷新或请求该站点的其他页面时，会发现都是登录状态，这就是 Cookies 的功劳。Cookies 里有信息标识了我们所对应的服务器的会话，每次浏览器在请求该站点的页面时，都会在请求头中加上 Cookies 并将其发送给服务器，服务器通过 Cookies 识别出是我们自己，并且查出当前状态是登录状态，所以返回结果就是登录之后才能看到的网页内容。

Referer：此内容用来标识这个请求是从哪个页面发过来的，服务器可以拿到这一信息并做相应的处理，如做来源统计、防盗链处理等。

User-Agent：简称 UA，它是一个特殊的字符串头，可以使服务器识别客户使用的操作系统及版本、浏览器及版本等信息。在做爬虫时加上此信息，可以伪装为浏览器；如果不加，很可能会被识别出为爬虫。

Content-Type：也叫互联网媒体类型（Internet Media Type）或者 MIME 类型，在 HTTP 协议消息头中，它用来表示具体请求中的媒体类型信息。例如，text/html 代表 HTML 格式，image/gif 代表 GIF 图片，application/json 代表 JSON 类型，更多对应关系可以查看此对照表：



### 响应

<img src="./PythonCrawl.assets/Cgq2xl5XTQSAfWsUAAa-jFIsTTw064.2d57e938.png" alt="img" style="zoom: 33%;" />

### session

### Cookie

记住用户信息

### DNS

浏览器缓存

![image-20221121002817352](./PythonCrawl.assets/image-20221121002817352.png)



### 页面呈现

![image-20221121005418250](./PythonCrawl.assets/image-20221121005418250.png)

### 网页匹配css 内容

 **tips:先用选择器定位要匹配的内容，再从它的上一级开始匹配**

案例1：

![image-20221121175216475](./PythonCrawl.assets/image-20221121175216475.png)

案例2：

![image-20221121175353470](./PythonCrawl.assets/image-20221121175353470.png)

**点击上下箭头检查匹配的内容**

![image-20221121175421903](./PythonCrawl.assets/image-20221121175421903.png)

## 线程

### 全局解释器

<img src="./PythonCrawl.assets/image-20221122150529578.png" alt="image-20221122150529578" style="zoom:67%;" />

![image-20221122150602191](./PythonCrawl.assets/image-20221122150602191.png)

一秒钟运行一个线程（一个程序）

如上图所示，thread1和thread2,GIL锁被线程一拿走，且GIL锁只有一个，经过操作系统，在 cpu里执行，时间到了后，释放GIL锁，此时线程2拿到锁，跟线程1 的执行顺序一样。所以即使有2个程序在运行，但线程只有一个。若有其他线程，则会卡在python解释器里。

![image-20221122151935405](./PythonCrawl.assets/image-20221122151935405.png)

### 多线程

![image-20221122154327669](./PythonCrawl.assets/image-20221122154327669.png)

### 进程

进程定义：一个进程可以做很多事情，并且同时做，互不干扰。

线程：操作系统中最小的调度单位。

**并发**：同一时刻只有一条指令执行，a->b,经过一会儿时间，b->a,同时推进，a和b互相切换，速度很快。

并发在一核处理器的电脑中也能运行。

**并行**：需要多个处理器，电脑只有一核处理器是不可以的；多个cpu中，同一时刻会有一个线程在运行就是并行

<img src="./PythonCrawl.assets/image-20221122160228431.png" alt="image-20221122160228431" style="zoom:50%;" />

### 多线程场景

IO密集型，适合爬虫

CPU密集型不适合多线程

1.单线程

```python
import time
def start():
    for i in range(1000000):
        i+=i
    return
#并不使用任何线程
#time:0.3134646415710449
def main():
    start_time=time.time()
    for i in range(10):
        start()
    print(time.time()-start_time)

if __name__ == '__main__':
    main()
```

2.多线程

```python
import time,threading
def start():
    for i in range(1000000):
        i+=1
    return

def main():
    start_time=time.time()#当前时间
    thread_name_time={} #创建字典的目的，存储每一个线程以及他所对应的时间，key+value
    for i in range(10):
#每个线程顺序执行
        thread=threading.Thread(target=start)#target写你要多线程运行的函数，不用加括号；加了括号调用的是函数运行完成后的值，此时每个线程中不能自己调用start()函数
        thread.start() #开启线程后就要开始运行
        thread_name_time[i]=thread #将数据添加入字典，用i做key值，目的，顺序执行
    for i in range(10):
        thread_name_time[i].join()#join目的：线程执行完才会执行后续部分
    print(time.time()-start_time)

if __name__ == '__main__':
    main()
#time:0.2631237506866455
#和test1速度相差并不大，
```

3.非守护线程

```python
import time,threading

def start(num):
    time.sleep(num)
    print(threading.current_thread().name)#当前线程的名字
    print(threading.current_thread().is_alive())#当前线程是否存活
    print(threading.current_thread().ident)#当前线程的编号

print("start")
#要用多线中的哪个函数，target=函数，name为名字
# 不命名就是ident
thread=threading.Thread(target=start,name="the_first_thread",args=(1,))
#声明结束后要启动
thread.start()#主线程不等待它执行完再执行stop,
thread.join()
print("stop")
#非守护线程
#主线程运行完才会运行子线程内容
#不会随着主线程结束而结束，
#join输出前
#start
#stop
#the_first_thread
#True
#40128
-------------------------------------
#join输出后
# start
# the_first_thread
# True
# 4952
# stop
```

```python
import threading,time

def target(second):
    print(f'Threading {threading.current_thread().name} is run.')
    print(f'Threading {threading.current_thread().name} sleep {second}s')#沉睡了几秒
    time.sleep(second)
    print(f'threading{threading.current_thread().name} ended')
print(f'Threading {threading.current_thread().name} is running')
for i in [1,5]:
    #元组也可
    t=threading.Thread(target=target,args=[i])
    t.start()
    t.join()#等待前面执行完
print(f'Threading {threading.current_thread().name} is ended')
#输出   join前
# #Threading MainThread is running
# Threading Thread-1 (target) is run.
# Threading Thread-1 (target) sleep 1s
# Threading Thread-2 (target) is run.
# Threading Thread-2 (target) sleep 5s
# Threading MainThread is ended
# threadingThread-1 (target) ended
# threadingThread-2 (target) ended
#join
# Threading MainThread is running
# Threading Thread-1 (target) is run.
# Threading Thread-1 (target) sleep 1s
# threadingThread-1 (target) ended
# Threading Thread-2 (target) is run.
# Threading Thread-2 (target) sleep 5s
# threadingThread-2 (target) ended
# Threading MainThread is ended
```

