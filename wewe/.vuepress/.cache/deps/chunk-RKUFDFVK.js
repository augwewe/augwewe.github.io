import {
  useArticles,
  useBlogOptions,
  useCategoryMap,
  useTagMap,
  useTimelines
} from "./chunk-HVWOKZXD.js";
import {
  useNavigate,
  usePure,
  useThemeLocaleData
} from "./chunk-G3BKY3H3.js";
import {
  Lt
} from "./chunk-4FFXQBON.js";
import {
  client_exports
} from "./chunk-FECFGNAG.js";
import {
  computed,
  defineComponent,
  h
} from "./chunk-ACN7CFPX.js";

// wewe/.vuepress/.temp/theme-hope/socialMedia.js
var icons = { "Email": '<svg xmlns="http://www.w3.org/2000/svg" ariaLabelledby="email" class="icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"/>,<path fill="#fff" d="M299.372 313.572H722.93c28.945 0 52.61 21.845 52.975 48.787L511.333 500.35 246.76 362.481c.182-27.003 23.666-48.97 52.611-48.97zm-52.671 101.702l-.243 244.121c0 27.186 23.848 49.395 52.914 49.395H722.93c29.127 0 52.975-22.21 52.975-49.395V415.152L517.522 546.71a13.957 13.957 0 01-12.682 0L246.7 415.274z"/></svg>', "GitHub": '<svg xmlns="http://www.w3.org/2000/svg" ariaLabelledby="github" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/>,<path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>', "Weibo": '<svg xmlns="http://www.w3.org/2000/svg" ariaLabelledby="weibo" class="icon weibo-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#E6162D"/>,<path fill="#fff" d="M745.314 454.802c9.652 0 17.869-7.258 19.239-16.728a8.39 8.39 0 0 0 .261-2.12C779.445 302.233 657.02 325.25 657.02 325.25c-10.869 0-19.567 8.94-19.567 20.089 0 10.97 8.698 19.907 19.567 19.907 87.95-19.732 68.54 69.649 68.54 69.649-.004 11.06 8.842 19.908 19.754 19.908z"/>,<path fill="#fff" d="M731.054 221.409c-42.342-10.077-85.862-1.393-98.055.981-.938.09-1.829.994-2.697 1.17-.415.088-.673.532-.673.532-12.045 3.457-20.828 14.77-20.828 28.14 0 15.932 12.694 29.034 28.564 29.034 0 0 15.39-2.097 25.846-6.252 10.364-4.246 98.012-3.16 141.576 71.17 23.734 54.247 10.428 90.553 8.778 96.387 0 0-5.653 14.095-5.653 27.973 0 16.024 12.694 26.083 28.433 26.083 13.169 0 24.211-1.821 27.452-24.447h.172c46.768-158.386-57.183-232.81-132.915-250.771zm-44.083 282.78c-28.28-5.579-14.519-21.062-14.519-21.062s27.67-46.38-5.482-80.099c-41.104-41.761-140.966 5.314-140.966 5.314-38.144 12.032-28.02-5.49-22.629-35.31 0-35.13-11.844-94.596-113.445-59.47-101.49 35.309-188.654 159.03-188.654 159.03-60.603 82.207-52.56 145.747-52.56 145.747 15.128 140.268 161.749 178.772 275.782 187.89 119.967 9.564 281.905-42.045 330.988-148.064 49.105-106.193-40.126-148.22-68.515-153.975zM433.387 766.675c-119.124 5.658-215.394-55.053-215.394-135.851 0-80.887 96.27-145.748 215.394-151.328 119.162-5.58 215.634 44.333 215.634 125.052.002 80.79-96.475 156.626-215.634 162.127z"/>,<path fill="#fff" d="M409.603 532.773c-119.77 14.249-105.943 128.31-105.943 128.31s-1.22 36.117 32.126 54.513c70.084 38.593 142.248 15.224 178.723-32.634 36.474-47.888 15.086-164.346-104.906-150.189zM379.39 692.856c-22.343 2.665-40.385-10.437-40.385-29.463 0-18.94 16.02-38.768 38.387-41.143 25.694-2.485 42.431 12.56 42.431 31.588-.003 18.936-18.128 36.449-40.433 39.018zm70.626-61.146c-7.59 5.754-16.893 4.958-20.892-1.948-4.175-6.726-2.607-17.52 5.046-23.19 8.863-6.714 18.105-4.779 22.106 1.958 4.02 6.893 1.153 17.246-6.26 23.18z"/></svg>' };

// node_modules/vuepress-theme-hope/lib/client/modules/blog/components/SocialMedia.js
import "D:/myaugwewe/augwewe.github.io/node_modules/vuepress-theme-hope/lib/client/modules/blog/styles/social-media.scss";
var SocialMedia_default = defineComponent({
  name: "SocialMedia",
  setup() {
    const blogOptions = useBlogOptions();
    const isPure = usePure();
    const mediaLinks = computed(() => {
      const config = blogOptions.value.medias;
      if (config)
        return Object.entries(config).map(([media, url]) => ({
          name: media,
          icon: icons[media],
          url
        }));
      return [];
    });
    return () => mediaLinks.value.length ? h("div", { class: "social-media-wrapper" }, mediaLinks.value.map(({ name, icon, url }) => h("a", {
      class: "social-media",
      href: url,
      rel: "noopener noreferrer",
      target: "_blank",
      "aria-label": name,
      ...isPure.value ? {} : { "data-balloon-pos": "up" },
      innerHTML: icon
    }))) : null;
  }
});

// node_modules/vuepress-theme-hope/lib/client/modules/blog/components/BloggerInfo.js
import "D:/myaugwewe/augwewe.github.io/node_modules/vuepress-theme-hope/lib/client/modules/blog/styles/blogger-info.scss";
var BloggerInfo_default = defineComponent({
  name: "BloggerInfo",
  setup() {
    const blogOptions = useBlogOptions();
    const siteLocale = (0, client_exports.useSiteLocaleData)();
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const categoryMap = useCategoryMap();
    const tagMap = useTagMap();
    const timelines = useTimelines();
    const navigate = useNavigate();
    const bloggerName = computed(() => {
      var _a;
      return blogOptions.value.name || ((_a = Lt(themeLocale.value.author)[0]) == null ? void 0 : _a.name) || siteLocale.value.title;
    });
    const bloggerAvatar = computed(() => blogOptions.value.avatar || themeLocale.value.logo);
    const locale = computed(() => themeLocale.value.blogLocales);
    const intro = computed(() => blogOptions.value.intro);
    return () => h("div", {
      class: "blogger-info",
      vocab: "https://schema.org/",
      typeof: "Person"
    }, [
      h("div", {
        class: "blogger",
        ...intro.value ? {
          style: { cursor: "pointer" },
          "aria-label": locale.value.intro,
          "data-balloon-pos": "down",
          role: "navigation",
          onClick: () => navigate(intro.value)
        } : {}
      }, [
        bloggerAvatar.value ? h("img", {
          class: [
            "blogger-avatar",
            {
              round: blogOptions.value.roundAvatar
            }
          ],
          src: (0, client_exports.withBase)(bloggerAvatar.value),
          property: "image",
          alt: "Blogger Avatar"
        }) : null,
        bloggerName.value ? h("div", { class: "blogger-name", property: "name" }, bloggerName.value) : null,
        blogOptions.value.description ? h("div", {
          class: "blogger-description",
          innerHTML: blogOptions.value.description
        }) : null,
        intro.value ? h("meta", { property: "url", content: (0, client_exports.withBase)(intro.value) }) : null
      ]),
      h("div", { class: "num-wrapper" }, [
        h("div", { onClick: () => navigate(articles.value.path) }, [
          h("div", { class: "num" }, articles.value.items.length),
          h("div", locale.value.article)
        ]),
        h("div", { onClick: () => navigate(categoryMap.value.path) }, [
          h("div", { class: "num" }, Object.keys(categoryMap.value.map).length),
          h("div", locale.value.category)
        ]),
        h("div", { onClick: () => navigate(tagMap.value.path) }, [
          h("div", { class: "num" }, Object.keys(tagMap.value.map).length),
          h("div", locale.value.tag)
        ]),
        h("div", { onClick: () => navigate(timelines.value.path) }, [
          h("div", { class: "num" }, timelines.value.items.length),
          h("div", locale.value.timeline)
        ])
      ]),
      h(SocialMedia_default)
    ]);
  }
});

export {
  BloggerInfo_default
};
//# sourceMappingURL=chunk-RKUFDFVK.js.map
