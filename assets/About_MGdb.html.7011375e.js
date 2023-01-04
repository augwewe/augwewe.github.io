import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.e7df7432.js";const p="/assets/image-20230105010554145.bbb6ed7e.png",e={},o=t(`<h2 id="mongodb-pymongo" tabindex="-1"><a class="header-anchor" href="#mongodb-pymongo" aria-hidden="true">#</a> MongoDB-pymongo</h2><p>\u5BFC\u5165\u5E93 import pymongo</p><h3 id="_1-\u8FDE\u63A5\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_1-\u8FDE\u63A5\u6570\u636E\u5E93" aria-hidden="true">#</a> 1.\u8FDE\u63A5\u6570\u636E\u5E93</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>client<span class="token operator">=</span>pymongo<span class="token punctuation">.</span>MongoClient<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>port<span class="token operator">=</span><span class="token number">27017</span><span class="token punctuation">)</span>
client<span class="token operator">=</span>pymongo<span class="token punctuation">.</span>MongoClient<span class="token punctuation">(</span><span class="token string">&#39;mongodb://localhost:27017/&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u6307\u5B9A\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_2-\u6307\u5B9A\u6570\u636E\u5E93" aria-hidden="true">#</a> 2.\u6307\u5B9A\u6570\u636E\u5E93</h3><p>\u4E0D\u5B58\u5728\u8BE5\u6570\u636E\u5E93\u4F1A\u81EA\u52A8\u521B\u5EFA</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>db<span class="token operator">=</span>client<span class="token punctuation">.</span>first
db<span class="token operator">=</span>client<span class="token punctuation">[</span><span class="token string">&#39;first&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u6307\u5B9A\u96C6\u5408-\u6570\u636E\u8868" tabindex="-1"><a class="header-anchor" href="#_3-\u6307\u5B9A\u96C6\u5408-\u6570\u636E\u8868" aria-hidden="true">#</a> 3.\u6307\u5B9A\u96C6\u5408\uFF08\u6570\u636E\u8868\uFF09</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>collections<span class="token operator">=</span>db<span class="token punctuation">.</span>info
collections<span class="token operator">=</span>db<span class="token punctuation">[</span><span class="token string">&#39;info&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u63D2\u5165\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_4-\u63D2\u5165\u6570\u636E" aria-hidden="true">#</a> 4.\u63D2\u5165\u6570\u636E</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>info<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token string">&#39;id&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;xiaoyi&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;birth&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;1027&#39;</span><span class="token punctuation">,</span>
     <span class="token string">&#39;sex&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;girl&#39;</span>
<span class="token punctuation">}</span>
result<span class="token operator">=</span>collections<span class="token punctuation">.</span>insert_one<span class="token punctuation">(</span>info<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1\u6279\u91CF\u63D2\u5165\u6570\u636E-insert-one" tabindex="-1"><a class="header-anchor" href="#_4-1\u6279\u91CF\u63D2\u5165\u6570\u636E-insert-one" aria-hidden="true">#</a> 4.1\u6279\u91CF\u63D2\u5165\u6570\u636E(insert_one)</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code> <span class="token keyword">for</span> num <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">501</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
     info_second <span class="token operator">=</span> <span class="token punctuation">{</span>
         <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> faker<span class="token punctuation">.</span>name<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
         <span class="token string">&#39;email&#39;</span><span class="token punctuation">:</span> faker<span class="token punctuation">.</span>email<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
         <span class="token string">&#39;post&#39;</span><span class="token punctuation">:</span> faker<span class="token punctuation">.</span>postcode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token punctuation">}</span>
     collections<span class="token punctuation">.</span>insert_one<span class="token punctuation">(</span>info_second<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2\u6279\u91CF\u63D2\u5165\u6570\u636E-insert-many" tabindex="-1"><a class="header-anchor" href="#_4-2\u6279\u91CF\u63D2\u5165\u6570\u636E-insert-many" aria-hidden="true">#</a> 4.2\u6279\u91CF\u63D2\u5165\u6570\u636E(insert_many)</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>result<span class="token operator">=</span>collections<span class="token punctuation">.</span>insert_many<span class="token punctuation">(</span><span class="token punctuation">[</span>info<span class="token punctuation">,</span>info_student<span class="token punctuation">]</span><span class="token punctuation">)</span>

new_list<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">501</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
     daylist <span class="token operator">=</span> <span class="token punctuation">{</span>
         <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> faker<span class="token punctuation">.</span>name<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
         <span class="token string">&#39;email&#39;</span><span class="token punctuation">:</span> faker<span class="token punctuation">.</span>email<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
         <span class="token string">&#39;post&#39;</span><span class="token punctuation">:</span> faker<span class="token punctuation">.</span>postcode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token punctuation">}</span>
     new_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>daylist<span class="token punctuation">)</span>
 collections<span class="token punctuation">.</span>insert_many<span class="token punctuation">(</span>new_list<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_5-\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> 5.\u67E5\u8BE2\u6570\u636E</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> bson<span class="token punctuation">.</span>objectid <span class="token keyword">import</span> ObjectId

result<span class="token operator">=</span>collections<span class="token punctuation">.</span>find_one<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;wewe&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">#\u83B7\u53D6\u6240\u6709xiaoyi\u7684\u4FE1\u606F</span>
result2<span class="token operator">=</span>collections<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;xiaoyi&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">#\u67E5\u8BE2\u4E0D\u5B58\u5728\u7684id\u4F1A\u8FD4\u56DENone</span>
result3<span class="token operator">=</span>collections<span class="token punctuation">.</span>find_one<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;_id&quot;</span><span class="token punctuation">:</span>ObjectId<span class="token punctuation">(</span><span class="token string">&quot;63b4dee4d36d58d5a24b4172&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-\u67E5\u8BE2\u6570\u636E\u8303\u56F4-int" tabindex="-1"><a class="header-anchor" href="#_6-\u67E5\u8BE2\u6570\u636E\u8303\u56F4-int" aria-hidden="true">#</a> 6.\u67E5\u8BE2\u6570\u636E\u8303\u56F4\uFF08int)</h3><img src="`+p+`" alt="image-20230105010554145" style="zoom:50%;"><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>result<span class="token operator">=</span>collections<span class="token punctuation">.</span>find_one<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;birth&quot;</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token string">&quot;$gt&quot;</span><span class="token punctuation">:</span><span class="token number">8888</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
result<span class="token operator">=</span>collections<span class="token punctuation">.</span>find_one<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;birth&quot;</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token string">&quot;$in&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">8888</span><span class="token punctuation">,</span><span class="token number">20000</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
result<span class="token operator">=</span>collections<span class="token punctuation">.</span>find_one<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;birth&quot;</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token string">&quot;$lt&quot;</span><span class="token punctuation">:</span><span class="token number">10000</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
result<span class="token operator">=</span>collections<span class="token punctuation">.</span>find_one<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;birth&quot;</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token string">&quot;$lte&quot;</span><span class="token punctuation">:</span><span class="token number">8888</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),c=[o];function i(u,l){return s(),a("div",null,c)}const k=n(e,[["render",i],["__file","About_MGdb.html.vue"]]);export{k as default};
