export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"augwewe\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"home\",\"title\":\"augwewe\",\"heroImage\":\"/logo.png\",\"heroText\":\"augwewe\",\"bgImage\":\"/f2.jpg\",\"tagline\":\"<font color=\\\"white\\\"> keep hungry keep foolish </font>\",\"heroFullScreen\":true,\"projects\":[{\"icon\":\"zixun10\",\"name\":\"project name\",\"desc\":\"project detailed description\",\"link\":\"https://your.project.link\"},{\"icon\":\"link\",\"name\":\"link name\",\"desc\":\"link detailed description\",\"link\":\"https://link.address\"},{\"icon\":\"book\",\"name\":\"book name\",\"desc\":\"Detailed description of the book\",\"link\":\"https://link.to.your.book\"},{\"icon\":\"article\",\"name\":\"article name\",\"desc\":\"Detailed description of the article\",\"link\":\"https://link.to.your.article\"}],\"footer\":\"customize your footer text\",\"summary\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://augwewe.cn/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"augwewe\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"augwewe\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.28,\"words\":83},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
