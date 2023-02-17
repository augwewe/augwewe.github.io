---

title: aiottip
date: 2022-10-30 12:04:21
author: cava
isOriginal: true
category: 
    - notebook
tag:
    - python
    - 爬虫
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

## aiottp

### 概念

iohttp 是一个基于 asyncio 的异步 HTTP 网络模块，它既提供了服务端，又提供了客户端。其中我们用服务端可以搭建一个支持异步处理的服务器，用于处理请求并返回响应，类似于 Django、Flask、Tornado 等一些 Web 服务器。而客户端我们就可以用来发起请求，就类似于 requests 来发起一个 HTTP 请求然后获得响应，但 requests 发起的是同步的网络请求，而 aiohttp 则发起的是异步的。

### 1. attiop基本案例代码

```python
import aiohttp
import asyncio


async def fetch(session, url):
    async with session.get(url) as response:
        return await response.text(), response.status


async def main():
    async with aiohttp.ClientSession() as session:
        html, status = await fetch(session, 'https://augwewe.cn')
        print(f'html: {html[:100]}...')
        print(f'status: {status}')


if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
输出----------------------------------------------
html: <!DOCTYPE html>
<html lang="zh-CN" data-theme="light">
  <head>
    <meta charset="utf-8" />
    <me...
status: 200

```

获取了augwewe.cn网页源代码和响应代码200

###2.  url参数设置

```python
import aiohttp
import asyncio


async def main():
    params = {'name': 'cava', 'age': 25}
    async with aiohttp.ClientSession() as session:
        async with session.get('https://httpbin.org/get', params=params) as response:
            print(await response.text())


if __name__ == '__main__':
    asyncio.get_event_loop().run_until_complete(main())
输出-----------------------------------------------------------
{
  "args": {
    "age": "25", 
    "name": "cava"
  }, 
  "headers": {
    "Accept": "*/*", 
    "Accept-Encoding": "gzip, deflate", 
    "Host": "httpbin.org", 
    "User-Agent": "Python/3.10 aiohttp/3.8.3", 
    "X-Amzn-Trace-Id": "Root=1-63d7886a-7d296c625494d21b48e3f115"
  }, 
  "origin": "125.115.41.177", 
  "url": "https://httpbin.org/get?name=cava&age=25"
}
```

### 3. post表单提交

```python
import aiohttp
import asyncio


async def main():
    data = {'name': 'AI悦创', 'age': 25}
    async with aiohttp.ClientSession() as session:
        async with session.post('https://httpbin.org/post', data=data) as response:
            print(await response.text())


if __name__ == '__main__':
    asyncio.get_event_loop().run_until_complete(main())
输出--------------------------------------------------------
{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {
    "age": "25", 
    "name": "AI\u60a6\u521b"
  }, 
  "headers": {
    "Accept": "*/*", 
    "Accept-Encoding": "gzip, deflate", 
    "Content-Length": "32", 
    "Content-Type": "application/x-www-form-urlencoded", 
    "Host": "httpbin.org", 
    "User-Agent": "Python/3.10 aiohttp/3.8.3", 
    "X-Amzn-Trace-Id": "Root=1-63d794f9-61e4458f439775e76bb6152b"
  }, 
  "json": null, 
  "origin": "125.115.41.177", 
  "url": "https://httpbin.org/post"
}
```

### 4. post json数据提交

```python
import aiohttp
import asyncio


async def main():
    data = {'name': 'AI悦创', 'age': 25}
    async with aiohttp.ClientSession() as session:
        async with session.post('https://httpbin.org/post', data=json) as response:
            print(await response.text())


if __name__ == '__main__':
    asyncio.get_event_loop().run_until_complete(main())
输出----------------------------
{
  "args": {}, 
  "data": "{\"name\": \"AI\\u60a6\\u521b\", \"age\": 25}", 
  "files": {}, 
  "form": {}, 
  "headers": {
    "Accept": "*/*", 
    "Accept-Encoding": "gzip, deflate", 
    "Content-Length": "37", 
    "Content-Type": "application/json", 
    "Host": "httpbin.org", 
    "User-Agent": "Python/3.10 aiohttp/3.8.3", 
    "X-Amzn-Trace-Id": "Root=1-63d7c01e-2aa789f94920d6174df5f56a"
  }, 
  "json": {
    "age": 25, 
    "name": "AI\u60a6\u521b"
  }, 
  "origin": "125.115.41.177", 
  "url": "https://httpbin.org/post"
}



```

### 5. 返回 响应字段

 ```python
 
 import aiohttp
 import asyncio
 
 
 async def main():
     data = {'name': 'cava', 'age': 25}
     async with aiohttp.ClientSession() as session:
         async with session.post('https://httpbin.org/post', data=data) as response:
             print('status:', response.status)
             print('headers:', response.headers)
             print('body:', await response.text())
             print('bytes:', await response.read())
             print('json:', await response.json())
 
 
 if __name__ == '__main__':
     asyncio.get_event_loop().run_until_complete(main())
 
 输出---------------------------------------
 status: 200
 headers: <CIMultiDictProxy('Date': 'Mon, 30 Jan 2023 15:18:53 GMT', 'Content-Type': 'application/json', 'Content-Length': '502', 'Connection': 'keep-alive', 'Server': 'gunicorn/19.9.0', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': 'true')>
 body: {
   "args": {}, 
   "data": "", 
   "files": {}, 
   "form": {
     "age": "25", 
     "name": "cava"
   }, 
   "headers": {
     "Accept": "*/*", 
     "Accept-Encoding": "gzip, deflate", 
     "Content-Length": "16", 
     "Content-Type": "application/x-www-form-urlencoded", 
     "Host": "httpbin.org", 
     "User-Agent": "Python/3.10 aiohttp/3.8.3", 
     "X-Amzn-Trace-Id": "Root=1-63d7dfdc-4c4b88882d168ad464444ce2"
   }, 
   "json": null, 
   "origin": "125.115.41.177", 
   "url": "https://httpbin.org/post"
 }
 
 bytes: b'{\n  "args": {}, \n  "data": "", \n  "files": {}, \n  "form": {\n    "age": "25", \n    "name": "cava"\n  }, \n  "headers": {\n    "Accept": "*/*", \n    "Accept-Encoding": "gzip, deflate", \n    "Content-Length": "16", \n    "Content-Type": "application/x-www-form-urlencoded", \n    "Host": "httpbin.org", \n    "User-Agent": "Python/3.10 aiohttp/3.8.3", \n    "X-Amzn-Trace-Id": "Root=1-63d7dfdc-4c4b88882d168ad464444ce2"\n  }, \n  "json": null, \n  "origin": "125.115.41.177", \n  "url": "https://httpbin.org/post"\n}\n'
 json: {'args': {}, 'data': '', 'files': {}, 'form': {'age': '25', 'name': 'cava'}, 'headers': {'Accept': '*/*', 'Accept-Encoding': 'gzip, deflate', 'Content-Length': '16', 'Content-Type': 'application/x-www-form-urlencoded', 'Host': 'httpbin.org', 'User-Agent': 'Python/3.10 aiohttp/3.8.3', 'X-Amzn-Trace-Id': 'Root=1-63d7dfdc-4c4b88882d168ad464444ce2'}, 'json': None, 'origin': '125.115.41.177', 'url': 'https://httpbin.org/post'}
 
 ```

### 6. 超时设置

个人网站augwewe.cn 测试，设定响应时间，若在该时间范围内成功响应则返回200

本网站有时候是2秒或者3秒，不确定

```python
import aiohttp
import asyncio


async def main():
    timeout = aiohttp.ClientTimeout(total=3)
    async with aiohttp.ClientSession(timeout=timeout) as session:
        async with session.get('https://augwewe.cn') as response:
            print('status:', response.status)


if __name__ == '__main__':
    asyncio.get_event_loop().run_until_complete(main())
输出---------------------------------------------------------
status: 200
```

### 7. 控制并发量（Semaphore)

aiottp可以提供工作量非常大的并发，但是网站并不能及时响应，在短时间内以同一个ip过度频繁得爬取目标网站的内容可能导致被网站禁止访问。

aiottpy中的Semphore可以控制并发量

```python
import asyncio
import aiohttp

CONCURRENCY = 5
URL = 'https://www.baidu.com'
semaphore = asyncio.Semaphore(CONCURRENCY)
session = None


async def scrape_api():
    async with semaphore:
        print('scraping', URL)
        async with session.get(URL) as response:
            await asyncio.sleep(1)
            return await response.text()


async def main():
    global session
    session = aiohttp.ClientSession()
    scrape_index_tasks = [asyncio.ensure_future(scrape_api()) for _ in range(10000)]
    await asyncio.gather(*scrape_index_tasks)


if __name__ == '__main__':
    asyncio.get_event_loop().run_until_complete(main())

```

上述代码中CONCURRENCY声明最大的并发量为5，目标网站为baidu。用Semaphore创建信号量对象，以此控制进入爬取最大的协程数量，最大数量即为前面设定的5。

main方法中，声明10000个task,传入到gather方法中。若没有信号量的控制，这些task会同时执行。在有信号量的控制下，同时运行的task 数量会被控制在5个，以此就达到限速的目的。

### 实战

```python
import asyncio
import aiohttp
import logging
import json
from motor.motor_asyncio import AsyncIOMotorClient


logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(levelname)s: %(message)s')
INDEX_URL = 'https://dynamic5.scrape.center/api/book/?limit=18&offset={offset}'
DETAIL_URL = 'https://dynamic5.scrape.center/api/book/{id}'
PAGE_SIZE = 18
PAGE_NUMBER = 100
CONCURRENCY = 5

#声明信号量
semaphore = asyncio.Semaphore(CONCURRENCY)
session = None


async def scrape_api(url):
    async with semaphore:
        try:
            logging.info('scraping %s', url)
            async with session.get(url) as response:
                return await response.json()
        except aiohttp.ClientError:
            logging.error('error occurred while scraping %s', url, exc_info=True)

async def scrape_index(page):
    url = INDEX_URL.format(offset=PAGE_SIZE * (page - 1))
    return await scrape_api(url)
#构造列表url,传给scrape_api方法，其返回数据是json格式

MONGO_CONNECTION_STRING = 'mongodb://localhost:27017'
MONGO_DB_NAME = 'books'
MONGO_COLLECTION_NAME = 'books'
client = AsyncIOMotorClient(MONGO_CONNECTION_STRING)
db = client[MONGO_DB_NAME]
collection = db[MONGO_COLLECTION_NAME]


async def save_data(data):
    logging.info('saving data %s', data)
    if data:
        return await collection.update_one({
            'id': data.get('id')
        }, {
            '$set': data
        }, upsert=True)


async def scrape_detail(id):
    url = DETAIL_URL.format(id=id)
    data = await scrape_api(url)
    await save_data(data)


async def main():
    global session
    session = aiohttp.ClientSession()
    scrape_index_tasks = [asyncio.ensure_future(scrape_index(page)) for page in range(1, PAGE_NUMBER + 1)]
    results = await asyncio.gather(*scrape_index_tasks)
    logging.info('results %s', json.dumps(results, ensure_ascii=False, indent=2))
    ids = []
    for index_data in results:
        if not index_data: continue
        for item in index_data.get('results'):
            ids.append(item.get('id'))
    scrape_detail_tasks = [asyncio.ensure_future(scrape_detail(id)) for id in ids]
    await asyncio.wait(scrape_detail_tasks)
    await session.close()

if __name__ == '__main__':
    asyncio.get_event_loop().run_until_complete(main())


```





















