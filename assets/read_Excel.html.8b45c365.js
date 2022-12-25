import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.ca89cfc2.js";const p="/assets/image-20221115175917897.20b08ae7.png",o="/assets/image-20221115183649716.6f242308.png",e={},c=t(`<h3 id="\u8BFB\u53D6excel" tabindex="-1"><a class="header-anchor" href="#\u8BFB\u53D6excel" aria-hidden="true">#</a> \u8BFB\u53D6excel</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#\u5BFC\u5165\u6A21\u5757</span>
<span class="token keyword">import</span> xlrd<span class="token punctuation">,</span>xlwt
<span class="token comment">#\u6253\u5F00\u6587\u4EF6</span>
wb <span class="token operator">=</span> xlrd<span class="token punctuation">.</span>open_workbook<span class="token punctuation">(</span><span class="token string">&quot;../school/cava.xls&quot;</span><span class="token punctuation">)</span>
<span class="token comment">#\u83B7\u53D6\u5168\u90E8\u7684\u8868</span>
sheets<span class="token operator">=</span>wb<span class="token punctuation">.</span>sheets<span class="token punctuation">(</span>
wb<span class="token punctuation">.</span>sheet_by_name<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#\u83B7\u53D6\u6240\u6709\u7684\u884C\u548C\u5217</span>
rows<span class="token operator">=</span>sheets<span class="token punctuation">.</span>nrows
cols<span class="token operator">=</span>sheets<span class="token punctuation">.</span>ncols
<span class="token comment">#\u83B7\u53D6\u6587\u4EF6\u4E2D\u7684\u8868\u683C</span>
<span class="token comment">#1.\u901A\u8FC7\u7D22\u5F15</span>
sheet <span class="token operator">=</span> wb<span class="token punctuation">.</span>sheet_by_index<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">#2.\u901A\u8FC7\u8868\u683C\u540D</span>
sheet<span class="token operator">=</span>wb<span class="token punctuation">.</span>sheet_by_name<span class="token punctuation">(</span><span class="token string">&quot;marm&quot;</span><span class="token punctuation">)</span>
<span class="token comment">#\u7B2C\u4E00\u5217\u6240\u6709\u7684\u503C</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sheet<span class="token punctuation">.</span>col_values<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#\u7B2C\u4E00\u884C\u6240\u6709\u7684\u503C</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sheet<span class="token punctuation">.</span>row_values<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#\u83B7\u53D6\u8868\u683C\u5168\u90E8\u6570\u636E</span>
<span class="token keyword">for</span> row <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">for</span> col <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>cols<span class="token punctuation">)</span><span class="token punctuation">:</span>
 		value <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;\\t&quot;</span><span class="token punctuation">)</span><span class="token comment">#\u8C03\u6574\u683C\u5F0F\uFF0C\u4F7F\u5F97\u6570\u636E\u4EE5\u5728\u8868\u683C\u4E2D\u7684\u6837\u5F0F\u663E\u793A\u5728\u6253\u5370\u53F0</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#\u4F8B\u5B50:\u5411\u8868\u683C\u7B2C\u4E00\u884C\u6DFB\u52A0\u6570\u636E</span>
head_data<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;sex&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span>
pos<span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token keyword">in</span> head_data<span class="token punctuation">:</span>
    sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>pos<span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token comment">#sheet.write(\u884C\uFF0C\u5217\uFF0C\u6570\u636E)</span>
    pos<span class="token operator">+=</span><span class="token number">1</span>
wb<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&quot;othername.xls&quot;</span><span class="token punctuation">)</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FFD\u52A0\u8868\u683C" tabindex="-1"><a class="header-anchor" href="#\u8FFD\u52A0\u8868\u683C" aria-hidden="true">#</a> \u8FFD\u52A0\u8868\u683C</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#\u5BFC\u5165\u6A21\u5757</span>
<span class="token keyword">import</span> xlutils<span class="token punctuation">,</span>xlrd
<span class="token keyword">from</span> faker <span class="token keyword">import</span> Faker
<span class="token keyword">from</span> xlutils<span class="token punctuation">.</span>copy <span class="token keyword">import</span> copy
faker <span class="token operator">=</span> Faker<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#\u6253\u5F00\u8868\u683C</span>
wb <span class="token operator">=</span> xlrd<span class="token punctuation">.</span>open_workbook<span class="token punctuation">(</span><span class="token string">&quot;my.xls&quot;</span><span class="token punctuation">)</span>
xwb <span class="token operator">=</span> copy<span class="token punctuation">(</span>wb<span class="token punctuation">)</span>
<span class="token comment">#\u8FFD\u52A0\u7684\u8868\u683C</span>
sheet <span class="token operator">=</span> xwb<span class="token punctuation">.</span>get_sheet<span class="token punctuation">(</span><span class="token string">&quot;sheet1 &quot;</span><span class="token punctuation">)</span>
<span class="token comment">#\u83B7\u53D6\u6BCF\u4E00\u884C\u7684\u6570\u636E</span>
rows <span class="token operator">=</span> sheet<span class="token punctuation">.</span>get_rows<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#\u83B7\u53D6\u5168\u90E8\u884C\u6570</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> row <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> col <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">,</span> faker<span class="token punctuation">.</span>name<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">#\u5199\u5165\u8FFD\u52A0\u7684\u6570\u636E</span>
xwb<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&quot;cava1.xls&quot;</span><span class="token punctuation">)</span> <span class="token comment">#\u9700\u8981\u65B0\u547D\u540D\u8868\u683C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="os\u6A21\u5757\u90E8\u5206\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#os\u6A21\u5757\u90E8\u5206\u5185\u5BB9" aria-hidden="true">#</a> os\u6A21\u5757\u90E8\u5206\u5185\u5BB9</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>\u5BFC\u5165excel\u8DEF\u5F84
\u65B9\u6CD5\u4E00
path <span class="token operator">=</span> <span class="token string">&quot;.&quot;</span>  <span class="token comment">#\u5F53\u524D\u8DEF\u5F84,\u6539\u53D8\u5F53\u524D\u8DEF\u5F84\u4E2D\u7684\u76EE\u5F55. \u5728data\u6587\u4EF6\u4E0B</span>
    suffix<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;xls&quot;</span><span class="token punctuation">]</span> \u9002\u5408\u5927\u9879\u76EE
    <span class="token comment"># print(list(os.walk(path)))</span>
    path_list<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token comment"># with open(&quot;data\\\\2022-10-\u5BA2\u670D\u90E8.xls&quot;,&quot;r&quot;,)</span>
    <span class="token keyword">for</span> dirpath<span class="token punctuation">,</span>dirnames<span class="token punctuation">,</span>filenames <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
         <span class="token keyword">for</span> i <span class="token keyword">in</span> filenames<span class="token punctuation">:</span>
             <span class="token keyword">if</span> i<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">in</span> suffix<span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span>dirpath<span class="token operator">+</span><span class="token string">&quot;\\\\&quot;</span><span class="token operator">+</span>i<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65B9\u6CD5\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E8C" aria-hidden="true">#</a> \u65B9\u6CD5\u4E8C</h3><p><img src="`+p+'" alt="image-20221115175917897" loading="lazy"></p><h3 id="\u65B9\u6CD5\u4E09" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E09" aria-hidden="true">#</a> \u65B9\u6CD5\u4E09</h3><p><img src="'+o+`" alt="image-20221115183649716" loading="lazy"></p><h3 id="xls-xlsx" tabindex="-1"><a class="header-anchor" href="#xls-xlsx" aria-hidden="true">#</a> xls&amp;xlsx</h3><p>\u4E00\u3001.xls\u4E2D\u6700\u591A\u5B58\u5165\u7684\u6570\u636E\u6761\u6570\uFF1Acolumn(256),row(65536)</p><p>\u4E8C\u3001\u5EFA\u7ACB.xlsx\u6587\u4EF6\u6848\u4F8B\u6B65\u9AA4</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> xlxswriter
wb<span class="token operator">=</span>xlsxwriter<span class="token punctuation">.</span>Workbook<span class="token punctuation">(</span><span class="token string">&quot;\u63D2\u5165\u6570\u636Exlsxwriter.xlsx&quot;</span><span class="token punctuation">)</span>
<span class="token comment">#\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49\u6587\u4EF6\u540D</span>
data<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;date&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;data1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;data2&quot;</span><span class="token punctuation">]</span>
work_sheet1<span class="token operator">=</span>wb<span class="token punctuation">.</span>add_worksheet<span class="token punctuation">(</span><span class="token string">&quot;\u4EE3\u7801\u64CD\u4F5C\u8BB0\u5F55&quot;</span><span class="token punctuation">)</span>
<span class="token comment">#\u5B9A\u4E49\u8868\u683C\u540D\u79F0</span>
work_sheet1<span class="token punctuation">.</span>write_row<span class="token punctuation">(</span><span class="token string">&quot;A1&quot;</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span>
<span class="token comment">#\u4ECE\u7B2C\u4E00\u884C\u7B2C\u4E00\u5217\u7684\u7B2C\u4E00\u683C\u5355\u5143\u683C\u8F93\u5165\u6570\u636E</span>
data2<span class="token operator">=</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&quot;2022-{i}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>i<span class="token operator">=</span>i<span class="token punctuation">)</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">101</span><span class="token punctuation">)</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">101</span><span class="token punctuation">)</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
work_sheet1<span class="token punctuation">.</span>write_column<span class="token punctuation">(</span><span class="token string">&quot;A2&quot;</span><span class="token punctuation">,</span>data2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">#\u4ECE\u7B2C\u4E00\u884C\u7B2C\u4E00\u5217\u7684\u7B2C\u4E8C\u4E2A\u5355\u5143\u683C\u8F93\u5165\u8F93\u5165\uFF0C\u4EE5\u586B\u5145\u5217\u7684\u5F62\u5F0F</span>
work_sheet1<span class="token punctuation">.</span>write_column<span class="token punctuation">(</span><span class="token string">&quot;B2&quot;</span><span class="token punctuation">,</span>data2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
work_sheet1<span class="token punctuation">.</span>write_column<span class="token punctuation">(</span><span class="token string">&quot;C2&quot;</span><span class="token punctuation">,</span>data2<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">#1.\u6298\u7EBF\u56FE\u5B9A\u4E49</span>
chart_col<span class="token operator">=</span>wb<span class="token punctuation">.</span>add_chart<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;line&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">#2.\u7ED9\u56FE\u8868\u8BBE\u7F6E\u683C\u5F0F\u4E14\u586B\u5145\u5185\u5BB9</span>
<span class="token comment">#\u7B2C\u4E00\u6761\u6570\u636Edata1</span>
chart_col<span class="token punctuation">.</span>add_series<span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;=\u4EE3\u7801\u64CD\u4F5C\u8BB0\u5F55!$B$1&quot;</span><span class="token punctuation">,</span><span class="token comment">#b1</span>
        <span class="token string">&quot;categories&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;=\u4EE3\u7801\u64CD\u4F5C\u8BB0\u5F55!$A$2:$A$7&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;values&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;=\u4EE3\u7801\u64CD\u4F5C\u8BB0\u5F55!$B$2:$B$7&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;line&quot;</span><span class="token punctuation">:</span><span class="token punctuation">{</span>
            <span class="token string">&quot;color&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">#data2</span>
chart_col<span class="token punctuation">.</span>add_series<span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;=\u4EE3\u7801\u64CD\u4F5C\u8BB0\u5F55!$C$1&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;categories&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;=\u4EE3\u7801\u64CD\u4F5C\u8BB0\u5F55!$A$2:$A$7&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;values&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;=\u4EE3\u7801\u64CD\u4F5C\u8BB0\u5F55!$C$2:$C$7&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;line&quot;</span><span class="token punctuation">:</span><span class="token punctuation">{</span>
            <span class="token string">&quot;color&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">#3.\u8BBE\u7F6E\u56FE\u8868\u63D2\u5165\u5728\u8868\u683C\u4E2D\u7684\u5177\u4F53\u4F4D\u7F6E</span>
chart_col<span class="token punctuation">.</span>set_title<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;\u865A\u5047\u6570\u636E\u6298\u7EBF\u56FE&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
chart_col<span class="token punctuation">.</span>set_x_axis<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;\u6A2A\u5750\u6807&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
chart_col<span class="token punctuation">.</span>set_y_axis<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;\u7EB5\u5750\u6807&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
work_sheet1<span class="token punctuation">.</span>insert_chart<span class="token punctuation">(</span><span class="token string">&quot;D2&quot;</span><span class="token punctuation">,</span>chart_col<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&quot;x_offset&quot;</span><span class="token punctuation">:</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token string">&quot;y_offset&quot;</span><span class="token punctuation">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
wb<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),i=[c];function l(u,k){return s(),a("div",null,i)}const m=n(e,[["render",l],["__file","read_Excel.html.vue"]]);export{m as default};