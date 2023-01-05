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
      children:["Template_graduate.html","Try_Exception.html","CrawlBase.html","About_Request.html"]
    },
  ],
  "/Blog/2022/Crawl/foundation":[
    {
      text:"网络爬虫技术原理",
      icon:" ",
      children:["PythonCrawl.html","rule.html","AskUrl_Temp.html"]
    },
  ],
  "/Blog/2022/Crawl":[
    {
      text:"网络爬虫实战",
      icon:" ",
      children:["NovelCrawl.html","ScrapeMovie.html","TianMaoCrawl.html","TianMaoAnalysi.html","TianMaoSave.html","Img_Save.html"]
    },
  ],
  "/Blog/2022/MongoDB_":[
    {
      text:"MongoDB",
      icon:" ",
      children:["MGdb.html","About_MGdb.html"]
    },
  ],
});
