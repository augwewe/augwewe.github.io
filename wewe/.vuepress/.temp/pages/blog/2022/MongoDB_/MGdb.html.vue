<template><div><h2 id="mongodb-6-0教程" tabindex="-1"><a class="header-anchor" href="#mongodb-6-0教程" aria-hidden="true">#</a> MongoDB 6.0教程</h2>
<h3 id="_1-1下载mongodb" tabindex="-1"><a class="header-anchor" href="#_1-1下载mongodb" aria-hidden="true">#</a> 1.1下载MongoDB</h3>
<p><a href="https://www.mongodb.com/try/download/community" target="_blank" rel="noopener noreferrer">https://www.mongodb.com/try/download/community<ExternalLinkIcon/></a></p>
<p><img src="@source/Blog/2022/MongoDB_/MGdb.assets/image-20230103134748417.png" alt="image-20230103134748417"></p>
<p>下载对应的版本</p>
<p><img src="@source/Blog/2022/MongoDB_/MGdb.assets/image-20230103134838473.png" alt="image-20230103134838473"></p>
<p>选custom可自定义安装路径，complete默认路径</p>
<p>后续点击next,，选择不勾选(<em>Install MongoDB Compass</em>),直至install，勾选后下载安装速度会较慢些。</p>
<h3 id="_1-2环境变量配置" tabindex="-1"><a class="header-anchor" href="#_1-2环境变量配置" aria-hidden="true">#</a> 1.2环境变量配置</h3>
<p>安装完成后进行环境变量的配置</p>
<p>进入高级系统设置</p>
<img src="@source/Blog/2022/MongoDB_/MGdb.assets/image-20230103135338042.png" alt="image-20230103135338042" style="zoom: 67%;" />
<img src="@source/Blog/2022/MongoDB_/MGdb.assets/image-20230103135908912.png" alt="image-20230103135908912" style="zoom:50%;" />
<p>添加路径为MongoDB安装的路径&quot; .............\bin&quot;</p>
<img src="@source/Blog/2022/MongoDB_/MGdb.assets/image-20230103144010900.png" alt="image-20230103144010900" style="zoom:67%;" />
<h3 id="_1-3-下载mongodb-shell" tabindex="-1"><a class="header-anchor" href="#_1-3-下载mongodb-shell" aria-hidden="true">#</a> 1.3 下载MongoDB.Shell</h3>
<p>进入<a href="https://www.mongodb.com/try/download/shell" target="_blank" rel="noopener noreferrer">https://www.mongodb.com/try/download/shell<ExternalLinkIcon/></a></p>
<img src="@source/Blog/2022/MongoDB_/MGdb.assets/image-20230103143423296.png" alt="image-20230103143423296" style="zoom:50%;" />
<p>下载完成后，打开其bin文件夹</p>
<img src="@source/Blog/2022/MongoDB_/MGdb.assets/image-20230103143532938.png" alt="image-20230103143532938" style="zoom: 67%;" />
<img src="@source/Blog/2022/MongoDB_/MGdb.assets/image-20230103143609407.png" alt="image-20230103143609407" style="zoom: 67%;" />
<p>复制以上两个文件至MongoDB的bin文件中</p>
<img src="@source/Blog/2022/MongoDB_/MGdb.assets/image-20230103143923066.png" alt="image-20230103143923066" style="zoom:67%;" />
<p>复制完成后，打开cmd,首先输入mongod</p>
<img src="@source/Blog/2022/MongoDB_/MGdb.assets/image-20230103144432017.png" alt="image-20230103144432017" style="zoom:67%;" />
<p>再输入mongosh</p>
<img src="@source/Blog/2022/MongoDB_/MGdb.assets/image-20230103144530485.png" alt="image-20230103144530485" style="zoom:67%;" />
<p>输入 show dbs(查询所有库)</p>
<p><img src="@source/Blog/2022/MongoDB_/MGdb.assets/image-20230103144654299.png" alt="image-20230103144654299"></p>
<p>admin，config,local为自带的三个库，first为自定义的库</p>
<h3 id="_1-4-启动mongodb-服务" tabindex="-1"><a class="header-anchor" href="#_1-4-启动mongodb-服务" aria-hidden="true">#</a> 1.4 启动MongoDB 服务</h3>
<p>以管理员权限进入cmd</p>
<p>输入 net start MongoDB</p>
<img src="@source/Blog/2022/MongoDB_/MGdb.assets/image-20230103185954154.png" alt="image-20230103185954154" style="zoom:67%;" />
</div></template>


