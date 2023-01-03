import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "book",
    icon: "editor",
    link: " "
  },
  {
    text:"record",
    icon:"like",
    children:[
      {
        text:"study record",
        children: [
          {
            text:"python基础", icon:"build" ,link: "/Blog/2022/PythonBasic"
          },
          {
            text:"python自动化",icon:"extend",link:"/Blog/2022/Python/Automation"
          },
          {
            text:"graduate",icon:"extend",link:"/Blog/2022/Gra/Template_graduate.html"
          },
          {
            text:"网络爬虫技术原理",icon:"extend",link:"/Blog/2022/Crawl/foundation/PythonCrawl.html"
          },
          {
            text:"网络爬虫实战",icon:"extend",link:"/Blog/2022/Crawl/TianMaoCrawl.html"
          },
          {
            text:"MongoDB",icon:"extend",link:"/Blog/2022/MongoDB_/MGdb.html"
          },

        ]
      },
      {
        text:"news",
        children: [
          {
            text:"myplog",link:""
          }
        ]
      }
    ]
  }

]);
