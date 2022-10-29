export const themeData = JSON.parse("{\"blog\":{\"medias\":{\"Email\":\"https://mail.qq.com/\",\"GitHub\":\"https://github.com/augwewe\",\"Weibo\":\"https://weibo.com/newlogin?tabtype=weibo&gid=102803&openLoginLayer=0&url=https%3A%2F%2Fweibo.com%2F\"}},\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$iQedd9im5iL8W38w8Ku.6em8.gIS6zOqFSRQfq7AJv5gjZkBLs4cu\"],\"/zh/demo/encrypt.html\":[\"$2a$10$nsQF4f3XUJvgVR9bilRoMOngBOfFQ9mLdKzXKJsYv5wxBMYEl4XxG\"]}},\"pure\":false,\"darkmode\":\"switch\",\"themeColor\":false,\"fullscreen\":false,\"locales\":{\"/\":{\"blog\":{\"description\":\"一个前端开发者\",\"intro\":\"/zh/intro.html\"},\"repoDisplay\":true,\"navbarIcon\":true,\"navbarAutoHide\":\"mobile\",\"hideSiteNameonMobile\":true,\"sidebar\":{\"/zh/\":[\"\",{\"text\":\"如何使用\",\"icon\":\"creative\",\"prefix\":\"guide/\",\"link\":\"guide/\",\"children\":\"structure\"},{\"text\":\"文章\",\"icon\":\"note\",\"prefix\":\"posts/\",\"children\":\"structure\"},\"intro\",\"slides\"]},\"sidebarIcon\":true,\"headerDepth\":2,\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"在 GitHub 上编辑此页\"},\"blogLocales\":{\"article\":\"文章\",\"articleList\":\"文章列表\",\"category\":\"分类\",\"tag\":\"标签\",\"timeline\":\"时间轴\",\"timelineTitle\":\"昨日不在\",\"all\":\"全部\",\"intro\":\"个人介绍\",\"star\":\"收藏\",\"slides\":\"幻灯片\",\"encrypt\":\"加密\"},\"paginationLocales\":{\"prev\":\"上一页\",\"next\":\"下一页\",\"navigate\":\"跳转到\",\"action\":\"前往\",\"errorText\":\"请输入 1 到 $page 之前的页码！\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"author\":{\"name\":\"Mr.Hope\",\"url\":\"https://mrhope.site\"},\"logo\":\"/logo.png\",\"repo\":\"vuepress-theme-hope/vuepress-theme-hope\",\"docsDir\":\"docs\",\"pageInfo\":[\"Author\",\"Original\",\"Date\",\"Category\",\"Tag\",\"ReadingTime\"],\"navbar\":[\"/zh/\",{\"text\":\"演示\",\"icon\":\"discover\",\"link\":\"/zh/demo/\"},{\"text\":\"博文\",\"icon\":\"edit\",\"prefix\":\"/zh/posts/\",\"children\":[{\"text\":\"苹果\",\"icon\":\"edit\",\"prefix\":\"apple/\",\"children\":[{\"text\":\"苹果1\",\"icon\":\"edit\",\"link\":\"1\"},{\"text\":\"苹果2\",\"icon\":\"edit\",\"link\":\"2\"},\"3\",\"4\"]},{\"text\":\"香蕉\",\"icon\":\"edit\",\"prefix\":\"banana/\",\"children\":[{\"text\":\"香蕉 1\",\"icon\":\"edit\",\"link\":\"1\"},{\"text\":\"香蕉 2\",\"icon\":\"edit\",\"link\":\"2\"},\"3\",\"4\"]},{\"text\":\"樱桃\",\"icon\":\"edit\",\"link\":\"cherry\"},{\"text\":\"火龙果\",\"icon\":\"edit\",\"link\":\"dragonfruit\"},\"tomato\",\"strawberry\"]},{\"text\":\"V2 文档\",\"icon\":\"note\",\"link\":\"https://vuepress-theme-hope.github.io/v2/zh/\"}],\"footer\":\"默认页脚\",\"displayFooter\":true}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
