<template><div><h1 id="网络爬虫" tabindex="-1"><a class="header-anchor" href="#网络爬虫" aria-hidden="true">#</a> 网络爬虫</h1>
<p>定义：当今最大的网络是互联网，最大的爬虫是各类搜索引擎：谷歌，百度。网路爬虫按照一定的规则爬取所需要的信息的程序，通过URl的请求来实现。在包含广泛信息时，我们就需要一些聚焦于某一方面的信息的爬虫来提供服务，例如某一类型的书。</p>
<h3 id="_1-网络爬虫类型" tabindex="-1"><a class="header-anchor" href="#_1-网络爬虫类型" aria-hidden="true">#</a> 1. 网络爬虫类型</h3>
<p><img src="@source/Blog/2022/PythonCrawl.assets/image-20221119171231536.png" alt="image-20221119171231536" loading="lazy"></p>
<img src="@source/Blog/2022/PythonCrawl.assets/image-20221119171113993.png" alt="image-20221119171113993" style="zoom: 67%;" />
<img src="@source/Blog/2022/PythonCrawl.assets/image-20221119171549635.png" alt="image-20221119171549635" style="zoom: 67%;" />
<p><strong>查看User-Agent方式，右键-检查-NetWork</strong></p>
<p>全网爬虫：谷歌百度搜索引擎</p>
<p>主题爬虫：某一类型信息的，比如新闻类</p>
<p>增量式爬虫：对已下载的页面采取增量式更新的爬虫，只爬取新产生的或者发生的网页，在一定程度上保证 爬取的页面是最新的，减少了空间的浪费。</p>
<p>为什么要用采用增量式爬虫爬取实时热搜的新闻？优点体现在？</p>
<p>前提环境：第一次抓取微博热搜榜的全部新闻可能需要的工作量是24小时，如重复此工作量去操作达到需求，后果是效率低，且会有重复的数据。</p>
<p>解决策略：增量式爬虫，如何处理新数据？</p>
<p>​					将新旧数据进行比较 ，如python列表知识中的语法点：#value in xx , 类似来进行判断，来保证数据的唯一性（达到了数据不重复的目的）</p>
<img src="@source/Blog/2022/PythonCrawl.assets/image-20221119171753590.png" alt="image-20221119171753590" style="zoom:50%;" />
<p>1.URL 通过value in xx来比较查看</p>
<p>2.内容（哈希）</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment">#哈希解析</span>
test<span class="token operator">=</span><span class="token string">"cava"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">hash</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存储介质？</p>
<p>例如将爬取到的url作为MySQl中的主键，定义为Id,查看主键对应的内容，比如第一条值为xiaoyi想去迪士尼，第二条为xiaoyi想去环球影视城，数据已经有更新。</p>
<p>内容的判断？</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">hash</span><span class="token punctuation">(</span>text1<span class="token punctuation">)</span><span class="token operator">==</span><span class="token builtin">hash</span><span class="token punctuation">(</span>text2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#返回True则表示存在重复内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis数据库" tabindex="-1"><a class="header-anchor" href="#redis数据库" aria-hidden="true">#</a> Redis数据库</h3>
<p>tips:内存爆满问题，注意要及时备份</p>
<p><strong>广度优先算法</strong></p>
<p>每一层都取完再取下一层</p>
<img src="@source/Blog/2022/PythonCrawl.assets/image-20221119221146502.png" alt="image-20221119221146502" style="zoom:50%;" />
<p><strong>深度优先算法</strong></p>
<p>从开始取到最后一个节点</p>
<img src="@source/Blog/2022/PythonCrawl.assets/image-20221119221250774.png" alt="image-20221119221250774" style="zoom:50%;" />
<h3 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> ajax</h3>
<p>百度搜索图片<img src="@source/Blog/2022/Crawl/PythonCrawl.assets/image-20221120181835251.png" alt="image-20221120181835251" style="zoom:50%;" /></p>
<p>往下滑动的同时，会看到左边数据有增加，但是页面并不会改变</p>
<h3 id="字体反爬虫" tabindex="-1"><a class="header-anchor" href="#字体反爬虫" aria-hidden="true">#</a> 字体反爬虫</h3>
<p>实习僧网页：</p>
<img src="@source/Blog/2022/PythonCrawl.assets/image-20221120182927938.png" alt="image-20221120182927938" style="zoom:50%;" />
<p>由于对方设置了css文件规则，我们爬取到的数据内容只会显示，xx天xx周</p>
<p>规则？本地电脑：11-a  对方电脑: 11-B</p>
<h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h2>
<p><strong>1.URL和URI</strong>，基本相等</p>
<p>豆瓣有自己的图标，指向唯一访问模式</p>
<p>查看图标方式：网址+favicon.ico</p>
<p>如下图所示</p>
<img src="@source/Blog/2022/PythonCrawl.assets/image-20221120183346849.png" alt="image-20221120183346849" style="zoom:50%;" />
<p><strong>2.超文本</strong></p>
<p>检查-Elements当前渲染后</p>
<p>源代码-没有经过渲染的，一些css内容。。。。</p>
<h2 id="http-https" tabindex="-1"><a class="header-anchor" href="#http-https" aria-hidden="true">#</a> HTTP&amp;HTTPS</h2>
<p>HTTPS 的安全基础是 SSL，因此通过它传输的内容都是经过 SSL 加密的，它的主要作用可以分为两种：</p>
<p>1.建立一个信息安全通道，来保证数据传输的安全。</p>
<p>2.确认网站的真实性，凡是使用了 HTTPS 的网站，都可以通过点击浏览器地址栏的锁头标志来查看网站认证之后的真实信息，也可以通过 CA 机构颁发的安全签章来查询。</p>
<p>HTTPS 的安全基础是 SSL，因此通过它传输的内容都是经过 SSL 加密的，它的主要作用可以分为两种：</p>
<p>1.建立一个信息安全通道，来保证数据传输的安全。</p>
<p>2.确认网站的真实性，凡是使用了 HTTPS 的网站，都可以通过点击浏览器地址栏的锁头标志来查看网站认证之后的真实信息，也可以通过 CA 机构颁发的安全签章来查询。</p>
<p>不通过SSL加密，通过浏览器访问网站时就会出现“该网站不安全”的提示，失去客户访问流量</p>
<h3 id="http请求过程" tabindex="-1"><a class="header-anchor" href="#http请求过程" aria-hidden="true">#</a> HTTP请求过程</h3>
<img src="@source/Blog/2022/PythonCrawl.assets/image-20221120205744260.png" alt="image-20221120205744260" style="zoom:50%;" />
<img src="@source/Blog/2022/PythonCrawl.assets/image-20221120205815329.png" alt="image-20221120205815329"  />
<p>第一列 Name：请求的名称，一般会将 URL 的最后一部分内容当作名称。</p>
<p>第二列 Status：响应的状态码，这里显示为 200，代表响应是正常的。通过状态码，我们可以判断发送了请求之后是否得到了正常的响应。</p>
<p>第三列 Type：请求的文档类型。这里为 document，代表我们这次请求的是一个 HTML 文档，内容就是一些 HTML 代码。</p>
<p>第四列 Initiator：请求源。用来标记请求是由哪个对象或进程发起的。</p>
<p>第五列 Size：从服务器下载的文件和请求的资源大小。如果是从缓存中取得的资源，则该列会显示 from cache。</p>
<p>第六列 Time：发起请求到获取响应所用的总时间。</p>
<p>第七列 Waterfall：网络请求的可视化瀑布流。</p>
<h3 id="post和get区别是什么" tabindex="-1"><a class="header-anchor" href="#post和get区别是什么" aria-hidden="true">#</a> post和get区别是什么？</h3>
<p>都是获得数据，get是下载，得到内容。用户登陆是使用post,因为get会显示登陆的密码信息，不安全</p>
<img src="@source/Blog/2022/PythonCrawl.assets/image-20221120213922697.png" alt="image-20221120213922697" style="zoom: 50%;" />
<h3 id="请求头" tabindex="-1"><a class="header-anchor" href="#请求头" aria-hidden="true">#</a> 请求头</h3>
<p>Accept：请求报头域，用于指定客户端可接受哪些类型的信息。</p>
<p>Accept-Language：指定客户端可接受的语言类型。</p>
<p>Accept-Encoding：指定客户端可接受的内容编码。</p>
<p>Host：用于指定请求资源的主机 IP 和端口号，其内容为请求 URL 的原始服务器或网关的位置。从 HTTP 1.1 版本开始，请求必须包含此内容。</p>
<p>Cookie：也常用复数形式 Cookies，这是网站为了辨别用户进行会话跟踪而存储在用户本地的数据。它的主要功能是维持当前访问会话。例如，我们输入用户名和密码成功登录某个网站后，服务器会用会话保存登录状态信息，后面我们每次刷新或请求该站点的其他页面时，会发现都是登录状态，这就是 Cookies 的功劳。Cookies 里有信息标识了我们所对应的服务器的会话，每次浏览器在请求该站点的页面时，都会在请求头中加上 Cookies 并将其发送给服务器，服务器通过 Cookies 识别出是我们自己，并且查出当前状态是登录状态，所以返回结果就是登录之后才能看到的网页内容。</p>
<p>Referer：此内容用来标识这个请求是从哪个页面发过来的，服务器可以拿到这一信息并做相应的处理，如做来源统计、防盗链处理等。</p>
<p>User-Agent：简称 UA，它是一个特殊的字符串头，可以使服务器识别客户使用的操作系统及版本、浏览器及版本等信息。在做爬虫时加上此信息，可以伪装为浏览器；如果不加，很可能会被识别出为爬虫。</p>
<p>Content-Type：也叫互联网媒体类型（Internet Media Type）或者 MIME 类型，在 HTTP 协议消息头中，它用来表示具体请求中的媒体类型信息。例如，text/html 代表 HTML 格式，image/gif 代表 GIF 图片，application/json 代表 JSON 类型，更多对应关系可以查看此对照表：</p>
<h3 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h3>
<img src="@source/Blog/2022/PythonCrawl.assets/Cgq2xl5XTQSAfWsUAAa-jFIsTTw064.2d57e938.png" alt="img" style="zoom: 33%;" />
<h3 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> session</h3>
<h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h3>
<p>记住用户信息</p>
<h3 id="dns" tabindex="-1"><a class="header-anchor" href="#dns" aria-hidden="true">#</a> DNS</h3>
<p>浏览器缓存</p>
<p><img src="@source/Blog/2022/PythonCrawl.assets/image-20221121002817352.png" alt="image-20221121002817352" loading="lazy"></p>
<h3 id="页面呈现" tabindex="-1"><a class="header-anchor" href="#页面呈现" aria-hidden="true">#</a> 页面呈现</h3>
<p><img src="@source/Blog/2022/PythonCrawl.assets/image-20221121005418250.png" alt="image-20221121005418250" loading="lazy"></p>
<h3 id="网页匹配css-内容" tabindex="-1"><a class="header-anchor" href="#网页匹配css-内容" aria-hidden="true">#</a> 网页匹配css 内容</h3>
<p><strong>tips:先用选择器定位要匹配的内容，再从它的上一级开始匹配</strong></p>
<p>案例1：</p>
<p><img src="@source/Blog/2022/PythonCrawl.assets/image-20221121175216475.png" alt="image-20221121175216475" loading="lazy"></p>
<p>案例2：</p>
<p><img src="@source/Blog/2022/PythonCrawl.assets/image-20221121175353470.png" alt="image-20221121175353470" loading="lazy"></p>
<p><strong>点击上下箭头检查匹配的内容</strong></p>
<p><img src="@source/Blog/2022/PythonCrawl.assets/image-20221121175421903.png" alt="image-20221121175421903" loading="lazy"></p>
<h2 id="线程" tabindex="-1"><a class="header-anchor" href="#线程" aria-hidden="true">#</a> 线程</h2>
<h3 id="全局解释器" tabindex="-1"><a class="header-anchor" href="#全局解释器" aria-hidden="true">#</a> 全局解释器</h3>
<img src="@source/Blog/2022/PythonCrawl.assets/image-20221122150529578.png" alt="image-20221122150529578" style="zoom:67%;" />
<p><img src="@source/Blog/2022/PythonCrawl.assets/image-20221122150602191.png" alt="image-20221122150602191" loading="lazy"></p>
<p>一秒钟运行一个线程（一个程序）</p>
<p>如上图所示，thread1和thread2,GIL锁被线程一拿走，且GIL锁只有一个，经过操作系统，在 cpu里执行，时间到了后，释放GIL锁，此时线程2拿到锁，跟线程1 的执行顺序一样。所以即使有2个程序在运行，但线程只有一个。若有其他线程，则会卡在python解释器里。</p>
<p><img src="@source/Blog/2022/PythonCrawl.assets/image-20221122151935405.png" alt="image-20221122151935405" loading="lazy"></p>
<h3 id="多线程" tabindex="-1"><a class="header-anchor" href="#多线程" aria-hidden="true">#</a> 多线程</h3>
<p><img src="@source/Blog/2022/PythonCrawl.assets/image-20221122154327669.png" alt="image-20221122154327669" loading="lazy"></p>
<h3 id="进程" tabindex="-1"><a class="header-anchor" href="#进程" aria-hidden="true">#</a> 进程</h3>
<p>进程定义：一个进程可以做很多事情，并且同时做，互不干扰。</p>
<p>线程：操作系统中最小的调度单位。</p>
<p><strong>并发</strong>：同一时刻只有一条指令执行，a-&gt;b,经过一会儿时间，b-&gt;a,同时推进，a和b互相切换，速度很快。</p>
<p>并发在一核处理器的电脑中也能运行。</p>
<p><strong>并行</strong>：需要多个处理器，电脑只有一核处理器是不可以的；多个cpu中，同一时刻会有一个线程在运行就是并行</p>
<img src="@source/Blog/2022/PythonCrawl.assets/image-20221122160228431.png" alt="image-20221122160228431" style="zoom:50%;" />
<h3 id="多线程场景" tabindex="-1"><a class="header-anchor" href="#多线程场景" aria-hidden="true">#</a> 多线程场景</h3>
<p>IO密集型，适合爬虫</p>
<p>CPU密集型不适合多线程</p>
<p>1.单线程</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">def</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        i<span class="token operator">+=</span>i
    <span class="token keyword">return</span>
<span class="token comment">#并不使用任何线程</span>
<span class="token comment">#time:0.3134646415710449</span>
<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    start_time<span class="token operator">=</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span>start_time<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.多线程</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> time<span class="token punctuation">,</span>threading
<span class="token keyword">def</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        i<span class="token operator">+=</span><span class="token number">1</span>
    <span class="token keyword">return</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    start_time<span class="token operator">=</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">#当前时间</span>
    thread_name_time<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">#创建字典的目的，存储每一个线程以及他所对应的时间，key+value</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token comment">#每个线程顺序执行</span>
        thread<span class="token operator">=</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>start<span class="token punctuation">)</span><span class="token comment">#target写你要多线程运行的函数，不用加括号；加了括号调用的是函数运行完成后的值，此时每个线程中不能自己调用start()函数</span>
        thread<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#开启线程后就要开始运行</span>
        thread_name_time<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>thread <span class="token comment">#将数据添加入字典，用i做key值，目的，顺序执行</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        thread_name_time<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">#join目的：线程执行完才会执行后续部分</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span>start_time<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#time:0.2631237506866455</span>
<span class="token comment">#和test1速度相差并不大，</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.非守护线程</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> time<span class="token punctuation">,</span>threading

<span class="token keyword">def</span> <span class="token function">start</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token comment">#当前线程的名字</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>is_alive<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">#当前线程是否存活</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>ident<span class="token punctuation">)</span><span class="token comment">#当前线程的编号</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"start"</span><span class="token punctuation">)</span>
<span class="token comment">#要用多线中的哪个函数，target=函数，name为名字</span>
<span class="token comment"># 不命名就是ident</span>
thread<span class="token operator">=</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>start<span class="token punctuation">,</span>name<span class="token operator">=</span><span class="token string">"the_first_thread"</span><span class="token punctuation">,</span>args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#声明结束后要启动</span>
thread<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">#主线程不等待它执行完再执行stop,</span>
thread<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"stop"</span><span class="token punctuation">)</span>
<span class="token comment">#非守护线程</span>
<span class="token comment">#主线程运行完才会运行子线程内容</span>
<span class="token comment">#不会随着主线程结束而结束，</span>
<span class="token comment">#join输出前</span>
<span class="token comment">#start</span>
<span class="token comment">#stop</span>
<span class="token comment">#the_first_thread</span>
<span class="token comment">#True</span>
<span class="token comment">#40128</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
<span class="token comment">#join输出后</span>
<span class="token comment"># start</span>
<span class="token comment"># the_first_thread</span>
<span class="token comment"># True</span>
<span class="token comment"># 4952</span>
<span class="token comment"># stop</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> threading<span class="token punctuation">,</span>time

<span class="token keyword">def</span> <span class="token function">target</span><span class="token punctuation">(</span>second<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'Threading </span><span class="token interpolation"><span class="token punctuation">{</span>threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> is run.'</span></span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'Threading </span><span class="token interpolation"><span class="token punctuation">{</span>threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> sleep </span><span class="token interpolation"><span class="token punctuation">{</span>second<span class="token punctuation">}</span></span><span class="token string">s'</span></span><span class="token punctuation">)</span><span class="token comment">#沉睡了几秒</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>second<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'threading</span><span class="token interpolation"><span class="token punctuation">{</span>threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> ended'</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'Threading </span><span class="token interpolation"><span class="token punctuation">{</span>threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> is running'</span></span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token comment">#元组也可</span>
    t<span class="token operator">=</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>target<span class="token punctuation">,</span>args<span class="token operator">=</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    t<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">#等待前面执行完</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'Threading </span><span class="token interpolation"><span class="token punctuation">{</span>threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> is ended'</span></span><span class="token punctuation">)</span>
<span class="token comment">#输出   join前</span>
<span class="token comment"># #Threading MainThread is running</span>
<span class="token comment"># Threading Thread-1 (target) is run.</span>
<span class="token comment"># Threading Thread-1 (target) sleep 1s</span>
<span class="token comment"># Threading Thread-2 (target) is run.</span>
<span class="token comment"># Threading Thread-2 (target) sleep 5s</span>
<span class="token comment"># Threading MainThread is ended</span>
<span class="token comment"># threadingThread-1 (target) ended</span>
<span class="token comment"># threadingThread-2 (target) ended</span>
<span class="token comment">#join</span>
<span class="token comment"># Threading MainThread is running</span>
<span class="token comment"># Threading Thread-1 (target) is run.</span>
<span class="token comment"># Threading Thread-1 (target) sleep 1s</span>
<span class="token comment"># threadingThread-1 (target) ended</span>
<span class="token comment"># Threading Thread-2 (target) is run.</span>
<span class="token comment"># Threading Thread-2 (target) sleep 5s</span>
<span class="token comment"># threadingThread-2 (target) ended</span>
<span class="token comment"># Threading MainThread is ended</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.守护线程</p>
<p>定义：若该线程被设置为守护线程，在主线程结束后即使该线程还没有运行完它也会被强制结束</p>
<p>守护线程设置方法：在start之前添加 daemon=True</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">target</span><span class="token punctuation">(</span>second<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'Threading </span><span class="token interpolation"><span class="token punctuation">{</span>threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">is run'</span></span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'Threading </span><span class="token interpolation"><span class="token punctuation">{</span>threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> is sleep </span><span class="token interpolation"><span class="token punctuation">{</span>second<span class="token punctuation">}</span></span><span class="token string">s'</span></span><span class="token punctuation">)</span><span class="token comment">#沉睡的秒数</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>second<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'threading</span><span class="token interpolation"><span class="token punctuation">{</span>threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> ended'</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'Threading</span><span class="token interpolation"><span class="token punctuation">{</span>threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> is running'</span></span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    l<span class="token operator">=</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>target<span class="token punctuation">,</span>args<span class="token operator">=</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    l<span class="token punctuation">.</span>daemon<span class="token operator">=</span><span class="token boolean">True</span>
    l<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'Threading </span><span class="token interpolation"><span class="token punctuation">{</span>threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> is ended'</span></span><span class="token punctuation">)</span>
<span class="token comment">#输出</span>
<span class="token comment"># ThreadingMainThread is running</span>
<span class="token comment"># Threading Thread-1 (target)is run</span>
<span class="token comment"># Threading Thread-1 (target) is sleep 1s</span>
<span class="token comment"># Threading Thread-2 (target)is run</span>
<span class="token comment"># Threading Thread-2 (target) is sleep 6s</span>
<span class="token comment"># Threading MainThread is ended</span>

<span class="token comment">#原先应该是显示thread-2 ended后，才显示 Threading MainThread is ended</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.互斥锁（浅浅了解一下）</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> threading
<span class="token keyword">import</span> time

count <span class="token operator">=</span> <span class="token number">0</span>


<span class="token keyword">class</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        threading<span class="token punctuation">.</span>Thread<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">global</span> count
        temp <span class="token operator">=</span> count <span class="token operator">+</span> <span class="token number">1</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.001</span><span class="token punctuation">)</span>
        count <span class="token operator">=</span> temp


threads <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    thread <span class="token operator">=</span> MyThread<span class="token punctuation">(</span><span class="token punctuation">)</span>
    thread<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    threads<span class="token punctuation">.</span>append<span class="token punctuation">(</span>thread<span class="token punctuation">)</span>

<span class="token keyword">for</span> thread <span class="token keyword">in</span> threads<span class="token punctuation">:</span>
    thread<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'Final count: </span><span class="token interpolation"><span class="token punctuation">{</span>count<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
<span class="token comment">#输出</span>
<span class="token comment">#Final count: 69 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 count 这个值是共享的，每个线程都可以在执行 temp = count 这行代码时拿到当前 count 的值，但是这些线程中的一些线程可能是并发或者并行执行的，这就导致不同的线程拿到的可能是同一个 count 值，最后导致有些线程的 count 的加 1 操作并没有生效，导致最后的结果偏小。</p>
<p>所以，如果多个线程同时对某个数据进行读取或修改，就会出现不可预料的结果。为了避免这种情况，我们需要对多个线程进行同步，要实现同步，我们可以对需要操作的数据进行加锁保护，这里就需要用到 <code v-pre>threading.Lock</code> 了</p>
<p>5.1加互斥锁</p>
<p><strong>tips:注意最后释放锁，否则会造成死锁</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> threading
<span class="token keyword">import</span> time

lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 创建一个最简单的 读写锁</span>
number <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">def</span> <span class="token function">addNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> number
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        lock<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 先获取</span>
        number <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token comment"># 中间的这个过程让他强制有这个计算和赋值的过程，也就是让他执行完这两个操作，后再切换。</span>
        <span class="token comment"># 这样就不会完成计算后，还没来的及赋值就跑到下一个去了。</span>
        <span class="token comment"># 这样也就防止了线程不安全的情况</span>
        lock<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 再释放</span>

<span class="token keyword">def</span> <span class="token function">downNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> number
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        lock<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
        number <span class="token operator">-=</span> <span class="token number">1</span>
        lock<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"start"</span><span class="token punctuation">)</span> <span class="token comment"># 输出一个开始</span>
thread <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target <span class="token operator">=</span> addNumber<span class="token punctuation">)</span> <span class="token comment">#开启一个线程（声明）</span>
thread2 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target <span class="token operator">=</span> downNumber<span class="token punctuation">)</span> <span class="token comment"># 开启第二个线程（声明）</span>
thread<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 开始</span>
thread2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 开始</span>
thread<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
thread2<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># join 阻塞在这里，直到我们得阻塞线程执行完毕才会向下执行</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"外"</span><span class="token punctuation">,</span> number<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"stop"</span><span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
start
外 <span class="token number">0</span>
stop

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.线程池</p>
<p>可以提前定义大概需要多少线程</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> threadpool

<span class="token keyword">def</span> <span class="token function">get_html</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
start_time<span class="token operator">=</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#建立线程池</span>
urls<span class="token operator">=</span><span class="token punctuation">[</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
pool<span class="token operator">=</span>threadpool<span class="token punctuation">.</span>ThreadPool<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">#提交任务给线程池</span>
requests<span class="token operator">=</span>threadpool<span class="token punctuation">.</span>makeRequests<span class="token punctuation">(</span>get_html<span class="token punctuation">,</span>urls<span class="token punctuation">)</span>
<span class="token comment">#</span>
<span class="token keyword">for</span> req <span class="token keyword">in</span> requests<span class="token punctuation">:</span>
    pool<span class="token punctuation">.</span>putRequest<span class="token punctuation">(</span>req<span class="token punctuation">)</span>
pool<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多进程" tabindex="-1"><a class="header-anchor" href="#多进程" aria-hidden="true">#</a> 多进程</h3>
<p>回顾：一个进程中有多个线程，同一时刻只能有一个线程运行，在python中的多线程并不能完全发挥多核优势。</p>
<p>对于多进程来说，每个进程都有属于自己的GIL,多进程运行不受GIL影响，所以它能更好地发挥多核 的优势。</p>
<p>1.创建进程比较消耗资源</p>
<p>2.多线程和多进程相互结合比较适合大型爬虫项目</p>
<p>3.多进程的好处，多进程中多个线程可以同时运行</p>
<p><strong>4.多进程是并发执行</strong></p>
<p><strong>多进程和多线程的对比</strong></p>
<p>对于爬虫这种IO密集型任务来说，多线程和多进程影响差别不大。但是对于计算密集型任务，多进程的多核运行效率会有较高的提升。</p>
<p>python内置库中实现多进程的方法：multiprocessing</p>
<img src="@source/Blog/2022/PythonCrawl.assets/image-20221125103423866.png" alt="image-20221125103423866" style="zoom: 67%;" />
<p><strong>process类</strong></p>
<p>多进程示例：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span>  multiprocessing
<span class="token comment">#多进程</span>
<span class="token keyword">def</span> <span class="token function">process</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'Process:</span><span class="token interpolation"><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>

    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        p <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>process<span class="token punctuation">,</span>args<span class="token operator">=</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#输出，几乎是同时输出</span>
<span class="token comment"># Process:1</span>
<span class="token comment"># Process:0</span>
<span class="token comment"># Process:2</span>
<span class="token comment"># Process:3</span>
<span class="token comment"># Process:4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在cpu核数足够的情况下，不同的进程会分配给不同的cpu核来运行，实现真正的并行执行</p>
<p>在 multiprocessing中有提供方法：cpu_conut来获取当前机器 cpu 的核心数量，通过  active_children 方法来获取当前还在运行的所有进程。</p>
<p>示例：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> multiprocessing<span class="token punctuation">,</span>time

<span class="token keyword">def</span> <span class="token function">process</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>index<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"Process:</span><span class="token interpolation"><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        p<span class="token operator">=</span>multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>process<span class="token punctuation">,</span>args<span class="token operator">=</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"cpu number:</span><span class="token interpolation"><span class="token punctuation">{</span>multiprocessing<span class="token punctuation">.</span>cpu_count<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
          <span class="token comment">#cpu内核个数</span>
    <span class="token keyword">for</span> k <span class="token keyword">in</span> multiprocessing<span class="token punctuation">.</span>active_children<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment">#子进程，类似多线程中的子线程</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"child process name:</span><span class="token interpolation"><span class="token punctuation">{</span>k<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> id : </span><span class="token interpolation"><span class="token punctuation">{</span>k<span class="token punctuation">.</span>pid<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"process ended"</span><span class="token punctuation">)</span>
<span class="token comment">#输出</span>
<span class="token comment"># cpu number:12</span>
<span class="token comment"># child process name:Process-1 id : 76188</span>
<span class="token comment"># child process name:Process-3 id : 73780</span>
<span class="token comment"># child process name:Process-2 id : 63316</span>
<span class="token comment"># child process name:Process-5 id : 74288</span>
<span class="token comment"># child process name:Process-4 id : 75304</span>
<span class="token comment"># process ended</span>
<span class="token comment"># Process:0</span>
<span class="token comment"># Process:1</span>
<span class="token comment"># Process:2</span>
<span class="token comment"># Process:3</span>
<span class="token comment"># Process:4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>守护进程</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Process
<span class="token keyword">import</span> time

<span class="token keyword">class</span> <span class="token class-name">MyProcess</span><span class="token punctuation">(</span>Process<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>loop<span class="token punctuation">)</span><span class="token punctuation">:</span>
        Process<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>loop<span class="token operator">=</span>loop
    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> count <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>loop<span class="token punctuation">)</span><span class="token punctuation">:</span>
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"pid:</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>pid<span class="token punctuation">}</span></span><span class="token string"> LoopCount : </span><span class="token interpolation"><span class="token punctuation">{</span>count<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    <span class="token comment"># print("the main process start")</span>
    process<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        p<span class="token operator">=</span>MyProcess<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token comment"># process.append(i)</span>
        p<span class="token punctuation">.</span>daemon<span class="token operator">=</span><span class="token boolean">True</span>
        p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># for p in process:</span>
    <span class="token comment">#     p.join(1)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"main process ended"</span><span class="token punctuation">)</span>
<span class="token comment">#输出</span>
<span class="token comment">#main process ended</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述程序中，主进程只输出了字符串就结束，同时子进程也结束，可以有效地防止无控制生成子进程，主进程结束后，子进程也会关闭，避免独立的子进程运行。</p>
<p>等待子进程运行完后主进程再结束</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Process
<span class="token keyword">import</span> time

<span class="token keyword">class</span> <span class="token class-name">MyProcess</span><span class="token punctuation">(</span>Process<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>loop<span class="token punctuation">)</span><span class="token punctuation">:</span>
        Process<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>loop<span class="token operator">=</span>loop
    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> count <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>loop<span class="token punctuation">)</span><span class="token punctuation">:</span>
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"pid:</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>pid<span class="token punctuation">}</span></span><span class="token string"> LoopCount : </span><span class="token interpolation"><span class="token punctuation">{</span>count<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    <span class="token comment"># print("the main process start")</span>
    process<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        p<span class="token operator">=</span>MyProcess<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        process<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        p<span class="token punctuation">.</span>daemon<span class="token operator">=</span><span class="token boolean">True</span>
        p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
     <span class="token keyword">for</span> p <span class="token keyword">in</span> process<span class="token punctuation">:</span>
         p<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token comment">#join方法中加上父进程等待子进程运行的最长时间，预防主进程无限等待子进程</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"main process ended"</span><span class="token punctuation">)</span>
<span class="token comment">#输出</span>
<span class="token comment">#the main process start</span>
<span class="token comment">#pid:79156 LoopCount : 0</span>
<span class="token comment">#pid:80512 LoopCount : 0</span>
<span class="token comment">#pid:80512 LoopCount : 1pid:79156 LoopCount : 1</span>

<span class="token comment">#pid:80512 LoopCount : 2pid:79156 LoopCount : 2</span>

<span class="token comment">#main process ended</span>
<span class="token comment">#父进程等待子进程结束后再结束</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>终止进程</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> multiprocessing<span class="token punctuation">,</span>time

<span class="token keyword">def</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"starting"</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"finshed"</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    p<span class="token operator">=</span>multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>process<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"before:"</span><span class="token punctuation">,</span>p<span class="token punctuation">,</span>p<span class="token punctuation">.</span>is_alive<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"during"</span><span class="token punctuation">,</span>p<span class="token punctuation">,</span>p<span class="token punctuation">.</span>is_alive<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    p<span class="token punctuation">.</span>terminate<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"terminate:"</span><span class="token punctuation">,</span>p<span class="token punctuation">,</span>p<span class="token punctuation">.</span>is_alive<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    p<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"joined:"</span><span class="token punctuation">,</span>p<span class="token punctuation">,</span>p<span class="token punctuation">.</span>is_alive<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#输出</span>
<span class="token comment"># before: &lt;Process name='Process-1' parent=71916 initial> False</span>
<span class="token comment"># during &lt;Process name='Process-1' pid=68076 parent=71916 started> True</span>
<span class="token comment"># terminate: &lt;Process name='Process-1' pid=68076 parent=71916 started> True</span>
<span class="token comment"># joined: &lt;Process name='Process-1' pid=68076 parent=71916 stopped exitcode=-SIGTERM> False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进程互斥锁</p>
<p>1.不加锁的示例</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span>  Process<span class="token punctuation">,</span>Lock
<span class="token keyword">import</span> time

<span class="token keyword">class</span> <span class="token class-name">Myprocess</span><span class="token punctuation">(</span>Process<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>loop<span class="token punctuation">,</span>lock<span class="token punctuation">)</span><span class="token punctuation">:</span>
        Process<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>loop<span class="token operator">=</span>loop
        self<span class="token punctuation">.</span>lock<span class="token operator">=</span>lock
    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token punctuation">:</span>
        <span class="token keyword">for</span> count <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>loop<span class="token punctuation">)</span><span class="token punctuation">:</span>
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"pid:</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>pid<span class="token punctuation">}</span></span><span class="token string">  LoopCount:</span><span class="token interpolation"><span class="token punctuation">{</span>count<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    lock<span class="token operator">=</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        p<span class="token operator">=</span>Myprocess<span class="token punctuation">(</span>i<span class="token punctuation">,</span>lock<span class="token punctuation">)</span>
        p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#输出</span>

<span class="token comment"># pid:57708  LoopCount:0</span>
<span class="token comment"># pid:61308  LoopCount:0</span>
<span class="token comment"># pid:75420  LoopCount:0</span>
<span class="token comment"># pid:75748  LoopCount:0</span>
<span class="token comment"># pid:72032  LoopCount:0</span>
<span class="token comment"># pid:57708  LoopCount:1</span>
<span class="token comment"># pid:75420  LoopCount:1pid:61308  LoopCount:1</span>
<span class="token comment"># </span>
<span class="token comment"># pid:75748  LoopCount:1</span>
<span class="token comment"># pid:72032  LoopCount:1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述程序中可以看出，有不换行的输出</p>
<p>如何换行输出？</p>
<p>示例2：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span>  Process<span class="token punctuation">,</span>Lock
<span class="token keyword">import</span> time

<span class="token keyword">class</span> <span class="token class-name">Myprocess</span><span class="token punctuation">(</span>Process<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>loop<span class="token punctuation">,</span>lock<span class="token punctuation">)</span><span class="token punctuation">:</span>
        Process<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>loop<span class="token operator">=</span>loop
        self<span class="token punctuation">.</span>lock<span class="token operator">=</span>lock
    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token punctuation">:</span>
        <span class="token keyword">for</span> count <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>loop<span class="token punctuation">)</span><span class="token punctuation">:</span>
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>lock<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"pid:</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>pid<span class="token punctuation">}</span></span><span class="token string">  LoopCount:</span><span class="token interpolation"><span class="token punctuation">{</span>count<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>lock<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    lock<span class="token operator">=</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        p<span class="token operator">=</span>Myprocess<span class="token punctuation">(</span>i<span class="token punctuation">,</span>lock<span class="token punctuation">)</span>
        p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#输出</span>
<span class="token comment">#pid:35836  LoopCount:0</span>
<span class="token comment">#pid:83824  LoopCount:0</span>
<span class="token comment">#pid:80204  LoopCount:0</span>
<span class="token comment">#pid:73364  LoopCount:0</span>
<span class="token comment">#pid:78224  LoopCount:0</span>
<span class="token comment">#pid:83824  LoopCount:1</span>
<span class="token comment">#pid:80204  LoopCount:1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


