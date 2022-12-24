---
title: 请求头定义模板
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

### 请求url(包含异常捕获)

```python
def ask_url(url,headers=None,timeout=10,binary=False,debug=False):
    global status,html,redirected_url
    the_headers={
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
    }
    if headers:
        the_headers=headers
    try:
        response=requests.get(url,headers=the_headers,timeout=timeout)
        if response.status_code == 200:
            if binary:
                html=response.content
            else:
                encoding=cchardet.detect(response.content)['encoding']
                html=response.content.decode(encoding)
            status=response.status_code
            redirected_url=response.url

    except(RequestException,ProxyError,SSLError)as e:
        print(e)
        if debug:
            traceback.print_exc()
        msg='Failed downled:{}'.format(url)
        print(msg)
        if binary:
            html=b''
        else:
            html=''
        status=0
    return status,html,redirected_url

if __name__ == '__main__':
    url="https://ssr1.scrape.center/"
    html=ask_url(url=url,debug=True)
    print(html)
```







