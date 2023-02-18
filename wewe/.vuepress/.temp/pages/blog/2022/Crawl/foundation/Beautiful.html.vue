<template><div><h2 id="beautiful-soup" tabindex="-1"><a class="header-anchor" href="#beautiful-soup" aria-hidden="true">#</a> Beautiful Soup</h2>
<h3 id="安装库-导入包" tabindex="-1"><a class="header-anchor" href="#安装库-导入包" aria-hidden="true">#</a> 安装库,导入包</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pip install lxml
pip install BeautifulSoup
from bs4 import BeautifulSoup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四大种类对象" tabindex="-1"><a class="header-anchor" href="#四大种类对象" aria-hidden="true">#</a> 四大种类对象</h3>
<p>*  Tag
*  NavigableString
*  BeautifulSoup
*  Comment</p>
<h3 id="prettify" tabindex="-1"><a class="header-anchor" href="#prettify" aria-hidden="true">#</a> prettify()</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>url <span class="token operator">=</span> <span class="token string">"https://www.xbiquge.so/book/54523/"</span>
header <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'User-Agent'</span><span class="token punctuation">:</span> <span class="token string">'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'</span><span class="token punctuation">}</span>
req <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> headers <span class="token operator">=</span> header<span class="token punctuation">)</span>
soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>req<span class="token punctuation">.</span>text<span class="token punctuation">,</span> <span class="token string">'lxml'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>prettify<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
输出<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
将网页源代码结构化显示在打印台，便于查看

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> Comment</h3>
<p>Comment 对象是一个特殊类型的 NavigableString 对象，但是当它出现在 HTML 文档中时，如果不对 Comment 对象进行处理，那么我们在后续的处理中可能会出现问题。<strong>HTML 中可以用来添加一段暂不通过网页渲染出来的内容</strong>。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>url <span class="token operator">=</span> <span class="token string">"https://www.xbiquge.so/book/54523/"</span>
header <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'User-Agent'</span><span class="token punctuation">:</span> <span class="token string">'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'</span><span class="token punctuation">}</span>
req <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> headers <span class="token operator">=</span> header<span class="token punctuation">)</span>
soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>req<span class="token punctuation">.</span>text<span class="token punctuation">,</span> <span class="token string">'lxml'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>a<span class="token punctuation">.</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>a<span class="token punctuation">.</span>string<span class="token punctuation">)</span><span class="token punctuation">)</span>
输出<span class="token punctuation">:</span>
<span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"https://www.xbiquge.so"</span><span class="token operator">></span>笔趣阁<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
笔趣阁
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'bs4.element.NavigableString'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css选择器" tabindex="-1"><a class="header-anchor" href="#css选择器" aria-hidden="true">#</a> Css选择器</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">ask_url</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>headers<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>timeout<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># global status,html,redirected_url</span>
    the_headers<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token string">"User-Agent"</span><span class="token punctuation">:</span><span class="token string">"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> headers<span class="token punctuation">:</span>
        the_headers<span class="token operator">=</span>headers
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        response<span class="token operator">=</span>requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span>headers<span class="token operator">=</span>the_headers<span class="token punctuation">,</span>timeout<span class="token operator">=</span>timeout<span class="token punctuation">)</span>
        <span class="token keyword">if</span> response<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
            encoding<span class="token operator">=</span>cchardet<span class="token punctuation">.</span>detect<span class="token punctuation">(</span>response<span class="token punctuation">.</span>content<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'encoding'</span><span class="token punctuation">]</span>
            html<span class="token operator">=</span>response<span class="token punctuation">.</span>content<span class="token punctuation">.</span>decode<span class="token punctuation">(</span>encoding<span class="token punctuation">)</span>
            <span class="token keyword">return</span> html
    <span class="token keyword">except</span><span class="token punctuation">(</span>RequestException<span class="token punctuation">,</span>ProxyError<span class="token punctuation">,</span>SSLError<span class="token punctuation">)</span><span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">parse_url</span><span class="token punctuation">(</span>html content<span class="token punctuation">)</span><span class="token punctuation">:</span>
    soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>htmlcontent<span class="token punctuation">,</span> <span class="token string">'lxml'</span><span class="token punctuation">)</span>
    <span class="token comment"># print(soup.prettify())#结构化输出</span>
    catalog<span class="token operator">=</span>soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">'.box_con #list dl dd'</span><span class="token punctuation">)</span>
    <span class="token comment"># print(catalog)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> catal <span class="token number">1</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> middle<span class="token punctuation">:</span>
            <span class="token keyword">continue</span>
        href<span class="token operator">=</span>i<span class="token punctuation">.</span>a<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'href'</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>href<span class="token punctuation">)</span>
        <span class="token comment">#t='&lt;dd>&lt;/dd>'</span>
        <span class="token comment"># if str(i) == t:</span>
        <span class="token comment">#     continue</span>
        <span class="token comment"># title=i.string</span>
        <span class="token comment"># href=i.a.get('href')</span>
        <span class="token comment"># # print(i.a.get('href'))</span>
        <span class="token comment"># yield {</span>
        <span class="token comment">#     "title":title,</span>
        <span class="token comment">#     "link":href</span>
        <span class="token comment"># }</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    url <span class="token operator">=</span> <span class="token string">"https://www.xbiquge.so/book/54523/"</span>
    htmlcontent<span class="token operator">=</span>ask_url<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">)</span>
    <span class="token comment"># print(htmlcontent)</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> htmlcontent<span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
    mongodb <span class="token operator">=</span> MongoDB<span class="token punctuation">(</span><span class="token string">"DBTest"</span><span class="token punctuation">,</span> <span class="token string">"TestBea"</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> content <span class="token keyword">in</span> parse_url<span class="token punctuation">(</span>htmlcontent<span class="token punctuation">)</span><span class="token punctuation">:</span>
        mongodb<span class="token punctuation">.</span>insert<span class="token punctuation">(</span>content<span class="token punctuation">)</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


