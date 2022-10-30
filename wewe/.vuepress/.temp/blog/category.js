export const categoryMap = {"category":{"/":{"path":"/category/","map":{"notebook":{"path":"/category/notebook/","keys":["v-711c2fc6","v-b7228aa4"]},"VuePress":{"path":"/category/vuepress/","keys":["v-711c2fc6","v-b7228aa4"]}}}},"tag":{"/":{"path":"/tag/","map":{"Vue":{"path":"/tag/vue/","keys":["v-711c2fc6","v-b7228aa4"]},"VuePress":{"path":"/tag/vuepress/","keys":["v-711c2fc6","v-b7228aa4"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
