<template><div><h2 id="遇到的问题并解决" tabindex="-1"><a class="header-anchor" href="#遇到的问题并解决" aria-hidden="true">#</a> 遇到的问题并解决</h2>
<h3 id="写请求头的注意事项" tabindex="-1"><a class="header-anchor" href="#写请求头的注意事项" aria-hidden="true">#</a> 写请求头的注意事项</h3>
<p>1.header中的value不可以带有空格，否则会显示报错“python中报错requests.exceptions.InvalidHeader: Invalid return character or leading space in header: Acc”</p>
<p>错误格式：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>headers<span class="token operator">=</span><span class="token punctuation">{</span>
            <span class="token string">"User-Agent"</span><span class="token punctuation">:</span><span class="token string">" Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正确格式：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>headers={
            "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


