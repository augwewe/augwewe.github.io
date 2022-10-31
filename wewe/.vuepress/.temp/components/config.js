import { useStyleTag } from "D:/myaugwewe/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import { h } from "vue";
import { defineClientConfig } from "@vuepress/client";
import FontIcon from "D:/myaugwewe/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import PDF from "D:/myaugwewe/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import YouTube from "D:/myaugwewe/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/components/YouTube.js";
import VideoPlayer from "D:/myaugwewe/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/components/VideoPlayer.js";
import BiliBili from "D:/myaugwewe/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import BackToTop from "D:/myaugwewe/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("FontIcon", FontIcon);
    app.component("PDF", PDF);
    app.component("YouTube", YouTube);
    app.component("VideoPlayer", VideoPlayer);
    app.component("BiliBili", BiliBili);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/c/font_3740606_fkn8hfh30se.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});