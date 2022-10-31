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
  "/Blog/2022":[
    {
      text:"基础篇1",
      icon:" ",
      children:[""]
    },
    {
      text:"基础篇2",
      icon:"",
      children:[""]
    }
  ]
});
