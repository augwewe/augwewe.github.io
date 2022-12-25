import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.f4473e66.js";const p={},e=t(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
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
            <span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36&quot;</span>
        <span class="token punctuation">}</span>
        self<span class="token punctuation">.</span>asking_url_list<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>folder_name<span class="token operator">=</span>folder
<span class="token comment">#\u8BF7\u6C42\u7F51\u7AD9</span>
<span class="token comment">#\u9075\u5B88PEP8\u539F\u5219\u7F16\u5199\u89C4\u8303</span>

<span class="token comment">#1.response.status_code\u8FD4\u56DE\u72B6\u6001\u7801\uFF0C\u67E5\u770B\u7F51\u9875\u662F\u5426\u8BF7\u6C42\u6210\u529F(200)</span>
<span class="token comment">#2.response.text\u8FD4\u56DE\u54CD\u5E94\u7684\u5185\u5BB9\u4EE5\u6587\u672C\u5F62\u5F0F\u7F16\u7801</span>
<span class="token comment">#3.\u4FDD\u5B58\u524D\uFF0C\u5224\u65AD\u6587\u4EF6\u662F\u5426\u5B58\u5728\uFF0C\u4E0D\u5B58\u5728\u5C31\u8981\u521B\u5EFA\u6587\u4EF6</span>
<span class="token comment">#\u89E3\u6790url</span>
<span class="token comment">#\u4FDD\u5B58;\u63D0\u53D6offset=\u540E\u7684\u6570\u5B57\u4E3A\u6587\u4EF6\u540D\u4FDD\u5B58</span>
    <span class="token keyword">def</span> <span class="token function">req_fun</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
        response<span class="token operator">=</span>requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span>headers<span class="token operator">=</span>self<span class="token punctuation">.</span>headers<span class="token punctuation">)</span>
        <span class="token keyword">if</span> response<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
           <span class="token keyword">return</span> response<span class="token punctuation">.</span>text
        <span class="token keyword">return</span> <span class="token boolean">None</span>
<span class="token comment">#print(response.status_code)</span>
<span class="token comment">#\u67E5\u770B\u83B7\u53D6\u5230\u7684url\u662F\u5426\u8BF7\u6C42\u8FC7</span>
<span class="token comment">#\u5224\u65AD1\uFF1A\u6587\u4EF6\u76EE\u5F55\u4E0B\u5DF2\u7ECF\u4FDD\u5B58\u7684\uFF0C\u5B58\u5728\u7684</span>
<span class="token comment">#\u5224\u65AD2\uFF1A\u8FC7\u7A0B\u4E2D\u6B63\u5728\u8BF7\u6C42\u7684\uFF0C\u8BF7\u6C42\u4E00\u4E2A\u7ED3\u675F\u540E\u5C31\u4F1A\u4FDD\u5B58\u5230\u76EE\u5F55\u6587\u4EF6\u4E2D\uFF1B\u52A8\u6001\u52A0\u8F7D</span>
<span class="token comment">#url\u7684\u89E3\u6790\u5668\uFF0C</span>
    <span class="token keyword">def</span> <span class="token function">url_parse</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>url<span class="token punctuation">:</span><span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        url_lst<span class="token operator">=</span>url<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> url_lst<span class="token punctuation">:</span>
            <span class="token keyword">return</span> url_lst<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token keyword">return</span> <span class="token string">&quot;No Parse Parameter&quot;</span>
    <span class="token keyword">def</span> <span class="token function">have_asked</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>asking<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment">#\u9A8C\u8BC1\u94FE\u63A5\u662F\u5426\u662F\u5DF2\u7ECF\u8BF7\u6C42\u8FC7\u7684\u7684\uFF1B\u5373\u5224\u65AD1</span>
        asked_lst_filename<span class="token operator">=</span><span class="token punctuation">[</span>filename<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token keyword">for</span> filename <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span><span class="token string">&quot;html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> asking <span class="token operator">+</span> <span class="token string">&quot;.html&quot;</span> <span class="token keyword">in</span> asked_lst_filename <span class="token operator">+</span> self<span class="token punctuation">.</span>asking_url_list<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token comment">#\u4FDD\u5B58\u524D\u8981\u5224\u65AD\u201Chtml&quot;\u662F\u5426\u5B58\u5728</span>
    <span class="token keyword">def</span> <span class="token function">folder_exists</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>folder<span class="token punctuation">:</span><span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
            os<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>folder<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token comment">#\u521B\u5EFA\u6587\u4EF6\u540D</span>
    <span class="token keyword">def</span> <span class="token function">save_html</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>content<span class="token punctuation">,</span>filename<span class="token punctuation">,</span>mkdir_r<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>mkdir_r<span class="token punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token punctuation">{</span>filename<span class="token punctuation">}</span></span><span class="token string">.html&quot;</span></span><span class="token punctuation">,</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content<span class="token punctuation">)</span>
            f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">read_json</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>filename<span class="token punctuation">,</span>read_type<span class="token operator">=</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        conn <span class="token operator">=</span> sqlite3<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&#39;D:\\SQLite\\data\\cava.db&#39;</span><span class="token punctuation">)</span>
        conn<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token triple-quoted-string string">&#39;&#39;&#39;
                            CREATE TABLE MAOYAN2
                            (
                              ID  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                              LINK VARCHAR NOT NULL,
                              IMG VARCHAR NOT NULL,
                              TITLE VARCHAR NOT NULL,
                              SCORE VARCHAR NOT NULL);
                    &#39;&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;successfully&quot;</span><span class="token punctuation">)</span>
        target_suffix<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;txt&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;xls&#39;</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> read_type <span class="token keyword">not</span> <span class="token keyword">in</span> target_suffix<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            <span class="token keyword">if</span> read_type <span class="token operator">==</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">:</span>
                data<span class="token operator">=</span>json<span class="token punctuation">.</span>load<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
                <span class="token keyword">for</span> line <span class="token keyword">in</span> data<span class="token punctuation">[</span><span class="token string">&quot;Scrape100&quot;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                    <span class="token comment"># print(line)</span>
                    <span class="token keyword">for</span> i <span class="token keyword">in</span> line<span class="token punctuation">:</span>
                        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D4B\u8BD5&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span>
                        sql <span class="token operator">=</span> <span class="token string">&quot;insert into maoyan2(id,link,img,title,score) values (null,&#39;%s&#39;,&#39;%s&#39;,&#39;%s&#39;,&#39;%s&#39;)&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>i<span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">[</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">[</span><span class="token string">&#39;score&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                        conn<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
                        conn<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">elif</span> read_type <span class="token operator">==</span> <span class="token string">&#39;txt&#39;</span><span class="token punctuation">:</span>
                data<span class="token operator">=</span>f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> data


<span class="token comment">#\u201C\u5F15\u64CE\u201D\u4F5C\u7528</span>
    <span class="token keyword">def</span> <span class="token function">engine</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>folder_exists<span class="token punctuation">(</span>self<span class="token punctuation">.</span>folder_name<span class="token punctuation">)</span>
        asking_filename <span class="token operator">=</span> self<span class="token punctuation">.</span>url_parse<span class="token punctuation">(</span>self<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token comment">#</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>have_asked<span class="token punctuation">(</span>asking_filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment">#\u6267\u884C\u8BF7\u6C42</span>
            <span class="token comment"># print(f&#39;The url is requestsing: {self.url}&#39;)</span>
            self<span class="token punctuation">.</span>asking_url_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>self<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
            html<span class="token operator">=</span>self<span class="token punctuation">.</span>req_fun<span class="token punctuation">(</span>self<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
            <span class="token comment">#\u5B9A\u4E49</span>
            self<span class="token punctuation">.</span>save_html<span class="token punctuation">(</span>content<span class="token operator">=</span>html<span class="token punctuation">,</span>filename<span class="token operator">=</span>asking_filename<span class="token punctuation">,</span>mkdir_r<span class="token operator">=</span>self<span class="token punctuation">.</span>folder_name<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Requests url </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>url<span class="token punctuation">}</span></span><span class="token string">\u5DF2\u7ECF\u8BF7\u6C42\u8FC7\u4E86&quot;</span></span><span class="token punctuation">)</span>
        <span class="token comment"># self.parse(self.folder_name)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> maoyan
    folder<span class="token operator">=</span><span class="token string">&quot;html&quot;</span>
    url <span class="token operator">=</span> <span class="token string">&quot;https://ssr1.scrape.center/page/{page}&quot;</span>
    <span class="token comment"># \u6355\u83B710\u4E2A\u7F51\u9875\u5230\u6587\u4EF6\u201Dhtml&quot;\u4E2D</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1.5</span><span class="token punctuation">)</span>
        maoyan <span class="token operator">=</span> Maoyan<span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>page<span class="token operator">=</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> folder<span class="token operator">=</span><span class="token string">&quot;Index_Html&quot;</span><span class="token punctuation">)</span>
        maoyan<span class="token punctuation">.</span>engine<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">#\u8BFB\u53D6json</span>
    details_link_lst<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    data_json<span class="token operator">=</span>maoyan<span class="token punctuation">.</span>read_json<span class="token punctuation">(</span><span class="token string">&quot;movie.json&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> details <span class="token keyword">in</span> data_json<span class="token punctuation">[</span><span class="token string">&quot;Scrape100&quot;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> details<span class="token punctuation">:</span>
            details_url<span class="token operator">=</span>i<span class="token punctuation">[</span><span class="token string">&quot;link&quot;</span><span class="token punctuation">]</span>
            details_link_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>details_url<span class="token punctuation">)</span>
    <span class="token comment"># print(&quot;\u8BE6\u60C5\u94FE\u63A51~100\uFF1A&quot;,details_link_lst)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> details_link_lst<span class="token punctuation">:</span>
        movie_detail <span class="token operator">=</span> Maoyan<span class="token punctuation">(</span>i<span class="token punctuation">,</span>folder<span class="token operator">=</span><span class="token string">&quot;Detail_Html&quot;</span><span class="token punctuation">)</span>
        movie_detail<span class="token punctuation">.</span>engine<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
   main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2022/11/29 14:41</span>
<span class="token comment"># @Author  :augwewe</span>
<span class="token comment"># @FileName: Parse.py</span>
<span class="token comment"># @Software: PyCharm</span>
<span class="token keyword">import</span> os<span class="token punctuation">,</span> requests<span class="token punctuation">,</span> re<span class="token punctuation">,</span> xlwt<span class="token punctuation">,</span> xlrd<span class="token punctuation">,</span> urllib<span class="token punctuation">.</span>parse<span class="token punctuation">,</span> pprint<span class="token punctuation">,</span> json
<span class="token keyword">from</span> xlutils<span class="token punctuation">.</span>copy <span class="token keyword">import</span> copy
<span class="token keyword">from</span> pprint <span class="token keyword">import</span> pprint


<span class="token comment"># wb = xlwt.Workbook()</span>
<span class="token comment"># sheet1 = wb.add_sheet(&quot;sheet1&quot;)</span>
<span class="token comment"># head_data = [&quot;\u7535\u5F71\u540D\u79F0&quot;, &quot;\u7535\u5F71\u5C01\u9762&quot;, &quot;\u4E0A\u6620\u65E5\u671F&quot;, &quot;\u8BC4\u5206&quot;]</span>
<span class="token comment"># pos = 0</span>
<span class="token comment"># for i in head_data:</span>
<span class="token comment">#     sheet1.write(0, pos, i)</span>
<span class="token comment">#     pos += 1</span>
<span class="token comment"># wb.save(&quot;\u732B\u773CTop.xls&quot;)</span>

<span class="token keyword">class</span> <span class="token class-name">Parse</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>BASE_URL <span class="token operator">=</span> <span class="token string">&quot;https://ssr1.scrape.center/&quot;</span>


    <span class="token keyword">def</span> <span class="token function">generate_path</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>
        path_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> dirpath<span class="token punctuation">,</span>filename<span class="token punctuation">,</span> filenames <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span>folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> filenames<span class="token punctuation">:</span>
                path <span class="token operator">=</span> dirpath <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> i  <span class="token comment"># join\u81EA\u52A8\u8BC6\u522B\u5E73\u53F0\u8DEF\u5F84\u683C\u5F0F\uFF0Cwindow\u548CMac</span>
                path_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
            <span class="token keyword">return</span> path_list

    <span class="token keyword">def</span> <span class="token function">read_html</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> path<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            <span class="token keyword">return</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># \u89E3\u6790html\u6587\u4EF6</span>
    <span class="token keyword">def</span> <span class="token function">parse</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># print(content)</span>
        <span class="token comment"># \u5148\u66FF\u6362\uFF0C\u65B9\u4FBF\u63D0\u53D6\u8BC4\u5206\u6570\u636E</span>

        pattern_index <span class="token operator">=</span> <span class="token string">&#39;&lt;div.*?class=&quot;el-card.*?&lt;a.*?href=&quot;(.*?)&quot;&#39;</span> \\
                  <span class="token string">&#39;.*?&lt;img.*?src=&quot;(.*?)&quot;.*?&lt;/a&gt;&#39;</span> \\
                  <span class="token string">&#39;.*?&lt;h2.*?class=&quot;m-b-sm&quot;&gt;(.*?)\\s-.*?&lt;/h2&gt;&#39;</span> \\
                  <span class="token string">&#39;.*?&lt;p.*?score.*?&gt;\\s+(.*?)&lt;/p&gt;&#39;</span>
        data_lst <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>pattern_index<span class="token punctuation">,</span> content<span class="token punctuation">,</span> re<span class="token punctuation">.</span>S<span class="token punctuation">)</span>
        <span class="token comment"># print(data_lst)  # \u5B58\u653E\u94FE\u63A5\u4FE1\u606F\u7684\u5217\u8868\uFF0C\u5217\u8868\u5143\u7D20\u662F\u5143\u7EC4\uFF1A\u7535\u5F71\u540D\u79F0\uFF0C\u7535\u5F71\u5C01\u9762\uFF0C\u4E0A\u6620\u65E5\u671F\uFF0C\u8BC4\u5206</span>
        good_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> data_lst<span class="token punctuation">:</span>
            <span class="token keyword">for</span> tup <span class="token keyword">in</span> data_lst<span class="token punctuation">:</span>
                d <span class="token operator">=</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;link&quot;</span><span class="token punctuation">:</span> urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>urljoin<span class="token punctuation">(</span>self<span class="token punctuation">.</span>BASE_URL<span class="token punctuation">,</span> tup<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;img&quot;</span><span class="token punctuation">:</span> tup<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span> tup<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;score&quot;</span><span class="token punctuation">:</span> tup<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
                good_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>d<span class="token punctuation">)</span>
        <span class="token keyword">return</span> good_lst

    <span class="token keyword">def</span> <span class="token function">save_json</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> filename<span class="token punctuation">,</span> content_dict<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename <span class="token operator">+</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            json<span class="token punctuation">.</span>dump<span class="token punctuation">(</span>content_dict<span class="token punctuation">,</span> f<span class="token punctuation">,</span> ensure_ascii<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>


    <span class="token keyword">def</span> <span class="token function">run_parse</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># \u8FDB\u884C\u6392\u5E8F</span>
        JSON_TXT <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;Scrape100&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
        json_filename <span class="token operator">=</span> <span class="token string">&quot;movie&quot;</span>
        path_list<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> k <span class="token keyword">in</span> self<span class="token punctuation">.</span>generate_path<span class="token punctuation">(</span>folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
            path_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token comment">#\u5C06\u6240\u6709.html\u6C47\u603B\u6210\u4E00\u4E2A\u5217\u8868\uFF0C\u4E0B\u9762\u4F1A\u5BF9\u5176\u8FDB\u884C\u6392\u5E8F</span>
            <span class="token comment"># print(path_list)</span>
        path_list<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>key<span class="token operator">=</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span><span class="token builtin">int</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">#\u8FD9\u6837\u5904\u74061.html\u523010.html\u4ECE1.html~10.html\u6392\u5E8F\uFF0C\u5982\u679C\u53EA\u7528sort\uFF0C\u4F1A\u663E\u793A1.html,10.html~9.html</span>
        <span class="token comment"># print(path_list)</span>
        <span class="token keyword">for</span> path <span class="token keyword">in</span> path_list<span class="token punctuation">:</span>
            html_content <span class="token operator">=</span> self<span class="token punctuation">.</span>read_html<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
            <span class="token comment">#print(&quot;\u5185\u5BB9\u6D4B\u8BD5&quot;,html_content)</span>
            n <span class="token operator">=</span> self<span class="token punctuation">.</span>parse<span class="token punctuation">(</span>html_content<span class="token punctuation">)</span>
            JSON_TXT<span class="token punctuation">[</span><span class="token string">&quot;Scrape100&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment"># self.save_json(JSON_TXT)</span>
            self<span class="token punctuation">.</span>save_json<span class="token punctuation">(</span>json_filename<span class="token punctuation">,</span>JSON_TXT<span class="token punctuation">)</span>

        <span class="token comment"># pprint(JSON_TXT)</span>
        <span class="token comment"># print(&quot;\u6240\u6709\u9875\u6570\u7684\u5217\u8868\u4FE1\u606F&quot;,result_list)</span>
        <span class="token comment"># print(result_list)</span>
        <span class="token comment"># name_lst=[i[0] for i in result_list]#\u7535\u5F71\u540D\u79F0</span>
        <span class="token comment"># # print(name_lst)</span>
        <span class="token comment"># img_lst=[i[1] for i in result_list]#\u56FE\u7247</span>
        <span class="token comment"># time_lst = [i[2] for i in result_list]#\u4E0A\u6620\u65F6\u95F4</span>
        <span class="token comment"># score_lst = [i[3] for i in result_list]#\u8BC4\u5206</span>
        <span class="token comment"># wb2=xlrd.open_workbook(&quot;\u732B\u773CTop.xls&quot;)</span>
        <span class="token comment"># sheet_odd= wb2.sheet_by_index(0)</span>
        <span class="token comment"># xwb=copy(wb2)</span>
        <span class="token comment"># sheet=xwb.get_sheet(&quot;sheet1&quot;)</span>
        <span class="token comment"># # 2.\u5199\u5165\u722C\u53D6\u7684url\u89E3\u6790\u540E\u7684\u4FE1\u606F</span>
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
        <span class="token comment"># xwb.save(&quot;\u732B\u773C.xls&quot;)</span>
        <span class="token comment">#</span>
<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    ps <span class="token operator">=</span> Parse<span class="token punctuation">(</span><span class="token punctuation">)</span>
    ps<span class="token punctuation">.</span>run_parse<span class="token punctuation">(</span><span class="token string">&quot;Index_Html&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token string">&#39;&lt;div.*?id=&quot;detail&quot;\\s+class=&quot;m-t&quot;&gt;*\\s?.*?&lt;h2.*?class=&quot;m-b-sm&quot;&gt;(.*?)&lt;/h2&gt;&lt;/a&gt;&#39;</span> \\
                        <span class="token comment"># &#39;.*?&lt;button.*?\u5267\u60C5&lt;/span&gt;.*?&lt;button.*?&lt;span&gt;(.*?)&lt;/span&gt;&#39; \\</span>
                        <span class="token comment"># &#39;.*?&lt;div.*?63864230.*?&lt;h3.*?&lt;/h3&gt;\\s+&lt;p.*?&gt;\\s+(.*?)\\s+&lt;/p&gt;&lt;/div&gt;&#39; \\</span>
                        <span class="token comment"># &#39;.*?&lt;div.*?class=&quot;el-row&quot;&gt;.*?&lt;p.*?class=&quot;name.*?&gt;(.*?)&lt;/p&gt;&lt;/div&gt;&#39; \\</span>
                        <span class="token comment"># &#39;.*?tabindex=&quot;0&quot;&gt;(.*?)&lt;/p&gt;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function l(c,i){return s(),a("div",null,o)}const r=n(p,[["render",l],["__file","ScrapeMovie.html.vue"]]);export{r as default};
