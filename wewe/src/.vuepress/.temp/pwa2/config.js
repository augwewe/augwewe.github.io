import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "D:/myaugwewe/augwewe.github.io/wewe/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "D:/myaugwewe/augwewe.github.io/wewe/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});