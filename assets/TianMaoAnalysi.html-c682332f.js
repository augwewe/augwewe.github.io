import{_ as n,Z as s,$ as a,a2 as t}from"./framework-e0e6cd2a.js";const e={},p=t(`<p>猫眼Top100榜网页分析--进阶：优化代码；解析网页操作（部分）</p><h2 id="_1-验证获取的url是否已经请求" tabindex="-1"><a class="header-anchor" href="#_1-验证获取的url是否已经请求" aria-hidden="true">#</a> 1.验证获取的URL是否已经请求</h2><p>1.请求中（ing）</p><p>2.刚请求过（ed)</p><p>3.已经存在于asking_url_list中</p><h3 id="_1-1定义asking-url-list-请求过的url存放于此列表中" tabindex="-1"><a class="header-anchor" href="#_1-1定义asking-url-list-请求过的url存放于此列表中" aria-hidden="true">#</a> 1.1定义asking_url_list, 请求过的url存放于此列表中</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>url<span class="token punctuation">,</span>folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>url<span class="token operator">=</span>url
        self<span class="token punctuation">.</span>headers<span class="token operator">=</span><span class="token punctuation">{</span>
            <span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36&quot;</span>
        <span class="token punctuation">}</span>
        self<span class="token punctuation">.</span>asking_url_list<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>folder_name<span class="token operator">=</span>folder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2验证url" tabindex="-1"><a class="header-anchor" href="#_1-2验证url" aria-hidden="true">#</a> 1.2验证url</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">have_asked</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>asking<span class="token punctuation">)</span><span class="token punctuation">:</span>
	asked_lst_filename<span class="token operator">=</span><span class="token punctuation">[</span>filename<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token keyword">for</span> filename <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span><span class="token string">&quot;html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> asking <span class="token operator">+</span> <span class="token string">&quot;.html&quot;</span> <span class="token keyword">in</span> asked_lst_filename <span class="token operator">+</span> self<span class="token punctuation">.</span>asking_url_list<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-是否存在文件-html" tabindex="-1"><a class="header-anchor" href="#_2-是否存在文件-html" aria-hidden="true">#</a> 2. 是否存在文件&quot;html&quot;</h2><h3 id="_2-1代码" tabindex="-1"><a class="header-anchor" href="#_2-1代码" aria-hidden="true">#</a> 2.1代码</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">folder_exists</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>folder<span class="token punctuation">:</span><span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
       <span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
           os<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span><span class="token string">&quot;html&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-解析url" tabindex="-1"><a class="header-anchor" href="#_3-解析url" aria-hidden="true">#</a> 3.解析url</h2><h3 id="_3-1path" tabindex="-1"><a class="header-anchor" href="#_3-1path" aria-hidden="true">#</a> 3.1path</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> <span class="token keyword">def</span> <span class="token function">generate_path</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>
        path_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> dirpath<span class="token punctuation">,</span> dirnames<span class="token punctuation">,</span> filenames <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span>folder<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> filename <span class="token keyword">in</span> filenames<span class="token punctuation">:</span>
                path <span class="token operator">=</span> dirpath <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span><span class="token operator">+</span>filename<span class="token comment">#join自动识别平台路径格式，window和Mac</span>
                path_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2解析url" tabindex="-1"><a class="header-anchor" href="#_3-2解析url" aria-hidden="true">#</a> 3.2解析url</h3><p>解析目的：获取电影名称，封面，上映时间，评分</p><p>解析方法：正则表达式</p><p>tips：对于评分的处理，因小数点前后的数字不同的css效果，先对源代码进行替换处理为了后续的提取便捷</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">parse</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>content<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># print(content)</span>
        k_clean <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">&#39;&lt;/i&gt;&lt;i class=&quot;fraction&quot;&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token comment">#先替换，方便提取评分数据</span>
        pattern<span class="token operator">=</span><span class="token string">&#39;&lt;dd&gt;(?:\\s+)&lt;i class=.*?&lt;/i&gt;(?:\\s+)&lt;a href.*?title=&quot;(.*?)&quot;.*?&gt;(?:\\s+)&lt;img src.*?/&gt;(?:\\s+)&lt;img data-src=&quot;(.*?)&quot;.*?/&gt;*\\s?.*?&lt;p class=&quot;releasetime&quot;&gt;(.*?)&lt;/p&gt;.*?&lt;/div&gt;(?:\\s+).*?(?:\\s+)&lt;p class=&quot;score&quot;.*?&quot;integer&quot;&gt;(\\d\\.\\d).*?&lt;/p&gt;&#39;</span>
        data_lst<span class="token operator">=</span>re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>pattern<span class="token punctuation">,</span>k_clean<span class="token punctuation">,</span>re<span class="token punctuation">.</span>S<span class="token punctuation">)</span>
        <span class="token comment"># print(data_lst)#存放链接信息的列表，列表元素是元组：电影名称，电影封面，上映日期，评分</span>
        <span class="token comment"># print(k_clean)</span>
        <span class="token keyword">return</span>  data_lst
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-引擎" tabindex="-1"><a class="header-anchor" href="#_4-引擎" aria-hidden="true">#</a> 4.&quot; 引擎&quot;</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> <span class="token keyword">def</span> <span class="token function">engine</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>folder_exists<span class="token punctuation">(</span>self<span class="token punctuation">.</span>folder_name<span class="token punctuation">)</span>
        asking_filename <span class="token operator">=</span> self<span class="token punctuation">.</span>url_parse<span class="token punctuation">(</span>self<span class="token punctuation">.</span>url<span class="token punctuation">)</span>  <span class="token comment">#</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>have_asked<span class="token punctuation">(</span>asking_filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment">#执行请求</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;The url is requestsing: </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>url<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>asking_url_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>self<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
            html<span class="token operator">=</span>self<span class="token punctuation">.</span>req_fun<span class="token punctuation">(</span>self<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
            <span class="token comment">#定义</span>
            self<span class="token punctuation">.</span>save_html<span class="token punctuation">(</span>content<span class="token operator">=</span>html<span class="token punctuation">,</span>filename<span class="token operator">=</span>asking_filename<span class="token punctuation">,</span>mkdir_r<span class="token operator">=</span>self<span class="token punctuation">.</span>folder_name<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Requests url </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>url<span class="token punctuation">}</span></span><span class="token string">已经请求过了&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-捕获url-定义保存文件名格式" tabindex="-1"><a class="header-anchor" href="#_5-捕获url-定义保存文件名格式" aria-hidden="true">#</a> 5.捕获url,定义保存文件名格式</h2><p>捕获10个页面到文件”html&quot;中，并设置捕获间隔时间，time.sleep(暂时处理)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    folder<span class="token operator">=</span><span class="token string">&quot;html&quot;</span>
    url <span class="token operator">=</span> <span class="token string">&quot;https://www.maoyan.com/board/4?offset={page}&quot;</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1.5</span><span class="token punctuation">)</span><span class="token comment">#设定间隔时间</span>
        maoyan <span class="token operator">=</span> Maoyan<span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>page<span class="token operator">=</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> folder<span class="token operator">=</span><span class="token string">&quot;html&quot;</span><span class="token punctuation">)</span>
        maoyan<span class="token punctuation">.</span>engine<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),o=[p];function l(c,i){return s(),a("div",null,o)}const r=n(e,[["render",l],["__file","TianMaoAnalysi.html.vue"]]);export{r as default};