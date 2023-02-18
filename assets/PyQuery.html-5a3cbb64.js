const t=JSON.parse('{"key":"v-57b3f61e","path":"/Blog/2022/Crawl/foundation/PyQuery.html","title":"PyQuery 解析","lang":"zh-CN","frontmatter":{"title":"PyQuery 解析","date":"2022-10-30T12:04:21.000Z","author":"cava","isOriginal":true,"category":["notebook"],"tag":["爬虫技术","网页源代码解析方式"],"icon":"vue","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"description":"PyQuery 1.1返回li标签 import pyquery,requests,os from pyquery import PyQuery as pq html=\\"\\"\\" &lt;div class=\\"wrap\\"&gt; &lt;div id=\\"container\\"&gt; &lt;ul class=\\"list\\"&gt; &lt;li class=\\"item-0\\"&gt;&lt;span&gt;sss&lt;/span&gt;first item&lt;/li&gt; &lt;li class=\\"item-1\\"&gt;&lt;a href=\\"link2,html\\"&gt;second item&lt;/a&gt;&lt;/li&gt; &lt;li class=\\"item-0 active\\"&gt;&lt;a href=\\"link3.html\\"&gt;&lt;span class=\\"blod\\"&gt;third item&lt;/span&gt;&lt;/a&gt;&lt;/li&gt; &lt;li class=\\"item-1 active\\"&gt;&lt;a href=\\"link4.html\\"&gt;fourth item&lt;/a&gt;&lt;/li&gt; &lt;li class=\\"item-0\\"&gt;&lt;a href=\\"link5.html\\"&gt;fifth item&lt;/a&gt;&lt;/li&gt; &lt;ol&gt;&lt;li class=\\"item-100\\"&gt;&lt;a href=\\"link51.html\\"&gt;100 item&lt;/a&gt;&lt;/li&gt;&lt;/ol&gt; &lt;/ul&gt; &lt;/div&gt; &lt;/div&gt; \\"\\"\\" #1.1返回所有li标签 doc = pq(html) print(doc(\\"li\\")) ------------------------------------------------------------------输出 &lt;li class=\\"item-0\\"&gt;&lt;span&gt;sss&lt;/span&gt;first item&lt;/li&gt; &lt;li class=\\"item-1\\"&gt;&lt;a href=\\"link2,html\\"&gt;second item&lt;/a&gt;&lt;/li&gt; &lt;li class=\\"item-0 active\\"&gt;&lt;a href=\\"link3.html\\"&gt;&lt;span class=\\"blod\\"&gt;third item&lt;/span&gt;&lt;/a&gt;&lt;/li&gt; &lt;li class=\\"item-1 active\\"&gt;&lt;a href=\\"link4.html\\"&gt;fourth item&lt;/a&gt;&lt;/li&gt; &lt;li class=\\"item-0\\"&gt;&lt;a href=\\"link5.html\\"&gt;fifth item&lt;/a&gt;&lt;/li&gt; &lt;li class=\\"item-100\\"&gt;&lt;a href=\\"link51.html\\"&gt;100 item&lt;/a&gt;&lt;/li&gt;","head":[["meta",{"property":"og:url","content":"https://augwewe.cn/Blog/2022/Crawl/foundation/PyQuery.html"}],["meta",{"property":"og:site_name","content":"augwewe"}],["meta",{"property":"og:title","content":"PyQuery 解析"}],["meta",{"property":"og:description","content":"PyQuery 1.1返回li标签 import pyquery,requests,os from pyquery import PyQuery as pq html=\\"\\"\\" &lt;div class=\\"wrap\\"&gt; &lt;div id=\\"container\\"&gt; &lt;ul class=\\"list\\"&gt; &lt;li class=\\"item-0\\"&gt;&lt;span&gt;sss&lt;/span&gt;first item&lt;/li&gt; &lt;li class=\\"item-1\\"&gt;&lt;a href=\\"link2,html\\"&gt;second item&lt;/a&gt;&lt;/li&gt; &lt;li class=\\"item-0 active\\"&gt;&lt;a href=\\"link3.html\\"&gt;&lt;span class=\\"blod\\"&gt;third item&lt;/span&gt;&lt;/a&gt;&lt;/li&gt; &lt;li class=\\"item-1 active\\"&gt;&lt;a href=\\"link4.html\\"&gt;fourth item&lt;/a&gt;&lt;/li&gt; &lt;li class=\\"item-0\\"&gt;&lt;a href=\\"link5.html\\"&gt;fifth item&lt;/a&gt;&lt;/li&gt; &lt;ol&gt;&lt;li class=\\"item-100\\"&gt;&lt;a href=\\"link51.html\\"&gt;100 item&lt;/a&gt;&lt;/li&gt;&lt;/ol&gt; &lt;/ul&gt; &lt;/div&gt; &lt;/div&gt; \\"\\"\\" #1.1返回所有li标签 doc = pq(html) print(doc(\\"li\\")) ------------------------------------------------------------------输出 &lt;li class=\\"item-0\\"&gt;&lt;span&gt;sss&lt;/span&gt;first item&lt;/li&gt; &lt;li class=\\"item-1\\"&gt;&lt;a href=\\"link2,html\\"&gt;second item&lt;/a&gt;&lt;/li&gt; &lt;li class=\\"item-0 active\\"&gt;&lt;a href=\\"link3.html\\"&gt;&lt;span class=\\"blod\\"&gt;third item&lt;/span&gt;&lt;/a&gt;&lt;/li&gt; &lt;li class=\\"item-1 active\\"&gt;&lt;a href=\\"link4.html\\"&gt;fourth item&lt;/a&gt;&lt;/li&gt; &lt;li class=\\"item-0\\"&gt;&lt;a href=\\"link5.html\\"&gt;fifth item&lt;/a&gt;&lt;/li&gt; &lt;li class=\\"item-100\\"&gt;&lt;a href=\\"link51.html\\"&gt;100 item&lt;/a&gt;&lt;/li&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-18T04:42:15.000Z"}],["meta",{"property":"article:author","content":"cava"}],["meta",{"property":"article:tag","content":"爬虫技术"}],["meta",{"property":"article:tag","content":"网页源代码解析方式"}],["meta",{"property":"article:published_time","content":"2022-10-30T12:04:21.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-18T04:42:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PyQuery 解析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-30T12:04:21.000Z\\",\\"dateModified\\":\\"2023-02-18T04:42:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"cava\\"}]}"]]},"headers":[{"level":2,"title":"PyQuery","slug":"pyquery","link":"#pyquery","children":[{"level":3,"title":"1.1返回li标签","slug":"_1-1返回li标签","link":"#_1-1返回li标签","children":[]},{"level":3,"title":"#1.2 返回网页”title\\"","slug":"_1-2-返回网页-title","link":"#_1-2-返回网页-title","children":[]},{"level":3,"title":"#1.3 获取本地html","slug":"_1-3-获取本地html","link":"#_1-3-获取本地html","children":[]},{"level":3,"title":"#1.4选择器,提取li标签/提取文本(text.())/查看输出type","slug":"_1-4选择器-提取li标签-提取文本-text-查看输出type","link":"#_1-4选择器-提取li标签-提取文本-text-查看输出type","children":[]},{"level":3,"title":"#1.5遍历li,并获取其中的文本","slug":"_1-5遍历li-并获取其中的文本","link":"#_1-5遍历li-并获取其中的文本","children":[]},{"level":3,"title":"#获取电影名","slug":"获取电影名","link":"#获取电影名","children":[]},{"level":3,"title":"#1.6 find&children","slug":"_1-6-find-children","link":"#_1-6-find-children","children":[]},{"level":3,"title":"#1.6.1 parent & parents","slug":"_1-6-1-parent-parents","link":"#_1-6-1-parent-parents","children":[]},{"level":3,"title":"#1.6.2 siblings 兄弟节点","slug":"_1-6-2-siblings-兄弟节点","link":"#_1-6-2-siblings-兄弟节点","children":[]},{"level":3,"title":"#1.6.3 items 遍历获取li标签","slug":"_1-6-3-items-遍历获取li标签","link":"#_1-6-3-items-遍历获取li标签","children":[]},{"level":3,"title":"#1.6.4 attr 获取href 首个/遍历获取所有","slug":"_1-6-4-attr-获取href-首个-遍历获取所有","link":"#_1-6-4-attr-获取href-首个-遍历获取所有","children":[]},{"level":3,"title":"#1.6.5获取标签中的纯文字文本 ，html文本；text(),html()","slug":"_1-6-5获取标签中的纯文字文本-html文本-text-html","link":"#_1-6-5获取标签中的纯文字文本-html文本-text-html","children":[]},{"level":3,"title":"#1.6.6 添加/删除节点 remove_class/add_class","slug":"_1-6-6-添加-删除节点-remove-class-add-class","link":"#_1-6-6-添加-删除节点-remove-class-add-class","children":[]},{"level":3,"title":"#1.6.7 attr 添加属性,text()改变节点纯文字内容，html()改变html文本内容","slug":"_1-6-7-attr-添加属性-text-改变节点纯文字内容-html-改变html文本内容","link":"#_1-6-7-attr-添加属性-text-改变节点纯文字内容-html-改变html文本内容","children":[]},{"level":3,"title":"#1.7 remove","slug":"_1-7-remove","link":"#_1-7-remove","children":[]},{"level":3,"title":"#1.8 类选择器","slug":"_1-8-类选择器","link":"#_1-8-类选择器","children":[]}]}],"git":{"createdTime":1676651936000,"updatedTime":1676695335000,"contributors":[{"name":"AndersonHJB","email":"aiyuechuang@gmail.com","commits":1},{"name":"augwewe","email":"1085816416@qq.com","commits":1}]},"readingTime":{"minutes":5.72,"words":1715},"filePathRelative":"Blog/2022/Crawl/foundation/PyQuery.md","localizedDate":"2022年10月30日","excerpt":"<h2> PyQuery</h2>\\n<h3> 1.1返回li标签</h3>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span>  pyquery<span class=\\"token punctuation\\">,</span>requests<span class=\\"token punctuation\\">,</span>os\\n<span class=\\"token keyword\\">from</span> pyquery <span class=\\"token keyword\\">import</span> PyQuery <span class=\\"token keyword\\">as</span> pq\\nhtml<span class=\\"token operator\\">=</span><span class=\\"token triple-quoted-string string\\">\\"\\"\\" \\n&lt;div class=\\"wrap\\"&gt;\\n    &lt;div id=\\"container\\"&gt;\\n        &lt;ul class=\\"list\\"&gt;\\n            &lt;li class=\\"item-0\\"&gt;&lt;span&gt;sss&lt;/span&gt;first item&lt;/li&gt;\\n            &lt;li class=\\"item-1\\"&gt;&lt;a href=\\"link2,html\\"&gt;second item&lt;/a&gt;&lt;/li&gt;\\n            &lt;li class=\\"item-0 active\\"&gt;&lt;a href=\\"link3.html\\"&gt;&lt;span class=\\"blod\\"&gt;third item&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;\\n            &lt;li class=\\"item-1 active\\"&gt;&lt;a href=\\"link4.html\\"&gt;fourth item&lt;/a&gt;&lt;/li&gt;\\n            &lt;li class=\\"item-0\\"&gt;&lt;a href=\\"link5.html\\"&gt;fifth item&lt;/a&gt;&lt;/li&gt;\\n            &lt;ol&gt;&lt;li class=\\"item-100\\"&gt;&lt;a href=\\"link51.html\\"&gt;100 item&lt;/a&gt;&lt;/li&gt;&lt;/ol&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n&lt;/div&gt;\\n\\"\\"\\"</span>\\n<span class=\\"token comment\\">#1.1返回所有li标签</span>\\ndoc <span class=\\"token operator\\">=</span> pq<span class=\\"token punctuation\\">(</span>html<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>doc<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"li\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span><span class=\\"token operator\\">-</span>输出\\n<span class=\\"token operator\\">&lt;</span>li <span class=\\"token keyword\\">class</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"item-0\\"</span><span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">&lt;</span>span<span class=\\"token operator\\">&gt;</span>sss<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>span<span class=\\"token operator\\">&gt;</span>first item<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>li<span class=\\"token operator\\">&gt;</span>\\n            <span class=\\"token operator\\">&lt;</span>li <span class=\\"token keyword\\">class</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"item-1\\"</span><span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">&lt;</span>a href<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"link2,html\\"</span><span class=\\"token operator\\">&gt;</span>second item<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>a<span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>li<span class=\\"token operator\\">&gt;</span>\\n            <span class=\\"token operator\\">&lt;</span>li <span class=\\"token keyword\\">class</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"item-0 active\\"</span><span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">&lt;</span>a href<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"link3.html\\"</span><span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">&lt;</span>span <span class=\\"token keyword\\">class</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"blod\\"</span><span class=\\"token operator\\">&gt;</span>third item<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>span<span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>a<span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>li<span class=\\"token operator\\">&gt;</span>\\n            <span class=\\"token operator\\">&lt;</span>li <span class=\\"token keyword\\">class</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"item-1 active\\"</span><span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">&lt;</span>a href<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"link4.html\\"</span><span class=\\"token operator\\">&gt;</span>fourth item<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>a<span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>li<span class=\\"token operator\\">&gt;</span>\\n            <span class=\\"token operator\\">&lt;</span>li <span class=\\"token keyword\\">class</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"item-0\\"</span><span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">&lt;</span>a href<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"link5.html\\"</span><span class=\\"token operator\\">&gt;</span>fifth item<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>a<span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>li<span class=\\"token operator\\">&gt;</span>\\n            <span class=\\"token operator\\">&lt;</span>li <span class=\\"token keyword\\">class</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"item-100\\"</span><span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">&lt;</span>a href<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"link51.html\\"</span><span class=\\"token operator\\">&gt;</span><span class=\\"token number\\">100</span> item<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>a<span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>li<span class=\\"token operator\\">&gt;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
