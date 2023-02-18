const n=JSON.parse(`{"key":"v-772d5e8e","path":"/Blog/2022/Python_Automation/read_Excel.html","title":"python 自动化","lang":"zh-CN","frontmatter":{"title":"python 自动化","date":"2022-10-30T12:04:21.000Z","author":"cava","isOriginal":true,"category":["notebook","VuePress"],"tag":["Vue","VuePress"],"icon":"vue","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"description":"读取excel #导入模块 import xlrd,xlwt #打开文件 wb = xlrd.open_workbook(\\"../school/cava.xls\\") #获取全部的表 sheets=wb.sheets( wb.sheet_by_name() #获取所有的行和列 rows=sheets.nrows cols=sheets.ncols #获取文件中的表格 #1.通过索引 sheet = wb.sheet_by_index(0) #2.通过表格名 sheet=wb.sheet_by_name(\\"marm\\") #第一列所有的值 print(sheet.col_values(0)) #第一行所有的值 print(sheet.row_values(0)) #获取表格全部数据 for row in range(rows): \\tfor col in range(cols): \\t\\tvalue = sheet.cell_value(row, col) print(value, end=\\"\\\\t\\")#调整格式，使得数据以在表格中的样式显示在打印台 print() #例子:向表格第一行添加数据 head_data=['name','sex','age'] pos=0 for in head_data: sheet.write(0,pos,i)#sheet.write(行，列，数据) pos+=1 wb.save(\\"othername.xls\\")","head":[["meta",{"property":"og:url","content":"https://augwewe.cn/Blog/2022/Python_Automation/read_Excel.html"}],["meta",{"property":"og:site_name","content":"augwewe"}],["meta",{"property":"og:title","content":"python 自动化"}],["meta",{"property":"og:description","content":"读取excel #导入模块 import xlrd,xlwt #打开文件 wb = xlrd.open_workbook(\\"../school/cava.xls\\") #获取全部的表 sheets=wb.sheets( wb.sheet_by_name() #获取所有的行和列 rows=sheets.nrows cols=sheets.ncols #获取文件中的表格 #1.通过索引 sheet = wb.sheet_by_index(0) #2.通过表格名 sheet=wb.sheet_by_name(\\"marm\\") #第一列所有的值 print(sheet.col_values(0)) #第一行所有的值 print(sheet.row_values(0)) #获取表格全部数据 for row in range(rows): \\tfor col in range(cols): \\t\\tvalue = sheet.cell_value(row, col) print(value, end=\\"\\\\t\\")#调整格式，使得数据以在表格中的样式显示在打印台 print() #例子:向表格第一行添加数据 head_data=['name','sex','age'] pos=0 for in head_data: sheet.write(0,pos,i)#sheet.write(行，列，数据) pos+=1 wb.save(\\"othername.xls\\")"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-18T04:42:15.000Z"}],["meta",{"property":"article:author","content":"cava"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"VuePress"}],["meta",{"property":"article:published_time","content":"2022-10-30T12:04:21.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-18T04:42:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"python 自动化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-30T12:04:21.000Z\\",\\"dateModified\\":\\"2023-02-18T04:42:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"cava\\"}]}"]]},"headers":[{"level":3,"title":"读取excel","slug":"读取excel","link":"#读取excel","children":[]},{"level":3,"title":"追加表格","slug":"追加表格","link":"#追加表格","children":[]},{"level":3,"title":"os模块部分内容","slug":"os模块部分内容","link":"#os模块部分内容","children":[]},{"level":3,"title":"方法二","slug":"方法二","link":"#方法二","children":[]},{"level":3,"title":"方法三","slug":"方法三","link":"#方法三","children":[]},{"level":3,"title":"xls&xlsx","slug":"xls-xlsx","link":"#xls-xlsx","children":[]}],"git":{"createdTime":1671864082000,"updatedTime":1676695335000,"contributors":[{"name":"AndersonHJB","email":"aiyuechuang@gmail.com","commits":1},{"name":"augwewe","email":"1085816416@qq.com","commits":1}]},"readingTime":{"minutes":2.39,"words":716},"filePathRelative":"Blog/2022/Python_Automation/read_Excel.md","localizedDate":"2022年10月30日","excerpt":"<h3> 读取excel</h3>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token comment\\">#导入模块</span>\\n<span class=\\"token keyword\\">import</span> xlrd<span class=\\"token punctuation\\">,</span>xlwt\\n<span class=\\"token comment\\">#打开文件</span>\\nwb <span class=\\"token operator\\">=</span> xlrd<span class=\\"token punctuation\\">.</span>open_workbook<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"../school/cava.xls\\"</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">#获取全部的表</span>\\nsheets<span class=\\"token operator\\">=</span>wb<span class=\\"token punctuation\\">.</span>sheets<span class=\\"token punctuation\\">(</span>\\nwb<span class=\\"token punctuation\\">.</span>sheet_by_name<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">#获取所有的行和列</span>\\nrows<span class=\\"token operator\\">=</span>sheets<span class=\\"token punctuation\\">.</span>nrows\\ncols<span class=\\"token operator\\">=</span>sheets<span class=\\"token punctuation\\">.</span>ncols\\n<span class=\\"token comment\\">#获取文件中的表格</span>\\n<span class=\\"token comment\\">#1.通过索引</span>\\nsheet <span class=\\"token operator\\">=</span> wb<span class=\\"token punctuation\\">.</span>sheet_by_index<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">#2.通过表格名</span>\\nsheet<span class=\\"token operator\\">=</span>wb<span class=\\"token punctuation\\">.</span>sheet_by_name<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"marm\\"</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">#第一列所有的值</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>sheet<span class=\\"token punctuation\\">.</span>col_values<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">#第一行所有的值</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>sheet<span class=\\"token punctuation\\">.</span>row_values<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">#获取表格全部数据</span>\\n<span class=\\"token keyword\\">for</span> row <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">range</span><span class=\\"token punctuation\\">(</span>rows<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n\\t<span class=\\"token keyword\\">for</span> col <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">range</span><span class=\\"token punctuation\\">(</span>cols<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n \\t\\tvalue <span class=\\"token operator\\">=</span> sheet<span class=\\"token punctuation\\">.</span>cell_value<span class=\\"token punctuation\\">(</span>row<span class=\\"token punctuation\\">,</span> col<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>value<span class=\\"token punctuation\\">,</span> end<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"\\\\t\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token comment\\">#调整格式，使得数据以在表格中的样式显示在打印台</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">#例子:向表格第一行添加数据</span>\\nhead_data<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'name'</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'sex'</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'age'</span><span class=\\"token punctuation\\">]</span>\\npos<span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span>\\n<span class=\\"token keyword\\">for</span> <span class=\\"token keyword\\">in</span> head_data<span class=\\"token punctuation\\">:</span>\\n    sheet<span class=\\"token punctuation\\">.</span>write<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span>pos<span class=\\"token punctuation\\">,</span>i<span class=\\"token punctuation\\">)</span><span class=\\"token comment\\">#sheet.write(行，列，数据)</span>\\n    pos<span class=\\"token operator\\">+=</span><span class=\\"token number\\">1</span>\\nwb<span class=\\"token punctuation\\">.</span>save<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"othername.xls\\"</span><span class=\\"token punctuation\\">)</span> \\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
