<template><div><h2 id="python-之站在高层框架下的-sqlaichemy-操作-mysql-关系型数据库" tabindex="-1"><a class="header-anchor" href="#python-之站在高层框架下的-sqlaichemy-操作-mysql-关系型数据库" aria-hidden="true">#</a> Python 之站在高层框架下的 SQLAIchemy 操作 MySQL（关系型数据库)</h2>
<h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3>
<p>MySql是关系型数据库管理系统。</p>
<p>Flask:Python Web 开发界主力——Flask。使用 SQLAlchemy 进行数据库开发。使用 ORM 是大势所趋。</p>
<p>ORM框架:对数据库的映射;该框架建立在数据库 API 之上，使用关系对象映射进行数据库操作，简言之便是：将对象转换成 SQL，然后使用数据 API 执行 SQL 并获取执行结果。</p>
<h3 id="数据库命令" tabindex="-1"><a class="header-anchor" href="#数据库命令" aria-hidden="true">#</a> 数据库命令</h3>
<p>1.登录数据库</p>
<p>mysql  -u root -p</p>
<p>2.查看所有数据库</p>
<p>show databases;</p>
<img src="@source/Blog/2022/Gra/About_pymysql.assets/image-20230108094126393.png" alt="image-20230108094126393" style="zoom: 80%;" />
<p>3.创建新的数据库</p>
<p>create databases   数据库名;</p>
<p>4.使用数据库</p>
<p>use 数据库名；</p>
<p>5.查看当前数据库中的数据表</p>
<p>show tables;</p>
<h3 id="sqlalchemy" tabindex="-1"><a class="header-anchor" href="#sqlalchemy" aria-hidden="true">#</a> sqlalchemy</h3>
<p>安装命令：<strong>pip install sqlalchemy pymysql</strong></p>
<img src="@source/Blog/2022/Gra/About_pymysql.assets/image-20230108095853904.png" alt="image-20230108095853904" style="zoom:50%;" />
<p><strong>调用数据库API的操作:</strong></p>
<p>'数据库类型+数据库驱动名称://用户名:口令@机器地址:端口号/数据库名'</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>mysql+pymysql://&lt;username>:&lt;password>@&lt;host>|&lt;dbname>[?&lt;options>]
mysql+mysqldb://&lt;user>:&lt;password>@&lt;host>[:&lt;port>]/&lt;dbname>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>mysql+pymysql://:@/[?]
# mysql+pymysql://&lt;username>:&lt;password>@&lt;host>|&lt;dbname>[?&lt;options>]
mysql+mysqldb://:@[:]/
# mysql+mysqldb://&lt;user>:&lt;password>@&lt;host>[:&lt;port>]/&lt;dbname>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>连接数据库：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> sqlalchemy <span class="token keyword">import</span>  create_engine

enging <span class="token operator">=</span> create_engine<span class="token punctuation">(</span>
    <span class="token string">"mysql+pymysql://root:admin@127.0.0.1:3306/test"</span><span class="token punctuation">,</span>
     max_overflow<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
     pool_size<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>
     echo<span class="token operator">=</span><span class="token boolean">True</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建数据表</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span>  sqlalchemy <span class="token keyword">import</span> Table<span class="token punctuation">,</span>Column
<span class="token keyword">from</span> sqlalchemy <span class="token keyword">import</span> String<span class="token punctuation">,</span>Boolean<span class="token punctuation">,</span>Integer<span class="token punctuation">,</span>MetaData
<span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime
<span class="token comment">#导入各种数据类型</span>
<span class="token comment">#metadata 获得元数据库，描述数据表</span>
metadata <span class="token operator">=</span> MetaData<span class="token punctuation">(</span><span class="token punctuation">)</span>
test<span class="token operator">=</span>Table<span class="token punctuation">(</span><span class="token string">"info"</span><span class="token punctuation">,</span>metadata<span class="token punctuation">,</span>
           Column<span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">,</span>Integer<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>primary_key<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>autoincreament<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
           Column<span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span>String<span class="token punctuation">(</span><span class="token number">666</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     	Column<span class="token punctuation">(</span><span class="token string">"data"</span><span class="token punctuation">,</span>DateTime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>default<span class="token operator">=</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">,</span>onupdate<span class="token operator">=</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">)</span><span class="token punctuation">,</span>
           Column<span class="token punctuation">(</span><span class="token string">"main"</span><span class="token punctuation">,</span>Boolean<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>defalut<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
           <span class="token punctuation">)</span>
metadata<span class="token punctuation">.</span>create_all<span class="token punctuation">(</span>enging<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>显示数据表结构</strong></p>
<p>desc 数据表名;</p>
<img src="@source/Blog/2022/Gra/About_pymysql.assets/image-20230108112032180.png" alt="image-20230108112032180" style="zoom:67%;" />
<h3 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h3>
<p>事务是必须满足 4 个条件（ACID）： 原子性，一致性，隔离性，持久性。</p>
<p>定义：我们每执行一个操作的时候的 **会话（session）**也就是我到ATM那里插卡存钱到退卡这就是一个Session。</p>
<p>案例：在银行存一百块钱</p>
<p>- 原子性：我们的每一个事务，都是插入一条数据，都是很小的一个事件。
- 一致性：类似我们存进去钱或者取出来钱，或者是中间有上面更改，都可以完完全全的展现在我的表上。（不会是，我存进去一百元而这个表没有任何的变动）也就是说，<strong>改动是一致的</strong>。
- 隔离性：比方说两个不同的人，我存一百和你存一百是两个不同的事物，我取钱不会影响到你的资产变动，这就是我们所说的隔离性。
- 持久性：持久性就是我们数据就一直在哪了，你没有操作的话，它就不会改变了。</p>
<p>事务用 <strong>BEGIN、ROLLBACK、COMMIT</strong> 来实现：</p>
<table>
<thead>
<tr>
<th>BEGIN</th>
<th>开始一个事物</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ROLLBACK</strong></td>
<td><strong>事物回滚</strong></td>
</tr>
<tr>
<td><strong>COMMIT</strong></td>
<td><strong>事物确认（提交）</strong></td>
</tr>
</tbody>
</table>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#1.连接事务</span>
conn<span class="token operator">=</span>enging<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#2.开始事务</span>
the_start<span class="token operator">=</span>conn<span class="token punctuation">.</span>begin<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    conn<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>test<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"lol3"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">)</span>
    the_start<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
    the_start<span class="token punctuation">.</span>rollback<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#回滚会撤销刚刚所作出来的修改（或者说操作回退，就是类似于没有执行。譬如：文本操作中的 Control + Z）的操作</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>关键词</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>字段</strong></td>
<td>Column、string、integer 都是字段</td>
</tr>
<tr>
<td><strong>MetaData</strong></td>
<td>是表结构的额外信息</td>
</tr>
<tr>
<td><strong>索引</strong></td>
<td>Index</td>
</tr>
<tr>
<td><strong>表</strong></td>
<td>Table</td>
</tr>
<tr>
<td><strong>操作方法</strong></td>
<td>execute ,update, insert, select, delete, join 等</td>
</tr>
</tbody>
</table>
<h3 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h3>
<table>
<thead>
<tr>
<th>第一</th>
<th>通过创建唯一的索引，可以确保数据库表中每一行数据的唯一性；</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>第二</strong></td>
<td><strong>可以大大加快数据的检索速度，这也使创建索引的最主要原因；</strong></td>
</tr>
<tr>
<td><strong>第三</strong></td>
<td><strong>可以加速表和表之间的连接， 特别是在实现数据的参考完整性方面特别有意义；</strong></td>
</tr>
<tr>
<td><strong>第四</strong></td>
<td><strong>在使用分组和排序子句进行数据检索时，同样可以显示著的减少查询中查询中分组和排序的时间</strong></td>
</tr>
<tr>
<td><strong>第五</strong></td>
<td><strong>通过使用索引，可以在查询的过程中，使用优化隐藏器，提高系统的性能。</strong></td>
</tr>
</tbody>
</table>
<h3 id="数据增删改查" tabindex="-1"><a class="header-anchor" href="#数据增删改查" aria-hidden="true">#</a> 数据增删改查</h3>
<p><strong>插入数据</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>engine<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">"insert into user(name) values('wewe')"</span><span class="token punctuation">)</span>
engine<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">"insert into user(name) values('xiaoyi')"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>INSERT INTO TABLE (KEY1,KEYA) VALUES (VALUE1,VALUE2);  # 增加语句

UPDATE TABLE SET KEY=VALUE, KEY=VALUE WHERE···;          # 修改语句

SELECT * FROM TABLE;   # 查询语句

DELETE FROM TABLE WHERE ···;     # 删除语句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除数据</strong></p>
<p>删除全部数据</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>engine<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">"delete from user"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除指定数据</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>engine<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">"delete from user where id = 1"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>更新数据</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#方法1</span>
<span class="token comment"># engine.execute("update user set id = 2,name='python' where id =2")</span>
<span class="token comment">#方法2</span>
<span class="token comment"># engine.execute("update user set name = 'haha' where id = 3 ")</span>
<span class="token comment">#方法3</span>
<span class="token comment"># engine.execute("update user set name ='san'")</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看数据</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>content<span class="token operator">=</span>engine<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">"select * from user"</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i  <span class="token keyword">in</span> content<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
输出<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'san'</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'san'</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">'wewe'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不适用sql语句</p>
<p>方法2,采用python语言</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#插入数据</span>
conn<span class="token operator">=</span>engine<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># conn.execute(user_table.insert(),{"教学表":"www"})</span>
<span class="token comment"># conn.close()</span>
<span class="token comment">#更新数据</span>
<span class="token comment"># conn.execute(user_table.update(),{"教学表":"cava"})</span>
<span class="token comment"># conn.close()</span>
<span class="token comment">#指定修改 id为xxx的数据</span>
<span class="token comment">#conn.execute(user_table.update().where(user_table.c.id==1).values(id=66))</span>
<span class="token comment"># conn.close()</span>
<span class="token comment">#修改数据</span>
<span class="token comment"># conn.execute(user_table.update().where(user_table.c.id==66).values(教学表="xiaoyi"))</span>
<span class="token comment"># conn.close()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法3</p>
<p><strong>插入数据</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>stmt<span class="token operator">=</span>insert<span class="token punctuation">(</span>user_table<span class="token punctuation">)</span><span class="token punctuation">.</span>values<span class="token punctuation">(</span>教学表<span class="token operator">=</span><span class="token string">"haha"</span><span class="token punctuation">,</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">67</span><span class="token punctuation">)</span>
compiled<span class="token operator">=</span>stmt<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">with</span> engine<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> conn<span class="token punctuation">:</span>
    result<span class="token operator">=</span>conn<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>stmt<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">with</span> engine<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> conn<span class="token punctuation">:</span>
    result <span class="token operator">=</span> conn<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>
        insert<span class="token punctuation">(</span>user_table<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token string">"id"</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"教学表"</span><span class="token punctuation">:</span> <span class="token string">"xi"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token string">"id"</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"教学表"</span><span class="token punctuation">:</span> <span class="token string">"ha"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新数据</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> sqlalchemy <span class="token keyword">import</span> update
stmt <span class="token operator">=</span> <span class="token punctuation">(</span>
    update<span class="token punctuation">(</span>user_table<span class="token punctuation">)</span>
    <span class="token punctuation">.</span>where<span class="token punctuation">(</span>user_table<span class="token punctuation">.</span>c<span class="token punctuation">.</span>教学表 <span class="token operator">==</span> <span class="token string">"xi"</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>stmt<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="orm类操纵数据" tabindex="-1"><a class="header-anchor" href="#orm类操纵数据" aria-hidden="true">#</a> ORM类操纵数据</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> sqlalchemy<span class="token punctuation">.</span>orm <span class="token keyword">import</span> sessionmaker
<span class="token keyword">from</span> sqlalchemy<span class="token punctuation">.</span>ext<span class="token punctuation">.</span>declarative <span class="token keyword">import</span>  declarative_base

engine <span class="token operator">=</span> create_engine<span class="token punctuation">(</span>
            <span class="token string">"mysql+pymysql://root:admin@127.0.0.1:3306/xiaoyi"</span><span class="token punctuation">,</span>
            max_overflow<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
            pool_size<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>
            echo<span class="token operator">=</span><span class="token boolean">True</span>
        <span class="token punctuation">)</span>
Base<span class="token operator">=</span>declarative_base<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Host</span><span class="token punctuation">(</span>Base<span class="token punctuation">)</span><span class="token punctuation">:</span>
    __tablename__ <span class="token operator">=</span> <span class="token string">'hosts'</span>
    <span class="token builtin">id</span> <span class="token operator">=</span> Column<span class="token punctuation">(</span>Integer<span class="token punctuation">,</span> primary_key<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> autoincrement<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    hostname <span class="token operator">=</span> Column<span class="token punctuation">(</span>String<span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">,</span> unique<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> nullable<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
    ip_addr <span class="token operator">=</span> Column<span class="token punctuation">(</span>String<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">,</span> unique<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> nullable<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
    port <span class="token operator">=</span> Column<span class="token punctuation">(</span>Integer<span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token number">22</span><span class="token punctuation">)</span>
    title <span class="token operator">=</span> Column<span class="token punctuation">(</span>String<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Base.metadata.create_all(engine)</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        Session <span class="token operator">=</span> sessionmaker<span class="token punctuation">(</span>bind<span class="token operator">=</span>engine<span class="token punctuation">)</span>
        sess <span class="token operator">=</span> Session<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 创建实例</span>
        h <span class="token operator">=</span> Host<span class="token punctuation">(</span>hostname<span class="token operator">=</span><span class="token string">'test1'</span><span class="token punctuation">,</span> ip_addr<span class="token operator">=</span><span class="token string">"127.0.0.1"</span><span class="token punctuation">)</span>
        h2 <span class="token operator">=</span> Host<span class="token punctuation">(</span>hostname<span class="token operator">=</span><span class="token string">'test2'</span><span class="token punctuation">,</span> ip_addr<span class="token operator">=</span><span class="token string">"192.168.0.1"</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">8000</span><span class="token punctuation">)</span>
        h3 <span class="token operator">=</span> Host<span class="token punctuation">(</span>hostname<span class="token operator">=</span><span class="token string">'test3'</span><span class="token punctuation">,</span> ip_addr<span class="token operator">=</span><span class="token string">"192.168.1.1"</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">8080</span><span class="token punctuation">)</span>
        sess<span class="token punctuation">.</span>add<span class="token punctuation">(</span>h<span class="token punctuation">)</span>  <span class="token comment"># 每次添加一个</span>
        sess<span class="token punctuation">.</span>add_all<span class="token punctuation">(</span><span class="token punctuation">[</span>h2<span class="token punctuation">,</span> h3<span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 每次添加多个</span>
        <span class="token comment">#数据更新</span>
        res<span class="token operator">=</span>sess<span class="token punctuation">.</span>query<span class="token punctuation">(</span>Host<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>Host<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> res<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>hostname<span class="token punctuation">)</span>
        sess<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 事务提交，必须要有</span>
    <span class="token keyword">except</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Error!"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


