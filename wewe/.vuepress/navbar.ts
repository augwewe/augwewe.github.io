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
            text:"Gra",icon:"extend",link:"/Blog/2022/Gra/Template_graduate.html"
          },
          {
            text:"网络爬虫原理",icon:"extend",link:"/Blog/2022/Crawl/foundation/AskUrl_Temp.html"
          },
          {
            text:"网络爬虫实践",icon:"extend",link:"/Blog/2022/Crawl/practice/NovelCrawl.html"
          }

        ]
      },
      {
        text:"news",
        children: [
          {
            text:"daliy news",link:""
          }
        ]
      }
    ]
  }

]);
