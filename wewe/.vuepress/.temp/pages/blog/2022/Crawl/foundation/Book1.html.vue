<template><div><h2 id="百度新闻网站爬取" tabindex="-1"><a class="header-anchor" href="#百度新闻网站爬取" aria-hidden="true">#</a> 百度新闻网站爬取</h2>
<h3 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图" aria-hidden="true">#</a> 流程图</h3>
<img src="@source/Blog/2022/Crawl/foundation/Book1.assets/image-20230117112240491.png" alt="image-20230117112240491" style="zoom:67%;" />
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re<span class="token punctuation">,</span>requests<span class="token punctuation">,</span>tldextract<span class="token punctuation">,</span>time

<span class="token keyword">def</span> <span class="token function">save_data</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>html<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"%s :%s"</span> <span class="token operator">%</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span><span class="token builtin">len</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">crawler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment">#1.下载百度页面</span>
    hub_url<span class="token operator">=</span><span class="token string">'https://news.baidu.com/'</span>
    req<span class="token operator">=</span>requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>hub_url<span class="token punctuation">)</span>
    html<span class="token operator">=</span>req<span class="token punctuation">.</span>text
    <span class="token comment"># print(html)</span>

    <span class="token comment">#2.获取新闻链接</span>
    <span class="token comment"># pattern='.*?&lt;link.*?href="(.*?)".*?style="zoom.*?>.*?id="ariaTipText".*?href=""'</span>
    pattern<span class="token operator">=</span><span class="token string">r'href=[\'"]?(.*?)[\'"\s]'</span>
    news_links<span class="token operator">=</span>re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>pattern<span class="token punctuation">,</span>html<span class="token punctuation">)</span>
    <span class="token comment"># print(news_links)</span>

    <span class="token comment">#3.过滤链接</span>
    links_lst<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> news_links<span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> i<span class="token punctuation">.</span>starswith<span class="token punctuation">(</span><span class="token string">'https'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">continue</span>
        tld<span class="token operator">=</span>tldextract<span class="token punctuation">.</span>extract<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token keyword">if</span> tld<span class="token punctuation">.</span>domain <span class="token operator">==</span> <span class="token string">'baidu'</span><span class="token punctuation">:</span>
            <span class="token keyword">continue</span>
        links_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token keyword">for</span> k <span class="token keyword">in</span> links_lst<span class="token punctuation">:</span>
        html<span class="token operator">=</span>requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">.</span>text

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token number">1</span><span class="token punctuation">:</span>
        crawler<span class="token punctuation">(</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    crawler<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.requests库 获取百度新闻链接</p>
<h3 id="补充-tldextract" tabindex="-1"><a class="header-anchor" href="#补充-tldextract" aria-hidden="true">#</a> 补充：tldextract</h3>
<p>Top Level Domain extract</p>
<p>顶级域名提取</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>url<span class="token operator">=</span><span class="token string">'https://news.baidu.com/'</span>
tld<span class="token operator">=</span>tldextract<span class="token punctuation">.</span>extract<span class="token punctuation">(</span>url<span class="token punctuation">)</span>

输出<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
subdomain<span class="token operator">=</span><span class="token string">'www'</span><span class="token punctuation">,</span>domain<span class="token operator">=</span><span class="token string">'baidu'</span><span class="token punctuation">,</span>主机名<span class="token punctuation">,</span>suffix<span class="token operator">=</span><span class="token string">'com'</span>顶级域名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/Blog/2022/Crawl/foundation/Book1.assets/image-20230118102034984.png" alt="image-20230118102034984" style="zoom: 80%;" />
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> urllib<span class="token punctuation">.</span>parse <span class="token keyword">import</span> urlparse

g_bin_postfix<span class="token operator">=</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string">'exe'</span><span class="token punctuation">,</span><span class="token string">'doc'</span><span class="token punctuation">,</span><span class="token string">'docx'</span><span class="token punctuation">,</span><span class="token string">'xls'</span><span class="token punctuation">,</span><span class="token string">'xlsx'</span><span class="token punctuation">,</span><span class="token string">'ppt'</span><span class="token punctuation">,</span><span class="token string">'pptx'</span><span class="token punctuation">,</span>
    <span class="token string">'pdf'</span><span class="token punctuation">,</span><span class="token string">'jpg'</span><span class="token punctuation">,</span><span class="token string">'png'</span><span class="token punctuation">,</span><span class="token string">'bmp'</span><span class="token punctuation">,</span><span class="token string">'svg'</span><span class="token punctuation">,</span><span class="token string">'gif'</span><span class="token punctuation">,</span><span class="token string">'mp4'</span><span class="token punctuation">,</span><span class="token string">'mkv'</span><span class="token punctuation">,</span>
    <span class="token string">'zip'</span><span class="token punctuation">,</span><span class="token string">'avi'</span><span class="token punctuation">,</span><span class="token string">'wmv'</span><span class="token punctuation">,</span><span class="token string">'rar'</span><span class="token punctuation">,</span><span class="token string">'tar'</span><span class="token punctuation">,</span><span class="token string">'bz2'</span><span class="token punctuation">,</span><span class="token string">'jpeg'</span><span class="token punctuation">,</span><span class="token string">'apk'</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

g_news_postfix<span class="token operator">=</span><span class="token punctuation">[</span>
    <span class="token string">'.html?'</span><span class="token punctuation">,</span><span class="token string">'.htm?'</span><span class="token punctuation">,</span><span class="token string">'.shtml?'</span><span class="token punctuation">,</span>
    <span class="token string">'.shtm?'</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">def</span> <span class="token function">clean_url</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token comment">#1.是否url合规</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> url<span class="token punctuation">.</span>startwith<span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">''</span>
    
<span class="token comment">#2. 去除参数</span>
    <span class="token keyword">for</span> np <span class="token keyword">in</span> g_news_postfix<span class="token punctuation">:</span>
        p <span class="token operator">=</span> url<span class="token punctuation">.</span>find<span class="token punctuation">(</span>np<span class="token punctuation">)</span>
        <span class="token keyword">if</span> p <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>
            p<span class="token operator">=</span>url<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">'?'</span><span class="token punctuation">)</span>
            url<span class="token operator">=</span>url<span class="token punctuation">[</span><span class="token punctuation">:</span>p<span class="token punctuation">]</span>
            <span class="token keyword">return</span> url
        
<span class="token comment">#3. 不保留二进制内容的链接</span>
    up<span class="token operator">=</span>urlparse<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>up<span class="token punctuation">)</span>
    path<span class="token operator">=</span>up<span class="token punctuation">.</span>path
    <span class="token keyword">if</span> <span class="token keyword">not</span> path<span class="token punctuation">:</span>
        path<span class="token operator">=</span><span class="token string">'/'</span>
    postfix<span class="token operator">=</span>path<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> postfix <span class="token keyword">in</span> g_bin_postfix<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


