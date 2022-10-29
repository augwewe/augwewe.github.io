import {
  tt
} from "./chunk-4FFXQBON.js";
import {
  client_exports
} from "./chunk-FECFGNAG.js";
import {
  useRoute
} from "./chunk-RLCMQTEQ.js";
import "./chunk-YACYAO4R.js";
import {
  computed,
  defineComponent,
  h,
  onMounted,
  watch
} from "./chunk-ACN7CFPX.js";
import "./chunk-WFBTEJUR.js";
import "./chunk-5E3NKPRU.js";

// node_modules/vuepress-plugin-comment2/lib/client/components/Waline.js
import { Waline as w } from "@waline/client/dist/component.mjs";
import { pageviewCount as C } from "@waline/client/dist/pageview.mjs";
import { pageviewCount as _ } from "@waline/client/dist/pageview.mjs";
import "D:/myaugwewe/augwewe.github.io/node_modules/@waline/client/dist/waline.css";
import "D:/myaugwewe/augwewe.github.io/node_modules/vuepress-plugin-comment2/lib/client/styles/waline.scss";
var e = COMMENT_OPTIONS;
var k = WALINE_LOCALES;
var i = Boolean(e.serverURL);
WALINE_META && import("D:/myaugwewe/augwewe.github.io/node_modules/@waline/client/dist/waline-meta.css");
var A = defineComponent({ name: "WalineComment", setup() {
  const a = useRoute(), m = (0, client_exports.usePageFrontmatter)(), p = (0, client_exports.usePageLang)(), s = tt(k);
  let t;
  const c = computed(() => {
    if (!i)
      return false;
    const r = e.comment !== false, o = m.value.comment;
    return Boolean(o) || r !== false && o !== false;
  }), v = computed(() => {
    if (!i)
      return false;
    const r = e.pageview !== false, o = m.value.pageview;
    return Boolean(o) || r !== false && o !== false;
  }), f = computed(() => ({ lang: p.value === "zh-CN" ? "zh-CN" : "en", locale: { ...s.value, ...e.locale || {} }, emoji: ["//unpkg.com/@waline/emojis@1.1.0/weibo", "//unpkg.com/@waline/emojis@1.1.0/bilibili"], dark: "html.dark", ...e, path: (0, client_exports.withBase)(a.path) }));
  return onMounted(() => {
    watch(() => a.path, () => {
      t == null || t(), v.value && setTimeout(() => {
        t = C({ serverURL: e.serverURL, path: (0, client_exports.withBase)(a.path) });
      }, e.delay || 500);
    }, { immediate: true });
  }), () => c.value ? h("div", { class: "waline-wrapper" }, i ? h(w, f.value) : []) : null;
} });

// dep:@CommentProvider
var CommentProvider_default = A;
export {
  CommentProvider_default as default,
  _ as pageviewCount
};
//# sourceMappingURL=@CommentProvider.js.map
