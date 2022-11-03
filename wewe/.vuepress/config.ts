import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";
export default defineUserConfig({
  base: "/",
  head:[
  [
      'script',
      {
        type:"text/javascript",
        src:"/ js/baidu.js"
      }
      ]
  ],
  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "Blog Demo",
    //   description: "A blog demo for vuepress-theme-hope",
    // },
    "/": {
      lang: "zh-CN",
      title: "augwewe",
      description: "study and life",
    },
  },
  plugins: [
      searchPlugin({
        locales:{
          "/":{
            placeholder:"搜索",

          },
        },
      }),
  ],
  theme,

  shouldPrefetch: false,
});

