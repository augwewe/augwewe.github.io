<template><div><h3 id="延迟插件" tabindex="-1"><a class="header-anchor" href="#延迟插件" aria-hidden="true">#</a> 延迟插件</h3>
<p>使用目的：请求访问频繁，作非正常浏览判别会被封禁Ip</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> urllib <span class="token keyword">import</span> parse
<span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime
<span class="token keyword">import</span> time<span class="token punctuation">,</span>requests  <span class="token comment">#睡眠req爬虫库</span>

<span class="token keyword">class</span> <span class="token class-name">DelayWait</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>delay<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>delay<span class="token operator">=</span>delay
        self<span class="token punctuation">.</span>urls<span class="token operator">=</span><span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">#字典存储各种 url,域名：time</span>

    <span class="token keyword">def</span> <span class="token function">wait</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
        netloc<span class="token operator">=</span>parse<span class="token punctuation">.</span>urlparse<span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>netloc
        <span class="token comment">#1. 解析url,比较每次是否访问同一个主站，是同一个就用延迟插件，不是就不需要；因为只有短时间内访问同一个网站才会被封禁。</span>
        lastOne<span class="token operator">=</span>self<span class="token punctuation">.</span>urls<span class="token punctuation">.</span>get<span class="token punctuation">(</span>netloc<span class="token punctuation">)</span>
        <span class="token comment">#? 使用dic[key] 没有key对应的值会返回KeyError;get返回None</span>
        <span class="token keyword">if</span> lastOne <span class="token keyword">and</span> self<span class="token punctuation">.</span>delay <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">:</span>
            timeWait<span class="token operator">=</span>self<span class="token punctuation">.</span>delay<span class="token operator">-</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span>lastOne<span class="token punctuation">)</span><span class="token punctuation">.</span>seconds <span class="token comment">#2. 当前时间和之前的域名(时间)作差,并转化成秒</span>
            <span class="token keyword">if</span> timeWait <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">:</span>
                time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>timeWait<span class="token punctuation">)</span> <span class="token comment">#将差值时间作为休眠时间</span>
        self<span class="token punctuation">.</span>urls<span class="token punctuation">[</span>netloc<span class="token punctuation">]</span><span class="token operator">=</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    urls<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"https://ssr1.scrape.center/"</span><span class="token punctuation">]</span> <span class="token operator">*</span><span class="token number">5</span>
    d<span class="token operator">=</span>DelayWait<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> url <span class="token keyword">in</span> urls<span class="token punctuation">:</span>
        html<span class="token operator">=</span>requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
        d<span class="token punctuation">.</span>wait<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>html<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


