export const data = JSON.parse("{\"key\":\"v-8681ccf8\",\"path\":\"/Blog/2022/Gra/Try_Exception.html\",\"title\":\"异常捕获Try..exception\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"异常捕获Try..exception\",\"date\":\"2022-10-30T12:04:21.000Z\",\"author\":\"cava\",\"isOriginal\":true,\"category\":[\"notebook\"],\"tag\":[\"python\"],\"icon\":\"vue\",\"sticky\":false,\"star\":false,\"article\":true,\"timeline\":true,\"image\":false,\"navbar\":true,\"sidebarIcon\":true,\"headerDepth\":5,\"comment\":true,\"lastUpdated\":true,\"editLink\":false,\"backToTop\":true,\"toc\":true,\"description\":\"异常捕获 try........exception 1.一个try一个except ,except中可以捕获多种异常类型，try子句中若遇到执行有错误的语句1号，其余下的语句都将被忽略，捕获1号语句中的异常 2.异常类型可以放在一个元组中 3.非系统型异常可以用Except统一捕获 4.finally中的语句表示，无论如何都是会被执行的 while True: try: the_num=input(\\\"please enter here:\\\") num1=int(the_num.split(\\\",\\\")[0].strip()) num2=int(the_num.split(\\\",\\\")[1].strip()) the_result=num1+num2 print(the_result) test = {[1, 2]: \\\"haha\\\"} break #写法1 # except ValueError as err: # print(\\\"Value Err is {}\\\".format(err)) # except TypeError as err: # print(\\\"Type Err is {}\\\".format(err)) #写法2 except(ValueError,TypeError) as err: print(\\\"The Err is {}\\\".format(err)) # finally: # print(\\\"这里是无论是否异常，都将执行的内容\\\") print(\\\"continue\\\") ------------------------------------ #输出 please enter here:1 , 2 3 The Err is unhashable type: 'list' please enter here: ------------------------------------- please enter here: 1 , ss The Err is invalid literal for int() with base 10: 'ss' please enter here: #因为TypeError的try子句顺序在ValueError之后，当ValueError执行捕获异常时，TypeError就不会被执行\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://augwewe.cn/Blog/2022/Gra/Try_Exception.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"augwewe\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"异常捕获Try..exception\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"异常捕获 try........exception 1.一个try一个except ,except中可以捕获多种异常类型，try子句中若遇到执行有错误的语句1号，其余下的语句都将被忽略，捕获1号语句中的异常 2.异常类型可以放在一个元组中 3.非系统型异常可以用Except统一捕获 4.finally中的语句表示，无论如何都是会被执行的 while True: try: the_num=input(\\\"please enter here:\\\") num1=int(the_num.split(\\\",\\\")[0].strip()) num2=int(the_num.split(\\\",\\\")[1].strip()) the_result=num1+num2 print(the_result) test = {[1, 2]: \\\"haha\\\"} break #写法1 # except ValueError as err: # print(\\\"Value Err is {}\\\".format(err)) # except TypeError as err: # print(\\\"Type Err is {}\\\".format(err)) #写法2 except(ValueError,TypeError) as err: print(\\\"The Err is {}\\\".format(err)) # finally: # print(\\\"这里是无论是否异常，都将执行的内容\\\") print(\\\"continue\\\") ------------------------------------ #输出 please enter here:1 , 2 3 The Err is unhashable type: 'list' please enter here: ------------------------------------- please enter here: 1 , ss The Err is invalid literal for int() with base 10: 'ss' please enter here: #因为TypeError的try子句顺序在ValueError之后，当ValueError执行捕获异常时，TypeError就不会被执行\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"cava\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"python\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-10-30T12:04:21.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"异常捕获Try..exception\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-10-30T12:04:21.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"cava\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"异常捕获\",\"slug\":\"异常捕获\",\"link\":\"#异常捕获\",\"children\":[{\"level\":3,\"title\":\"try........exception\",\"slug\":\"try-exception\",\"link\":\"#try-exception\",\"children\":[]}]}],\"readingTime\":{\"minutes\":1.04,\"words\":312},\"filePathRelative\":\"Blog/2022/Gra/Try_Exception.md\",\"localizedDate\":\"2022年10月30日\",\"excerpt\":\"<h2> 异常捕获</h2>\\n<h3> try........exception</h3>\\n<p>1.一个try一个except ,except中可以捕获多种异常类型，try子句中若遇到执行有错误的语句1号，其余下的语句都将被忽略，捕获1号语句中的异常</p>\\n<p>2.异常类型可以放在一个元组中</p>\\n<p>3.非系统型异常可以用Except统一捕获</p>\\n<p>4.finally中的语句表示，无论如何都是会被执行的</p>\\n<div class=\\\"language-python line-numbers-mode\\\" data-ext=\\\"py\\\"><pre class=\\\"language-python\\\"><code><span class=\\\"token keyword\\\">while</span> <span class=\\\"token boolean\\\">True</span><span class=\\\"token punctuation\\\">:</span>\\n    <span class=\\\"token keyword\\\">try</span><span class=\\\"token punctuation\\\">:</span>\\n        the_num<span class=\\\"token operator\\\">=</span><span class=\\\"token builtin\\\">input</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"please enter here:\\\"</span><span class=\\\"token punctuation\\\">)</span>\\n        num1<span class=\\\"token operator\\\">=</span><span class=\\\"token builtin\\\">int</span><span class=\\\"token punctuation\\\">(</span>the_num<span class=\\\"token punctuation\\\">.</span>split<span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\",\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token number\\\">0</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">.</span>strip<span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span>\\n        num2<span class=\\\"token operator\\\">=</span><span class=\\\"token builtin\\\">int</span><span class=\\\"token punctuation\\\">(</span>the_num<span class=\\\"token punctuation\\\">.</span>split<span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\",\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token number\\\">1</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">.</span>strip<span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span>\\n        the_result<span class=\\\"token operator\\\">=</span>num1<span class=\\\"token operator\\\">+</span>num2\\n        <span class=\\\"token keyword\\\">print</span><span class=\\\"token punctuation\\\">(</span>the_result<span class=\\\"token punctuation\\\">)</span>\\n        test <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token number\\\">1</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token number\\\">2</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">:</span> <span class=\\\"token string\\\">\\\"haha\\\"</span><span class=\\\"token punctuation\\\">}</span>\\n        <span class=\\\"token keyword\\\">break</span>\\n    <span class=\\\"token comment\\\">#写法1</span>\\n    <span class=\\\"token comment\\\"># except ValueError as err:</span>\\n    <span class=\\\"token comment\\\">#     print(\\\"Value Err is {}\\\".format(err))</span>\\n    <span class=\\\"token comment\\\"># except TypeError as err:</span>\\n    <span class=\\\"token comment\\\">#     print(\\\"Type Err is {}\\\".format(err))</span>\\n    <span class=\\\"token comment\\\">#写法2</span>\\n    <span class=\\\"token keyword\\\">except</span><span class=\\\"token punctuation\\\">(</span>ValueError<span class=\\\"token punctuation\\\">,</span>TypeError<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token keyword\\\">as</span> err<span class=\\\"token punctuation\\\">:</span>\\n        <span class=\\\"token keyword\\\">print</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"The Err is {}\\\"</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token builtin\\\">format</span><span class=\\\"token punctuation\\\">(</span>err<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span>\\n    <span class=\\\"token comment\\\"># finally:</span>\\n    <span class=\\\"token comment\\\">#     print(\\\"这里是无论是否异常，都将执行的内容\\\")</span>\\n<span class=\\\"token keyword\\\">print</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"continue\\\"</span><span class=\\\"token punctuation\\\">)</span>\\n<span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span>\\n<span class=\\\"token comment\\\">#输出</span>\\nplease enter here<span class=\\\"token punctuation\\\">:</span><span class=\\\"token number\\\">1</span> <span class=\\\"token punctuation\\\">,</span> <span class=\\\"token number\\\">2</span>\\n<span class=\\\"token number\\\">3</span>\\nThe Err <span class=\\\"token keyword\\\">is</span> unhashable <span class=\\\"token builtin\\\">type</span><span class=\\\"token punctuation\\\">:</span> <span class=\\\"token string\\\">'list'</span>\\nplease enter here<span class=\\\"token punctuation\\\">:</span>\\n<span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span><span class=\\\"token operator\\\">-</span>\\nplease enter here<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token number\\\">1</span> <span class=\\\"token punctuation\\\">,</span> ss\\nThe Err <span class=\\\"token keyword\\\">is</span> invalid literal <span class=\\\"token keyword\\\">for</span> <span class=\\\"token builtin\\\">int</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token keyword\\\">with</span> base <span class=\\\"token number\\\">10</span><span class=\\\"token punctuation\\\">:</span> <span class=\\\"token string\\\">'ss'</span>\\nplease enter here<span class=\\\"token punctuation\\\">:</span>\\n<span class=\\\"token comment\\\">#因为TypeError的try子句顺序在ValueError之后，当ValueError执行捕获异常时，TypeError就不会被执行</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
