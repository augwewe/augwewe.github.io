import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.4a3f6a36.js";const e={},p=t(`<h3 id="\u5EF6\u8FDF\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5EF6\u8FDF\u63D2\u4EF6" aria-hidden="true">#</a> \u5EF6\u8FDF\u63D2\u4EF6</h3><p>\u4F7F\u7528\u76EE\u7684\uFF1A\u8BF7\u6C42\u8BBF\u95EE\u9891\u7E41\uFF0C\u4F5C\u975E\u6B63\u5E38\u6D4F\u89C8\u5224\u522B\u4F1A\u88AB\u5C01\u7981Ip</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> urllib <span class="token keyword">import</span> parse
<span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime
<span class="token keyword">import</span> time<span class="token punctuation">,</span>requests  <span class="token comment">#\u7761\u7720req\u722C\u866B\u5E93</span>

<span class="token keyword">class</span> <span class="token class-name">DelayWait</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>delay<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>delay<span class="token operator">=</span>delay
        self<span class="token punctuation">.</span>urls<span class="token operator">=</span><span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">#\u5B57\u5178\u5B58\u50A8\u5404\u79CD url,\u57DF\u540D\uFF1Atime</span>

    <span class="token keyword">def</span> <span class="token function">wait</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
        netloc<span class="token operator">=</span>parse<span class="token punctuation">.</span>urlparse<span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>netloc
        <span class="token comment">#1. \u89E3\u6790url,\u6BD4\u8F83\u6BCF\u6B21\u662F\u5426\u8BBF\u95EE\u540C\u4E00\u4E2A\u4E3B\u7AD9\uFF0C\u662F\u540C\u4E00\u4E2A\u5C31\u7528\u5EF6\u8FDF\u63D2\u4EF6\uFF0C\u4E0D\u662F\u5C31\u4E0D\u9700\u8981\uFF1B\u56E0\u4E3A\u53EA\u6709\u77ED\u65F6\u95F4\u5185\u8BBF\u95EE\u540C\u4E00\u4E2A\u7F51\u7AD9\u624D\u4F1A\u88AB\u5C01\u7981\u3002</span>
        lastOne<span class="token operator">=</span>self<span class="token punctuation">.</span>urls<span class="token punctuation">.</span>get<span class="token punctuation">(</span>netloc<span class="token punctuation">)</span>
        <span class="token comment">#? \u4F7F\u7528dic[key] \u6CA1\u6709key\u5BF9\u5E94\u7684\u503C\u4F1A\u8FD4\u56DEKeyError;get\u8FD4\u56DENone</span>
        <span class="token keyword">if</span> lastOne <span class="token keyword">and</span> self<span class="token punctuation">.</span>delay <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
            timeWait<span class="token operator">=</span>self<span class="token punctuation">.</span>delay<span class="token operator">-</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span>lastOne<span class="token punctuation">)</span><span class="token punctuation">.</span>seconds <span class="token comment">#2. \u5F53\u524D\u65F6\u95F4\u548C\u4E4B\u524D\u7684\u57DF\u540D(\u65F6\u95F4)\u4F5C\u5DEE,\u5E76\u8F6C\u5316\u6210\u79D2</span>
            <span class="token keyword">if</span> timeWait <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
                time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>timeWait<span class="token punctuation">)</span> <span class="token comment">#\u5C06\u5DEE\u503C\u65F6\u95F4\u4F5C\u4E3A\u4F11\u7720\u65F6\u95F4</span>
        self<span class="token punctuation">.</span>urls<span class="token punctuation">[</span>netloc<span class="token punctuation">]</span><span class="token operator">=</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    urls<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;https://ssr1.scrape.center/&quot;</span><span class="token punctuation">]</span> <span class="token operator">*</span><span class="token number">5</span>
    d<span class="token operator">=</span>DelayWait<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> url <span class="token keyword">in</span> urls<span class="token punctuation">:</span>
        html<span class="token operator">=</span>requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
        d<span class="token punctuation">.</span>wait<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>html<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","DelayWait.html.vue"]]);export{k as default};
