<template><div><h3 id="数据存储至sqlite中" tabindex="-1"><a class="header-anchor" href="#数据存储至sqlite中" aria-hidden="true">#</a> 数据存储至SQLite中</h3>
<p>1.连接数据库</p>
<p>2.读取json文件</p>
<p>3.不知如何将数据形式为列表的存入sqlite中，例如电影剧情分类有武侠，剧情，人物。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>    <span class="token keyword">def</span> <span class="token function">read_json</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>filename<span class="token punctuation">,</span>read_type<span class="token operator">=</span><span class="token string">"json"</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        conn <span class="token operator">=</span> sqlite3<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">'D:\SQLite\data\cava.db'</span><span class="token punctuation">)</span>
        conn<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token triple-quoted-string string">'''
                            CREATE TABLE MOVIE_DETAIL
                            (
                              Id  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                              Title  VARCHAR NOT NULL,
                              Introduction VARCHAR NOT NULL,
                              Director VARCHAR NOT NULL,
                              Actor VARCHAR NOT NULL);    
                    '''</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"successfully"</span><span class="token punctuation">)</span>
        target_suffix<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">'json'</span><span class="token punctuation">,</span><span class="token string">'txt'</span><span class="token punctuation">,</span><span class="token string">'xls'</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> read_type <span class="token keyword">not</span> <span class="token keyword">in</span> target_suffix<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span><span class="token string">"r"</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            <span class="token keyword">if</span> read_type <span class="token operator">==</span> <span class="token string">'json'</span><span class="token punctuation">:</span>
                data<span class="token operator">=</span>json<span class="token punctuation">.</span>load<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
                <span class="token keyword">for</span> line <span class="token keyword">in</span> data<span class="token punctuation">[</span><span class="token string">"Scrape_detail"</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                    <span class="token keyword">for</span> i <span class="token keyword">in</span> line<span class="token punctuation">:</span>
                        sql <span class="token operator">=</span> <span class="token string">"insert into movie_detail(id,title,introduction,director,actor) values (null,'%s','%s','%s','%s')"</span> <span class="token operator">%</span> <span class="token punctuation">(</span>i<span class="token punctuation">[</span><span class="token string">'title'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>i<span class="token punctuation">[</span><span class="token string">'introduction'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">[</span><span class="token string">'director'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">[</span><span class="token string">'actor'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                        conn<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
                        conn<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">elif</span> read_type <span class="token operator">==</span> <span class="token string">'txt'</span><span class="token punctuation">:</span>
                data<span class="token operator">=</span>f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


