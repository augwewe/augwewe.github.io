<template><div><h3 id="读取excel" tabindex="-1"><a class="header-anchor" href="#读取excel" aria-hidden="true">#</a> 读取excel</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment">#导入模块</span>
<span class="token keyword">import</span> xlrd<span class="token punctuation">,</span>xlwt
<span class="token comment">#打开文件</span>
wb <span class="token operator">=</span> xlrd<span class="token punctuation">.</span>open_workbook<span class="token punctuation">(</span><span class="token string">"../school/cava.xls"</span><span class="token punctuation">)</span>
<span class="token comment">#获取全部的表</span>
sheets<span class="token operator">=</span>wb<span class="token punctuation">.</span>sheets<span class="token punctuation">(</span>
wb<span class="token punctuation">.</span>sheet_by_name<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#获取所有的行和列</span>
rows<span class="token operator">=</span>sheets<span class="token punctuation">.</span>nrows
cols<span class="token operator">=</span>sheets<span class="token punctuation">.</span>ncols
<span class="token comment">#获取文件中的表格</span>
<span class="token comment">#1.通过索引</span>
sheet <span class="token operator">=</span> wb<span class="token punctuation">.</span>sheet_by_index<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">#2.通过表格名</span>
sheet<span class="token operator">=</span>wb<span class="token punctuation">.</span>sheet_by_name<span class="token punctuation">(</span><span class="token string">"marm"</span><span class="token punctuation">)</span>
<span class="token comment">#第一列所有的值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sheet<span class="token punctuation">.</span>col_values<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#第一行所有的值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sheet<span class="token punctuation">.</span>row_values<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#获取表格全部数据</span>
<span class="token keyword">for</span> row <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">for</span> col <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>cols<span class="token punctuation">)</span><span class="token punctuation">:</span>
 		value <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">"\t"</span><span class="token punctuation">)</span><span class="token comment">#调整格式，使得数据以在表格中的样式显示在打印台</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#例子:向表格第一行添加数据</span>
head_data<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">,</span><span class="token string">'sex'</span><span class="token punctuation">,</span><span class="token string">'age'</span><span class="token punctuation">]</span>
pos<span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token keyword">in</span> head_data<span class="token punctuation">:</span>
    sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>pos<span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token comment">#sheet.write(行，列，数据)</span>
    pos<span class="token operator">+=</span><span class="token number">1</span>
wb<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">"othername.xls"</span><span class="token punctuation">)</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="追加表格" tabindex="-1"><a class="header-anchor" href="#追加表格" aria-hidden="true">#</a> 追加表格</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment">#导入模块</span>
<span class="token keyword">import</span> xlutils<span class="token punctuation">,</span>xlrd
<span class="token keyword">from</span> faker <span class="token keyword">import</span> Faker
<span class="token keyword">from</span> xlutils<span class="token punctuation">.</span>copy <span class="token keyword">import</span> copy
faker <span class="token operator">=</span> Faker<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#打开表格</span>
wb <span class="token operator">=</span> xlrd<span class="token punctuation">.</span>open_workbook<span class="token punctuation">(</span><span class="token string">"my.xls"</span><span class="token punctuation">)</span>
xwb <span class="token operator">=</span> copy<span class="token punctuation">(</span>wb<span class="token punctuation">)</span>
<span class="token comment">#追加的表格</span>
sheet <span class="token operator">=</span> xwb<span class="token punctuation">.</span>get_sheet<span class="token punctuation">(</span><span class="token string">"sheet1 "</span><span class="token punctuation">)</span>
<span class="token comment">#获取每一行的数据</span>
rows <span class="token operator">=</span> sheet<span class="token punctuation">.</span>get_rows<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#获取全部行数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> row <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> col <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">,</span> faker<span class="token punctuation">.</span>name<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">#写入追加的数据</span>
xwb<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">"cava1.xls"</span><span class="token punctuation">)</span> <span class="token comment">#需要新命名表格</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="os模块部分内容" tabindex="-1"><a class="header-anchor" href="#os模块部分内容" aria-hidden="true">#</a> os模块部分内容</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>导入excel路径
方法一
path <span class="token operator">=</span> <span class="token string">"."</span>  <span class="token comment">#当前路径,改变当前路径中的目录. 在data文件下</span>
    suffix<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"xls"</span><span class="token punctuation">]</span> 适合大项目
    <span class="token comment"># print(list(os.walk(path)))</span>
    path_list<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token comment"># with open("data\\2022-10-客服部.xls","r",)</span>
    <span class="token keyword">for</span> dirpath<span class="token punctuation">,</span>dirnames<span class="token punctuation">,</span>filenames <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
         <span class="token keyword">for</span> i <span class="token keyword">in</span> filenames<span class="token punctuation">:</span>
             <span class="token keyword">if</span> i<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">in</span> suffix<span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span>dirpath<span class="token operator">+</span><span class="token string">"\\"</span><span class="token operator">+</span>i<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h3>
<p><img src="@source/Blog/2022/mywriter.assets/image-20221115175917897.png" alt="image-20221115175917897" loading="lazy"></p>
<h3 id="方法三" tabindex="-1"><a class="header-anchor" href="#方法三" aria-hidden="true">#</a> 方法三</h3>
<p><img src="@source/Blog/2022/mywriter.assets/image-20221115183649716.png" alt="image-20221115183649716" loading="lazy"></p>
<h3 id="xls-xlsx" tabindex="-1"><a class="header-anchor" href="#xls-xlsx" aria-hidden="true">#</a> xls&amp;xlsx</h3>
<p>一、.xls中最多存入的数据条数：column(256),row(65536)</p>
<p>二、建立.xlsx文件案例步骤</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> xlxswriter
wb<span class="token operator">=</span>xlsxwriter<span class="token punctuation">.</span>Workbook<span class="token punctuation">(</span><span class="token string">"插入数据xlsxwriter.xlsx"</span><span class="token punctuation">)</span>
<span class="token comment">#可以直接定义文件名</span>
data<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"date"</span><span class="token punctuation">,</span><span class="token string">"data1"</span><span class="token punctuation">,</span><span class="token string">"data2"</span><span class="token punctuation">]</span>
work_sheet1<span class="token operator">=</span>wb<span class="token punctuation">.</span>add_worksheet<span class="token punctuation">(</span><span class="token string">"代码操作记录"</span><span class="token punctuation">)</span>
<span class="token comment">#定义表格名称</span>
work_sheet1<span class="token punctuation">.</span>write_row<span class="token punctuation">(</span><span class="token string">"A1"</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span>
<span class="token comment">#从第一行第一列的第一格单元格输入数据</span>
data2<span class="token operator">=</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">"2022-{i}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>i<span class="token operator">=</span>i<span class="token punctuation">)</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">101</span><span class="token punctuation">)</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">101</span><span class="token punctuation">)</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
work_sheet1<span class="token punctuation">.</span>write_column<span class="token punctuation">(</span><span class="token string">"A2"</span><span class="token punctuation">,</span>data2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">#从第一行第一列的第二个单元格输入输入，以填充列的形式</span>
work_sheet1<span class="token punctuation">.</span>write_column<span class="token punctuation">(</span><span class="token string">"B2"</span><span class="token punctuation">,</span>data2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
work_sheet1<span class="token punctuation">.</span>write_column<span class="token punctuation">(</span><span class="token string">"C2"</span><span class="token punctuation">,</span>data2<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">#1.折线图定义</span>
chart_col<span class="token operator">=</span>wb<span class="token punctuation">.</span>add_chart<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"type"</span><span class="token punctuation">:</span><span class="token string">"line"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">#2.给图表设置格式且填充内容</span>
<span class="token comment">#第一条数据data1</span>
chart_col<span class="token punctuation">.</span>add_series<span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
        <span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"=代码操作记录!$B$1"</span><span class="token punctuation">,</span><span class="token comment">#b1</span>
        <span class="token string">"categories"</span><span class="token punctuation">:</span><span class="token string">"=代码操作记录!$A$2:$A$7"</span><span class="token punctuation">,</span>
        <span class="token string">"values"</span><span class="token punctuation">:</span><span class="token string">"=代码操作记录!$B$2:$B$7"</span><span class="token punctuation">,</span>
        <span class="token string">"line"</span><span class="token punctuation">:</span><span class="token punctuation">{</span>
            <span class="token string">"color"</span><span class="token punctuation">:</span><span class="token string">"blue"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">#data2</span>
chart_col<span class="token punctuation">.</span>add_series<span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
        <span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"=代码操作记录!$C$1"</span><span class="token punctuation">,</span>
        <span class="token string">"categories"</span><span class="token punctuation">:</span><span class="token string">"=代码操作记录!$A$2:$A$7"</span><span class="token punctuation">,</span>
        <span class="token string">"values"</span><span class="token punctuation">:</span><span class="token string">"=代码操作记录!$C$2:$C$7"</span><span class="token punctuation">,</span>
        <span class="token string">"line"</span><span class="token punctuation">:</span><span class="token punctuation">{</span>
            <span class="token string">"color"</span><span class="token punctuation">:</span><span class="token string">"red"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">#3.设置图表插入在表格中的具体位置</span>
chart_col<span class="token punctuation">.</span>set_title<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"虚假数据折线图"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
chart_col<span class="token punctuation">.</span>set_x_axis<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"横坐标"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
chart_col<span class="token punctuation">.</span>set_y_axis<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"纵坐标"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
work_sheet1<span class="token punctuation">.</span>insert_chart<span class="token punctuation">(</span><span class="token string">"D2"</span><span class="token punctuation">,</span>chart_col<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">"x_offset"</span><span class="token punctuation">:</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token string">"y_offset"</span><span class="token punctuation">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
wb<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


