<template><div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2022/11/26 12:06</span>
<span class="token comment"># @Author  :augwewe</span>
<span class="token comment"># @FileName: Ask_URL.py</span>
<span class="token comment"># @Software: PyCharm</span>
<span class="token keyword">import</span> json
<span class="token keyword">import</span> re<span class="token punctuation">,</span>requests<span class="token punctuation">,</span>os<span class="token punctuation">,</span>time<span class="token punctuation">,</span>sqlite3
<span class="token keyword">from</span> pprint <span class="token keyword">import</span> pprint

<span class="token keyword">from</span> Parse <span class="token keyword">import</span> Parse
<span class="token keyword">class</span> <span class="token class-name">Maoyan</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>url<span class="token punctuation">,</span>folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>url<span class="token operator">=</span>url
        self<span class="token punctuation">.</span>headers<span class="token operator">=</span><span class="token punctuation">{</span>
            <span class="token string">"User-Agent"</span><span class="token punctuation">:</span><span class="token string">"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"</span>
        <span class="token punctuation">}</span>
        self<span class="token punctuation">.</span>asking_url_list<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>folder_name<span class="token operator">=</span>folder
<span class="token comment">#请求网站</span>
<span class="token comment">#遵守PEP8原则编写规范</span>

<span class="token comment">#1.response.status_code返回状态码，查看网页是否请求成功(200)</span>
<span class="token comment">#2.response.text返回响应的内容以文本形式编码</span>
<span class="token comment">#3.保存前，判断文件是否存在，不存在就要创建文件</span>
<span class="token comment">#解析url</span>
<span class="token comment">#保存;提取offset=后的数字为文件名保存</span>
    <span class="token keyword">def</span> <span class="token function">req_fun</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
        response<span class="token operator">=</span>requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span>headers<span class="token operator">=</span>self<span class="token punctuation">.</span>headers<span class="token punctuation">)</span>
        <span class="token keyword">if</span> response<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
           <span class="token keyword">return</span> response<span class="token punctuation">.</span>text
        <span class="token keyword">return</span> <span class="token boolean">None</span>
<span class="token comment">#print(response.status_code)</span>
<span class="token comment">#查看获取到的url是否请求过</span>
<span class="token comment">#判断1：文件目录下已经保存的，存在的</span>
<span class="token comment">#判断2：过程中正在请求的，请求一个结束后就会保存到目录文件中；动态加载</span>
<span class="token comment">#url的解析器，</span>
    <span class="token keyword">def</span> <span class="token function">url_parse</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>url<span class="token punctuation">:</span><span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        url_lst<span class="token operator">=</span>url<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> url_lst<span class="token punctuation">:</span>
            <span class="token keyword">return</span> url_lst<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token keyword">return</span> <span class="token string">"No Parse Parameter"</span>
    <span class="token keyword">def</span> <span class="token function">have_asked</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>asking<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment">#验证链接是否是已经请求过的的；即判断1</span>
        asked_lst_filename<span class="token operator">=</span><span class="token punctuation">[</span>filename<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token keyword">for</span> filename <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span><span class="token string">"html"</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> asking <span class="token operator">+</span> <span class="token string">".html"</span> <span class="token keyword">in</span> asked_lst_filename <span class="token operator">+</span> self<span class="token punctuation">.</span>asking_url_list<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token comment">#保存前要判断“html"是否存在</span>
    <span class="token keyword">def</span> <span class="token function">folder_exists</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>folder<span class="token punctuation">:</span><span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
            os<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>folder<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span><span class="token comment">#创建文件名</span>
    <span class="token keyword">def</span> <span class="token function">save_html</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>content<span class="token punctuation">,</span>filename<span class="token punctuation">,</span>mkdir_r<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>mkdir_r<span class="token punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token punctuation">{</span>filename<span class="token punctuation">}</span></span><span class="token string">.html"</span></span><span class="token punctuation">,</span><span class="token string">"w"</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content<span class="token punctuation">)</span>
            f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">read_json</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>filename<span class="token punctuation">,</span>read_type<span class="token operator">=</span><span class="token string">"json"</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        conn <span class="token operator">=</span> sqlite3<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">'D:\SQLite\data\cava.db'</span><span class="token punctuation">)</span>
        conn<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token triple-quoted-string string">'''
                            CREATE TABLE MAOYAN2
                            (
                              ID  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                              LINK VARCHAR NOT NULL,
                              IMG VARCHAR NOT NULL,
                              TITLE VARCHAR NOT NULL,
                              SCORE VARCHAR NOT NULL);
                    '''</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"successfully"</span><span class="token punctuation">)</span>
        target_suffix<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">'json'</span><span class="token punctuation">,</span><span class="token string">'txt'</span><span class="token punctuation">,</span><span class="token string">'xls'</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> read_type <span class="token keyword">not</span> <span class="token keyword">in</span> target_suffix<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span><span class="token string">"r"</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            <span class="token keyword">if</span> read_type <span class="token operator">==</span> <span class="token string">'json'</span><span class="token punctuation">:</span>
                data<span class="token operator">=</span>json<span class="token punctuation">.</span>load<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
                <span class="token keyword">for</span> line <span class="token keyword">in</span> data<span class="token punctuation">[</span><span class="token string">"Scrape100"</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                    <span class="token comment"># print(line)</span>
                    <span class="token keyword">for</span> i <span class="token keyword">in</span> line<span class="token punctuation">:</span>
                        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"测试"</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span>
                        sql <span class="token operator">=</span> <span class="token string">"insert into maoyan2(id,link,img,title,score) values (null,'%s','%s','%s','%s')"</span> <span class="token operator">%</span> <span class="token punctuation">(</span>i<span class="token punctuation">[</span><span class="token string">'link'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">[</span><span class="token string">'img'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">[</span><span class="token string">'title'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">[</span><span class="token string">'score'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                        conn<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
                        conn<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">elif</span> read_type <span class="token operator">==</span> <span class="token string">'txt'</span><span class="token punctuation">:</span>
                data<span class="token operator">=</span>f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> data


<span class="token comment">#“引擎”作用</span>
    <span class="token keyword">def</span> <span class="token function">engine</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>folder_exists<span class="token punctuation">(</span>self<span class="token punctuation">.</span>folder_name<span class="token punctuation">)</span>
        asking_filename <span class="token operator">=</span> self<span class="token punctuation">.</span>url_parse<span class="token punctuation">(</span>self<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token comment">#</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>have_asked<span class="token punctuation">(</span>asking_filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment">#执行请求</span>
            <span class="token comment"># print(f'The url is requestsing: {self.url}')</span>
            self<span class="token punctuation">.</span>asking_url_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>self<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
            html<span class="token operator">=</span>self<span class="token punctuation">.</span>req_fun<span class="token punctuation">(</span>self<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
            <span class="token comment">#定义</span>
            self<span class="token punctuation">.</span>save_html<span class="token punctuation">(</span>content<span class="token operator">=</span>html<span class="token punctuation">,</span>filename<span class="token operator">=</span>asking_filename<span class="token punctuation">,</span>mkdir_r<span class="token operator">=</span>self<span class="token punctuation">.</span>folder_name<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"Requests url </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>url<span class="token punctuation">}</span></span><span class="token string">已经请求过了"</span></span><span class="token punctuation">)</span>
        <span class="token comment"># self.parse(self.folder_name)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> maoyan
    folder<span class="token operator">=</span><span class="token string">"html"</span>
    url <span class="token operator">=</span> <span class="token string">"https://ssr1.scrape.center/page/{page}"</span>
    <span class="token comment"># 捕获10个网页到文件”html"中</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1.5</span><span class="token punctuation">)</span>
        maoyan <span class="token operator">=</span> Maoyan<span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>page<span class="token operator">=</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> folder<span class="token operator">=</span><span class="token string">"Index_Html"</span><span class="token punctuation">)</span>
        maoyan<span class="token punctuation">.</span>engine<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">#读取json</span>
    details_link_lst<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    data_json<span class="token operator">=</span>maoyan<span class="token punctuation">.</span>read_json<span class="token punctuation">(</span><span class="token string">"movie.json"</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> details <span class="token keyword">in</span> data_json<span class="token punctuation">[</span><span class="token string">"Scrape100"</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> details<span class="token punctuation">:</span>
            details_url<span class="token operator">=</span>i<span class="token punctuation">[</span><span class="token string">"link"</span><span class="token punctuation">]</span>
            details_link_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>details_url<span class="token punctuation">)</span>
    <span class="token comment"># print("详情链接1~100：",details_link_lst)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> details_link_lst<span class="token punctuation">:</span>
        movie_detail <span class="token operator">=</span> Maoyan<span class="token punctuation">(</span>i<span class="token punctuation">,</span>folder<span class="token operator">=</span><span class="token string">"Detail_Html"</span><span class="token punctuation">)</span>
        movie_detail<span class="token punctuation">.</span>engine<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
   main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2022/11/29 14:41</span>
<span class="token comment"># @Author  :augwewe</span>
<span class="token comment"># @FileName: Parse.py</span>
<span class="token comment"># @Software: PyCharm</span>
<span class="token keyword">import</span> os<span class="token punctuation">,</span> requests<span class="token punctuation">,</span> re<span class="token punctuation">,</span> xlwt<span class="token punctuation">,</span> xlrd<span class="token punctuation">,</span> urllib<span class="token punctuation">.</span>parse<span class="token punctuation">,</span> pprint<span class="token punctuation">,</span> json
<span class="token keyword">from</span> xlutils<span class="token punctuation">.</span>copy <span class="token keyword">import</span> copy
<span class="token keyword">from</span> pprint <span class="token keyword">import</span> pprint


<span class="token comment"># wb = xlwt.Workbook()</span>
<span class="token comment"># sheet1 = wb.add_sheet("sheet1")</span>
<span class="token comment"># head_data = ["电影名称", "电影封面", "上映日期", "评分"]</span>
<span class="token comment"># pos = 0</span>
<span class="token comment"># for i in head_data:</span>
<span class="token comment">#     sheet1.write(0, pos, i)</span>
<span class="token comment">#     pos += 1</span>
<span class="token comment"># wb.save("猫眼Top.xls")</span>

<span class="token keyword">class</span> <span class="token class-name">Parse</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>BASE_URL <span class="token operator">=</span> <span class="token string">"https://ssr1.scrape.center/"</span>


    <span class="token keyword">def</span> <span class="token function">generate_path</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>
        path_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> dirpath<span class="token punctuation">,</span>filename<span class="token punctuation">,</span> filenames <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span>folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> filenames<span class="token punctuation">:</span>
                path <span class="token operator">=</span> dirpath <span class="token operator">+</span> <span class="token string">"/"</span> <span class="token operator">+</span> i  <span class="token comment"># join自动识别平台路径格式，window和Mac</span>
                path_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
            <span class="token keyword">return</span> path_list

    <span class="token keyword">def</span> <span class="token function">read_html</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> path<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            <span class="token keyword">return</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 解析html文件</span>
    <span class="token keyword">def</span> <span class="token function">parse</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># print(content)</span>
        <span class="token comment"># 先替换，方便提取评分数据</span>

        pattern_index <span class="token operator">=</span> <span class="token string">'&lt;div.*?class="el-card.*?&lt;a.*?href="(.*?)"'</span> \
                  <span class="token string">'.*?&lt;img.*?src="(.*?)".*?&lt;/a>'</span> \
                  <span class="token string">'.*?&lt;h2.*?class="m-b-sm">(.*?)\s-.*?&lt;/h2>'</span> \
                  <span class="token string">'.*?&lt;p.*?score.*?>\s+(.*?)&lt;/p>'</span>
        data_lst <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>pattern_index<span class="token punctuation">,</span> content<span class="token punctuation">,</span> re<span class="token punctuation">.</span>S<span class="token punctuation">)</span>
        <span class="token comment"># print(data_lst)  # 存放链接信息的列表，列表元素是元组：电影名称，电影封面，上映日期，评分</span>
        good_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> data_lst<span class="token punctuation">:</span>
            <span class="token keyword">for</span> tup <span class="token keyword">in</span> data_lst<span class="token punctuation">:</span>
                d <span class="token operator">=</span> <span class="token punctuation">{</span>
                    <span class="token string">"link"</span><span class="token punctuation">:</span> urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>urljoin<span class="token punctuation">(</span>self<span class="token punctuation">.</span>BASE_URL<span class="token punctuation">,</span> tup<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token string">"img"</span><span class="token punctuation">:</span> tup<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token string">"title"</span><span class="token punctuation">:</span> tup<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token string">"score"</span><span class="token punctuation">:</span> tup<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
                good_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>d<span class="token punctuation">)</span>
        <span class="token keyword">return</span> good_lst

    <span class="token keyword">def</span> <span class="token function">save_json</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> filename<span class="token punctuation">,</span> content_dict<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename <span class="token operator">+</span> <span class="token string">'.json'</span><span class="token punctuation">,</span> <span class="token string">"w"</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            json<span class="token punctuation">.</span>dump<span class="token punctuation">(</span>content_dict<span class="token punctuation">,</span> f<span class="token punctuation">,</span> ensure_ascii<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>


    <span class="token keyword">def</span> <span class="token function">run_parse</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 进行排序</span>
        JSON_TXT <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"Scrape100"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
        json_filename <span class="token operator">=</span> <span class="token string">"movie"</span>
        path_list<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> k <span class="token keyword">in</span> self<span class="token punctuation">.</span>generate_path<span class="token punctuation">(</span>folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
            path_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token comment">#将所有.html汇总成一个列表，下面会对其进行排序</span>
            <span class="token comment"># print(path_list)</span>
        path_list<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>key<span class="token operator">=</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span><span class="token builtin">int</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">#这样处理1.html到10.html从1.html~10.html排序，如果只用sort，会显示1.html,10.html~9.html</span>
        <span class="token comment"># print(path_list)</span>
        <span class="token keyword">for</span> path <span class="token keyword">in</span> path_list<span class="token punctuation">:</span>
            html_content <span class="token operator">=</span> self<span class="token punctuation">.</span>read_html<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
            <span class="token comment">#print("内容测试",html_content)</span>
            n <span class="token operator">=</span> self<span class="token punctuation">.</span>parse<span class="token punctuation">(</span>html_content<span class="token punctuation">)</span>
            JSON_TXT<span class="token punctuation">[</span><span class="token string">"Scrape100"</span><span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment"># self.save_json(JSON_TXT)</span>
            self<span class="token punctuation">.</span>save_json<span class="token punctuation">(</span>json_filename<span class="token punctuation">,</span>JSON_TXT<span class="token punctuation">)</span>

        <span class="token comment"># pprint(JSON_TXT)</span>
        <span class="token comment"># print("所有页数的列表信息",result_list)</span>
        <span class="token comment"># print(result_list)</span>
        <span class="token comment"># name_lst=[i[0] for i in result_list]#电影名称</span>
        <span class="token comment"># # print(name_lst)</span>
        <span class="token comment"># img_lst=[i[1] for i in result_list]#图片</span>
        <span class="token comment"># time_lst = [i[2] for i in result_list]#上映时间</span>
        <span class="token comment"># score_lst = [i[3] for i in result_list]#评分</span>
        <span class="token comment"># wb2=xlrd.open_workbook("猫眼Top.xls")</span>
        <span class="token comment"># sheet_odd= wb2.sheet_by_index(0)</span>
        <span class="token comment"># xwb=copy(wb2)</span>
        <span class="token comment"># sheet=xwb.get_sheet("sheet1")</span>
        <span class="token comment"># # 2.写入爬取的url解析后的信息</span>
        <span class="token comment"># # print(result_list)</span>
        <span class="token comment"># pos1 = pos2=pos3=pos4= 1</span>
        <span class="token comment"># for i in name_lst:</span>
        <span class="token comment">#     sheet.write(pos1,0,i)</span>
        <span class="token comment">#     pos1+=1</span>
        <span class="token comment"># for i in img_lst:</span>
        <span class="token comment">#     sheet.write(pos2,1,i)</span>
        <span class="token comment">#     pos2+=1</span>
        <span class="token comment"># for i in time_lst:</span>
        <span class="token comment">#     sheet.write(pos3,2,i)</span>
        <span class="token comment">#     pos3+=1</span>
        <span class="token comment"># for i in score_lst:</span>
        <span class="token comment">#     sheet.write(pos4,3,i)</span>
        <span class="token comment">#     pos4+=1</span>
        <span class="token comment"># xwb.save("猫眼.xls")</span>
        <span class="token comment">#</span>
<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    ps <span class="token operator">=</span> Parse<span class="token punctuation">(</span><span class="token punctuation">)</span>
    ps<span class="token punctuation">.</span>run_parse<span class="token punctuation">(</span><span class="token string">"Index_Html"</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token string">'&lt;div.*?id="detail"\s+class="m-t">*\s?.*?&lt;h2.*?class="m-b-sm">(.*?)&lt;/h2>&lt;/a>'</span> \
                        <span class="token comment"># '.*?&lt;button.*?剧情&lt;/span>.*?&lt;button.*?&lt;span>(.*?)&lt;/span>' \</span>
                        <span class="token comment"># '.*?&lt;div.*?63864230.*?&lt;h3.*?&lt;/h3>\s+&lt;p.*?>\s+(.*?)\s+&lt;/p>&lt;/div>' \</span>
                        <span class="token comment"># '.*?&lt;div.*?class="el-row">.*?&lt;p.*?class="name.*?>(.*?)&lt;/p>&lt;/div>' \</span>
                        <span class="token comment"># '.*?tabindex="0">(.*?)&lt;/p>'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


