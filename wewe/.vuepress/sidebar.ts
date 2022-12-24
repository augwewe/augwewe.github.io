import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "如何使用",
      icon: "creative",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
  "/Blog/2022/Gra":[
    {
      text:"NewsProject",
      icon:" ",
      children:["Template_graduate.html","Try_Exception.html"]
    },
  ],
  "/Blog/2022/Crawl/foundation":[
    {
      text:"网络爬虫技术原理",
      icon:" ",
      children:["AskUrl_Temp.html","rule.html"]
    },
  ],
  "/Blog/2022/Crawl/practice":[
    {
      text:"网络爬虫实战",
      icon:" ",
      children:["ScrapeMovie.html","TianMaoAnalysi.html","TianMaoCrawl.html","TianMaoSave.html","PythonCrawl.html"]
    },
  ]
});
