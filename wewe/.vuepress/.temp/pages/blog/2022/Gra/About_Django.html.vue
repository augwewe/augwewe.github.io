<template><div><h2 id="django" tabindex="-1"><a class="header-anchor" href="#django" aria-hidden="true">#</a> Django</h2>
<h3 id="为什么要用虚拟环境" tabindex="-1"><a class="header-anchor" href="#为什么要用虚拟环境" aria-hidden="true">#</a> 为什么要用虚拟环境？</h3>
<p>在一台电脑上，想开发多个不同的项目， 需要用到同一个包的不同版本， 如果使用上面的命令， 在同一个目录下安装或者更新， 新版本会覆盖以前的版本， 其它的项目就无法运行了。</p>
<p>在使用django开发项目的时候，一个环境只能对应一个项目，因为这样可以方便管理第三方包，每个项目使用的第三方可能不一样，若不安装虚拟环境、都装在系统里面，每次项目加载都需要加载所有的安装包，影响效率。</p>
<h3 id="_1-django环境搭建" tabindex="-1"><a class="header-anchor" href="#_1-django环境搭建" aria-hidden="true">#</a> 1.Django环境搭建</h3>
<p>创建文件夹‘MY_Web'</p>
<p>进入此文件夹路径下输入以下命令</p>
<p>python -m venv blog_venv(Django)</p>
<p>blog_venv/Scripts/activate</p>
<p>pip list</p>
<p>显示Django版本信息</p>
<h2 id="_2-创建项目" tabindex="-1"><a class="header-anchor" href="#_2-创建项目" aria-hidden="true">#</a> 2.创建项目</h2>
<p>pip install django</p>
<p>django-admin startproject my_project_blog</p>
<p>pycharm打开创建的’My_Web'文件</p>
<p>python <a href="http://manage.py" target="_blank" rel="noopener noreferrer">manage.py<ExternalLinkIcon/></a> runserver</p>
<p>检查是否成功创建</p>
<p>teriminal中输入：python <a href="http://manage.py" target="_blank" rel="noopener noreferrer">manage.py<ExternalLinkIcon/></a> migrate (数据迁移)</p>
<p>python <a href="http://manage.py" target="_blank" rel="noopener noreferrer">manage.py<ExternalLinkIcon/></a> startapp blog_app(可以看到目录中出现blog_app文件夹)</p>
<img src="@source/Blog/2022/Gra/About_Django.assets/image-20230217215211120.png" alt="image-20230217215211120" style="zoom: 67%;" />
<p>views.py中定义函数，返回页面内容</p>
<p>导入HttpResponse类</p>
<p>在blog_app中创建urls.py</p>
<p>urls.py中定义链接格式</p>
<p><img src="@source/Blog/2022/Gra/About_Django.assets/image-20230217220046336.png" alt="image-20230217220046336" loading="lazy"></p>
<p><img src="@source/Blog/2022/Gra/About_Django.assets/image-20230217220059644.png" alt="image-20230217220059644" loading="lazy"></p>
</div></template>


