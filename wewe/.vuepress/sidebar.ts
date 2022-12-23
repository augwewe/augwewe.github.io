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
  "请求头":[
    {
      text:"graduate",
      icon:" ",
      children:[""],
      link:"http://localhost:8080/Blog/2022/Gra/Template_graduate.html"
    },
  ]
});
