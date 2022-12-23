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
            text:"python基础", icon:"build" ,link: ""
          },
          {
            text:"python自动化",icon:"extend",link:""
          },
          {
            text:"Gra",icon:"extend",link:"/Blog/2022/Gra"
          },
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
