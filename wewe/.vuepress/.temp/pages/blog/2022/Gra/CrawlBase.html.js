export const data = JSON.parse("{\"key\":\"v-0f8f5bb7\",\"path\":\"/Blog/2022/Gra/CrawlBase.html\",\"title\":\"爬虫数据获取至SQLite\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"爬虫数据获取至SQLite\",\"date\":\"2023-01-01T12:04:21.000Z\",\"author\":\"cava\",\"isOriginal\":true,\"category\":[\"notebook\"],\"tag\":[\"爬虫技术\"],\"icon\":\"vue\",\"sticky\":false,\"star\":false,\"article\":true,\"timeline\":true,\"image\":false,\"navbar\":true,\"sidebarIcon\":true,\"headerDepth\":5,\"comment\":true,\"lastUpdated\":true,\"editLink\":false,\"backToTop\":true,\"toc\":true,\"description\":\"数据存储至SQLite中 1.连接数据库 2.读取json文件 3.不知如何将数据形式为列表的存入sqlite中，例如电影剧情分类有武侠，剧情，人物。 def read_json(self,filename,read_type=\\\"json\\\"): conn = sqlite3.connect('D:\\\\SQLite\\\\data\\\\cava.db') conn.execute(''' CREATE TABLE MOVIE_DETAIL ( Id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, Title VARCHAR NOT NULL, Introduction VARCHAR NOT NULL, Director VARCHAR NOT NULL, Actor VARCHAR NOT NULL); ''') print(\\\"successfully\\\") target_suffix=['json','txt','xls'] if read_type not in target_suffix: return None with open(filename,\\\"r\\\",encoding=\\\"utf-8\\\") as f: if read_type == 'json': data=json.load(f) for line in data[\\\"Scrape_detail\\\"]: for i in line: sql = \\\"insert into movie_detail(id,title,introduction,director,actor) values (null,'%s','%s','%s','%s')\\\" % (i['title'],i['introduction'], i['director'], i['actor']) conn.execute(sql) conn.commit() elif read_type == 'txt': data=f.read() return data\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://augwewe.cn/Blog/2022/Gra/CrawlBase.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"augwewe\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"爬虫数据获取至SQLite\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"数据存储至SQLite中 1.连接数据库 2.读取json文件 3.不知如何将数据形式为列表的存入sqlite中，例如电影剧情分类有武侠，剧情，人物。 def read_json(self,filename,read_type=\\\"json\\\"): conn = sqlite3.connect('D:\\\\SQLite\\\\data\\\\cava.db') conn.execute(''' CREATE TABLE MOVIE_DETAIL ( Id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, Title VARCHAR NOT NULL, Introduction VARCHAR NOT NULL, Director VARCHAR NOT NULL, Actor VARCHAR NOT NULL); ''') print(\\\"successfully\\\") target_suffix=['json','txt','xls'] if read_type not in target_suffix: return None with open(filename,\\\"r\\\",encoding=\\\"utf-8\\\") as f: if read_type == 'json': data=json.load(f) for line in data[\\\"Scrape_detail\\\"]: for i in line: sql = \\\"insert into movie_detail(id,title,introduction,director,actor) values (null,'%s','%s','%s','%s')\\\" % (i['title'],i['introduction'], i['director'], i['actor']) conn.execute(sql) conn.commit() elif read_type == 'txt': data=f.read() return data\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"cava\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"爬虫技术\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-01-01T12:04:21.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"爬虫数据获取至SQLite\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-01-01T12:04:21.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"cava\\\"}]}\"]]},\"headers\":[{\"level\":3,\"title\":\"数据存储至SQLite中\",\"slug\":\"数据存储至sqlite中\",\"link\":\"#数据存储至sqlite中\",\"children\":[]}],\"readingTime\":{\"minutes\":0.73,\"words\":218},\"filePathRelative\":\"Blog/2022/Gra/CrawlBase.md\",\"localizedDate\":\"2023年1月1日\",\"excerpt\":\"<h3> 数据存储至SQLite中</h3>\\n<p>1.连接数据库</p>\\n<p>2.读取json文件</p>\\n<p>3.不知如何将数据形式为列表的存入sqlite中，例如电影剧情分类有武侠，剧情，人物。</p>\\n<div class=\\\"language-python line-numbers-mode\\\" data-ext=\\\"py\\\"><pre class=\\\"language-python\\\"><code>    <span class=\\\"token keyword\\\">def</span> <span class=\\\"token function\\\">read_json</span><span class=\\\"token punctuation\\\">(</span>self<span class=\\\"token punctuation\\\">,</span>filename<span class=\\\"token punctuation\\\">,</span>read_type<span class=\\\"token operator\\\">=</span><span class=\\\"token string\\\">\\\"json\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">:</span>\\n        conn <span class=\\\"token operator\\\">=</span> sqlite3<span class=\\\"token punctuation\\\">.</span>connect<span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'D:\\\\SQLite\\\\data\\\\cava.db'</span><span class=\\\"token punctuation\\\">)</span>\\n        conn<span class=\\\"token punctuation\\\">.</span>execute<span class=\\\"token punctuation\\\">(</span><span class=\\\"token triple-quoted-string string\\\">'''\\n                            CREATE TABLE MOVIE_DETAIL\\n                            (\\n                              Id  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\\n                              Title  VARCHAR NOT NULL,\\n                              Introduction VARCHAR NOT NULL,\\n                              Director VARCHAR NOT NULL,\\n                              Actor VARCHAR NOT NULL);    \\n                    '''</span><span class=\\\"token punctuation\\\">)</span>\\n        <span class=\\\"token keyword\\\">print</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"successfully\\\"</span><span class=\\\"token punctuation\\\">)</span>\\n        target_suffix<span class=\\\"token operator\\\">=</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">'json'</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token string\\\">'txt'</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token string\\\">'xls'</span><span class=\\\"token punctuation\\\">]</span>\\n        <span class=\\\"token keyword\\\">if</span> read_type <span class=\\\"token keyword\\\">not</span> <span class=\\\"token keyword\\\">in</span> target_suffix<span class=\\\"token punctuation\\\">:</span>\\n            <span class=\\\"token keyword\\\">return</span> <span class=\\\"token boolean\\\">None</span>\\n        <span class=\\\"token keyword\\\">with</span> <span class=\\\"token builtin\\\">open</span><span class=\\\"token punctuation\\\">(</span>filename<span class=\\\"token punctuation\\\">,</span><span class=\\\"token string\\\">\\\"r\\\"</span><span class=\\\"token punctuation\\\">,</span>encoding<span class=\\\"token operator\\\">=</span><span class=\\\"token string\\\">\\\"utf-8\\\"</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token keyword\\\">as</span> f<span class=\\\"token punctuation\\\">:</span>\\n            <span class=\\\"token keyword\\\">if</span> read_type <span class=\\\"token operator\\\">==</span> <span class=\\\"token string\\\">'json'</span><span class=\\\"token punctuation\\\">:</span>\\n                data<span class=\\\"token operator\\\">=</span>json<span class=\\\"token punctuation\\\">.</span>load<span class=\\\"token punctuation\\\">(</span>f<span class=\\\"token punctuation\\\">)</span>\\n                <span class=\\\"token keyword\\\">for</span> line <span class=\\\"token keyword\\\">in</span> data<span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"Scrape_detail\\\"</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">:</span>\\n                    <span class=\\\"token keyword\\\">for</span> i <span class=\\\"token keyword\\\">in</span> line<span class=\\\"token punctuation\\\">:</span>\\n                        sql <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">\\\"insert into movie_detail(id,title,introduction,director,actor) values (null,'%s','%s','%s','%s')\\\"</span> <span class=\\\"token operator\\\">%</span> <span class=\\\"token punctuation\\\">(</span>i<span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">'title'</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">,</span>i<span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">'introduction'</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">,</span> i<span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">'director'</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">,</span> i<span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">'actor'</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">)</span>\\n                        conn<span class=\\\"token punctuation\\\">.</span>execute<span class=\\\"token punctuation\\\">(</span>sql<span class=\\\"token punctuation\\\">)</span>\\n                        conn<span class=\\\"token punctuation\\\">.</span>commit<span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span>\\n            <span class=\\\"token keyword\\\">elif</span> read_type <span class=\\\"token operator\\\">==</span> <span class=\\\"token string\\\">'txt'</span><span class=\\\"token punctuation\\\">:</span>\\n                data<span class=\\\"token operator\\\">=</span>f<span class=\\\"token punctuation\\\">.</span>read<span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span>\\n        <span class=\\\"token keyword\\\">return</span> data\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

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
