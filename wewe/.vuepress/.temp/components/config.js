import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/Users/huangjiabao/GitHub/WebSite/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useStyleTag } from "/Users/huangjiabao/GitHub/WebSite/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import AudioPlayer from "/Users/huangjiabao/GitHub/WebSite/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/components/AudioPlayer.js";
import Badge from "/Users/huangjiabao/GitHub/WebSite/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import BiliBili from "/Users/huangjiabao/GitHub/WebSite/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import FontIcon from "/Users/huangjiabao/GitHub/WebSite/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import CodePen from "/Users/huangjiabao/GitHub/WebSite/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/components/CodePen.js";
import PDF from "/Users/huangjiabao/GitHub/WebSite/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import SiteInfo from "/Users/huangjiabao/GitHub/WebSite/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";
import StackBlitz from "/Users/huangjiabao/GitHub/WebSite/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/components/StackBlitz.js";
import VideoPlayer from "/Users/huangjiabao/GitHub/WebSite/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/components/VideoPlayer.js";
import YouTube from "/Users/huangjiabao/GitHub/WebSite/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/components/YouTube.js";
import Replit from "/Users/huangjiabao/GitHub/WebSite/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/components/Replit.js";
import ArtPlayer from "/Users/huangjiabao/GitHub/WebSite/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/components/ArtPlayer.js";
import BackToTop from "/Users/huangjiabao/GitHub/WebSite/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


import "/Users/huangjiabao/GitHub/WebSite/augwewe.github.io/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("AudioPlayer")) app.component("AudioPlayer", AudioPlayer);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("CodePen")) app.component("CodePen", CodePen);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    if(!hasGlobalComponent("StackBlitz")) app.component("StackBlitz", StackBlitz);
    if(!hasGlobalComponent("VideoPlayer")) app.component("VideoPlayer", VideoPlayer);
    if(!hasGlobalComponent("YouTube")) app.component("YouTube", YouTube);
    if(!hasGlobalComponent("Replit")) app.component("Replit", Replit);
    if(!hasGlobalComponent("ArtPlayer")) app.component("ArtPlayer", ArtPlayer);
    
  },
  setup: () => {
      useStyleTag(`\
      @import url("//at.alicdn.com/t/c/font_3740606_fkn8hfh30se.css");
      `);
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
